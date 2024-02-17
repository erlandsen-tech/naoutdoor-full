import json
import boto3
import requests
import uuid
import os
import logging


def lambda_handler(event, context):
    logger = logging.getLogger()
    logger.setLevel(logging.DEBUG)
    try:
        print("received event:")
        body = json.loads(event["body"])  # Parse the body into a Python dictionary
        print(body)
        recaptcha_response = body["recaptchaValue"]
        homeGroup = body["homeGroup"]  # Get the homegroup value from the request body
        cleanDate = body["cleanDate"]  # Get the cleandate value from the request body
        country = body["country"]  # Get the cleandate value from the request body
        client = boto3.client("secretsmanager")
        secret_response = client.get_secret_value(
            SecretId=os.getenv("RECAPTCHA_SECRET")
        )
        secret_key = secret_response["SecretString"]  # Extract the secret string
        response = requests.post(
            "https://www.google.com/recaptcha/api/siteverify",
            data={"secret": secret_key, "response": recaptcha_response},
        )
        recaptcha_result = response.json()
        print(recaptcha_result)
        if not recaptcha_result["success"]:
            return {
                "statusCode": 400,
                "headers": {
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                },
                "body": json.dumps("reCAPTCHA validation failed"),
            }

        dynamodb = boto3.resource("dynamodb")
        table = dynamodb.Table("member")

        # Write homegroup and cleandate to the database
        table.put_item(
            Item={
                "HomeGroup": homeGroup,
                "CleanDate": cleanDate,
                "Country": country,
                "Id": str(uuid.uuid4()),
            }
        )
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            },
            "body": json.dumps("Write successful!"),
        }
    except Exception as e:
        logger.error("Error occurred: %s", e)
