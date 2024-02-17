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
