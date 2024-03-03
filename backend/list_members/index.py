import boto3


def lambda_handler(event, context):
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table("member")

    response = table.scan()
    items = response["Items"]

    return items
