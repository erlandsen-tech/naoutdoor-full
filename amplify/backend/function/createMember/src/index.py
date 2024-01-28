import json
import boto3
import requests


def handler(event, context):
    print("received event:")
    body = json.loads(event["body"])  # Parse the body into a Python dictionary
    print(body)
    recaptcha_response = body["recaptchaValue"]
    homeGroup = body["homeGroup"]  # Get the homegroup value from the request body
    cleanDate = body["cleanDate"]  # Get the cleandate value from the request body

    client = boto3.client("ssm")
    secret_key = client.get_parameter(
        Name="/amplify/d1cfpw9dly5i31/staging/AMPLIFY_createMember_reCAPTCHAkey",
        WithDecryption=True,
    )["Parameter"]["Value"]
    response = requests.post(
        "https://www.google.com/recaptcha/api/siteverify",
        data={"secret": secret_key, "response": recaptcha_response},
    )
    recaptcha_result = response.json()

    if not recaptcha_result["success"]:
        return {"statusCode": 400, "body": json.dumps("reCAPTCHA validation failed")}

    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table("members-staging")

    # Write homegroup and cleandate to the database
    table.put_item(Item={"homeGroup": homeGroup, "cleanDate": cleanDate})

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        "body": json.dumps("Write successful!"),
    }
