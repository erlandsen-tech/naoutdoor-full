import boto3
from datetime import datetime


def lambda_handler(event, context):
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table("member")

    response = table.scan()
    items = response["Items"]

    for item in items:
        clean_date = datetime.strptime(item["CleanDate"], "%d-%m-%Y")
        days_since_clean = (datetime.now() - clean_date).days
        item["DaysSinceClean"] = days_since_clean

    return items
