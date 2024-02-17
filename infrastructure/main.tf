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
  source               = "./lambdas"
  region               = var.region
  basic_lambda_role    = aws_iam_role.basic_lambda_role.arn
  environment_prefix   = var.environment_prefix
  recaptcha_secret_arn = aws_secretsmanager_secret.recaptcha_secret.arn
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
    aws_iam_policy.secretsmanager_get_parameter.arn,

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

resource "aws_iam_policy" "secretsmanager_get_parameter" {
  name        = "SecretsmanagerSecretPolicy"
  description = "Policy that allows access to SSM GetParameter"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "secretsmanager:GetSecretValue",
      "Resource": "${aws_secretsmanager_secret.recaptcha_secret.arn}"
    },
        {
      "Effect": "Allow",
      "Action": [
        "dynamodb:PutItem",
        "dynamodb:GetItem",
        "dynamodb:UpdateItem",
        "dynamodb:DeleteItem",
        "dynamodb:Scan",
        "dynamodb:Query"
      ],
      "Resource": "${module.dynamodb.create_member_lambda_arn}"
    }
  ]
}
EOF
}

resource "aws_secretsmanager_secret" "recaptcha_secret" {
  name = "recaptcha_secret"
}

resource "aws_secretsmanager_secret_version" "recaptcha_secret" {
  secret_id     = aws_secretsmanager_secret.recaptcha_secret.id
  secret_string = var.recaptcha_secret
}

output "basic_lambda_role_arn" {
  value = aws_iam_role.basic_lambda_role.arn
}
