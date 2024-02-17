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

resource "aws_iam_policy" "ssm_get_parameter" {
  name        = "SSMGetParameterPolicy"
  description = "Policy that allows access to SSM GetParameter"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "ssm:GetParameter",
      "Resource": "arn:aws:ssm:eu-north-1:640882666897:parameter/amplify/d1cfpw9dly5i31/staging/AMPLIFY_createMember_reCAPTCHAkey"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "ssm_get_parameter_attach" {
  role       = aws_iam_role.basic_lambda_role.name
  policy_arn = aws_iam_policy.ssm_get_parameter.arn
}

resource "aws_secretsmanager_secret" "example" {
  name        = "example_secret"
  description = "This is an example secret"
}

resource "aws_secretsmanager_secret_version" "example" {
  secret_id     = aws_secretsmanager_secret.example.id
  secret_string = "supersecret"
}

output "basic_lambda_role_arn" {
  value = aws_iam_role.basic_lambda_role.arn
}
