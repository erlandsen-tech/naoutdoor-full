import json
from collections import defaultdict

import boto3
from datetime import datetime


def lambda_handler(event, context):
    try:
        dynamodb = boto3.resource("dynamodb")
        table = dynamodb.Table("member")
        response = table.scan()
        items = response["Items"]

        total_days = 0
        members_total = len(items)
        country_stats = {}

        for item in items:
            clean_date = datetime.strptime(item["CleanDate"], "%d-%m-%Y")
            days_since_clean = (datetime.now() - clean_date).days
            item["DaysSinceClean"] = days_since_clean
            if item["Country"] not in country_stats:
                country_stats["Country"] = {
                    "total_days": days_since_clean,
                    "member_count": 1,
                }
            else:
                country_stats["Country"]["total_days"] += days_since_clean
                country_stats["Country"]["member_count"] += 1
            total_days += days_since_clean

        return {
            'statusCode': 200,
            "headers": {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Access-Control-Allow-Methods": "POST,OPTIONS,GET",
                "Content-Type": "application/json"
            }, 'body': {
                "total_days": total_days,
                "country_stats": country_stats,
                "members_total": members_total,
            }
        }
    except Exception as e:
        return {
            'statusCode': 500,
            "headers": {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST,OPTIONS,GET",
                "Content-Type": "application/json"
            },
            'body': {'exception': json.dumps(str(e))}
        }
