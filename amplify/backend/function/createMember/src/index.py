import json
import boto3
import requests


def handler(event, context):
    print("received event:")
    print(event)
    recaptcha_response = event["body"]["recaptchaValue"]
    secret_key = "supersecretkey"
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
