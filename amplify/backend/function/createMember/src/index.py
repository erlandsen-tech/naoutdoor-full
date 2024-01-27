import json
import boto3
import requests


def handler(event, context):
    print("received event:")
    body = json.loads(event["body"])  # Parse the body into a Python dictionary
    print(body)
    recaptcha_response = body["recaptchaValue"]
    client = boto3.client("ssm")
    secret_key = client.get_parameter(
        Name="reCAPTCHAkey",
        WithDecryption=True,
    )[
        "Parameter"
    ]["Value"]
    response = requests.post(
        "https://www.google.com/recaptcha/api/siteverify",
        data={"secret": secret_key, "response": recaptcha_response},
    )
    recaptcha_result = response.json()

    if not recaptcha_result["success"]:
        return {"statusCode": 400, "body": json.dumps("reCAPTCHA validation failed")}
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table("members-staging")
    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        "body": json.dumps("Hello from your new Amplify Python lambda!"),
    }
