import json

import boto3
from datetime import datetime


def lambda_handler(event, context):
    try:
        dynamodb = boto3.resource("dynamodb")
        table = dynamodb.Table("member")
        response = table.scan()
        items = response["Items"]

        for item in items:
            clean_date = datetime.strptime(item["CleanDate"], "%d-%m-%Y")
            days_since_clean = (datetime.now() - clean_date).days
            item["DaysSinceClean"] = days_since_clean

        return {
            'statusCode': 200,
            "headers": {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,GET",
                "Content-Type": "application/json"
            },            'body': json.dumps(items)
        }
    except Exception as e:
        return {
            'statusCode': 500,
            "headers": {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,GET",
                "Content-Type": "application/json"
            },
            'body': {'exception': json.dumps(str(e))}
        }
