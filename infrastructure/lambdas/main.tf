resource "aws_s3_bucket" "code_bucket" {
  bucket = "${var.environment_prefix}-code-bucket-${var.region}"
  tags = {
    Environment = var.environment_prefix
  }
}

# Albeit a single resource module is not always considered best practice, I still modularize the lambdas as we use custom deployments
# utilizing archive, and hashes. To abstact this, a module is what you want to use.
module "create_member" {
  source               = "./lambda_skeleton"
  lambda_function_name = "create-member"
  environment_prefix   = var.environment_prefix
  code_bucket          = resource.aws_s3_bucket.code_bucket.id
  basic_lambda_role    = var.basic_lambda_role
  recaptcha_secret_arn = var.recaptcha_secret_arn
}

# module "list_members" {
#   source               = "./lambda_skeleton"
#   lambda_function_name = "list-members"
#   environment_prefix   = var.environment_prefix
#   code_bucket          = resource.aws_s3_bucket.code_bucket.id
#   basic_lambda_role    = var.basic_lambda_role
#   recaptcha_secret_arn = var.recaptcha_secret_arn
# }

module "list_members" {
  source                   = "terraform-aws-modules/lambda/aws"
  function_name            = "${var.environment_prefix}-list-members-${var.region}"
  handler                  = "index.lambda_handler"
  runtime                  = "python3.12"
  create_role              = false
  lambda_role              = var.basic_lambda_role
  store_on_s3              = true
  timeout                  = 300
  publish                  = false
  s3_bucket                = aws_s3_bucket.code_bucket.id
  logging_log_format       = "JSON"
  logging_system_log_level = "DEBUG"
  environment_variables = {
    RECAPTCHA_SECRET       = var.recaptcha_secret_arn
      RECAPTCHA_SECRET = var.recaptcha_secret_arn
  }
  source_path = "${path.root}/../backend/list_members"
}
