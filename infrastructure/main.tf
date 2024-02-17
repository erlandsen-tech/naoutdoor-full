terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">=5.36.0"
    }
  }
}

provider "aws" {
  region = var.region
}

module "lambdas" {
  source             = "./lambdas"
  region             = var.region
  basic_lambda_role  = aws_iam_role.basic_lambda_role.arn
  environment_prefix = var.environment_prefix
}

module "dynamodb" {
  source = "./dynamodb"
}

module "api" {
  source                    = "./api"
  create_member_lambda_arn  = module.lambdas.create_member_lambda_arn
  create_member_lambda_name = module.lambdas.create_member_lambda_name
}

resource "aws_iam_role" "basic_lambda_role" {
  name               = "basic_lambda_role"
  assume_role_policy = data.aws_iam_policy_document.assume_role.json

  managed_policy_arns = [
    "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
    "arn:aws:iam::aws:policy/service-role/AWSLambdaRole",
    "arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole",
  ]
}

data "aws_iam_policy_document" "assume_role" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

output "basic_lambda_role_arn" {
  value = aws_iam_role.basic_lambda_role.arn
}
