resource "aws_s3_bucket" "code_bucket" {
  bucket = "${var.environment_prefix}-code-bucket-${var.region}"
  tags = {
    Environment = var.environment_prefix
  }
}

module "create_member" {
  source                   = "terraform-aws-modules/lambda/aws"
  function_name            = "${var.environment_prefix}-create-member-${var.region}"
  handler                  = "index.lambda_handler"
  runtime                  = "python3.12"
  create_role              = false
  lambda_role              = var.basic_lambda_role
  store_on_s3              = true
  timeout                  = 300
  publish                  = true
  s3_bucket                = aws_s3_bucket.code_bucket.id
  logging_log_format       = "JSON"
  logging_system_log_level = "DEBUG"
  environment_variables = {
    RECAPTCHA_SECRET = var.recaptcha_secret_arn
  }
  source_path = "${path.root}/../backend/create_member"
}

module "list_members" {
  source                   = "terraform-aws-modules/lambda/aws"
  function_name            = "${var.environment_prefix}-list-members-${var.region}"
  handler                  = "index.lambda_handler"
  runtime                  = "python3.12"
  create_role              = false
  lambda_role              = var.basic_lambda_role
  store_on_s3              = true
  timeout                  = 300
  publish                  = true
  s3_bucket                = aws_s3_bucket.code_bucket.id
  logging_log_format       = "JSON"
  logging_system_log_level = "DEBUG"
  environment_variables = {
      RECAPTCHA_SECRET = var.recaptcha_secret_arn
  }
  source_path = "${path.root}/../backend/list_members"
}
