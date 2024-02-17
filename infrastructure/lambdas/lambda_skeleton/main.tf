locals {
  lambda_root                   = "${path.root}./backend/${replace(var.lambda_function_name, "-", "_")}"
  lambda_function_folder_name   = replace(var.lambda_function_name, "-", "_")
  lambda_function_name_with_env = "${var.environment_prefix}-${var.lambda_function_name}"
}

data "archive_file" "lambda" {
  type        = "zip"
  source_dir  = local.lambda_root
  output_path = "./build/${local.lambda_function_folder_name}.zip"
  depends_on  = [null_resource.install_dependencies]
}

resource "aws_s3_object" "lambda" {
  bucket     = var.code_bucket
  key        = "${local.lambda_function_folder_name}.zip"
  source     = data.archive_file.lambda.output_path
  etag       = data.archive_file.lambda.output_base64sha256
  depends_on = [data.archive_file.lambda, null_resource.install_dependencies]
}

resource "aws_lambda_function" "lambda" {
  s3_bucket        = var.code_bucket
  s3_key           = aws_s3_object.lambda.key
  function_name    = local.lambda_function_name_with_env
  role             = var.basic_lambda_role
  handler          = "index.lambda_handler"
  source_code_hash = data.archive_file.lambda.output_base64sha256
  runtime          = "python3.12"
  environment {
    variables = {
      S3_BUCKET = var.code_bucket
      S3_KEY    = aws_s3_object.lambda.key
    }
  }
}

resource "null_resource" "install_dependencies" {
  provisioner "local-exec" {
    command = "pip install -r ${local.lambda_root}/requirements.txt -t ${local.lambda_root}/"
  }

  triggers = {
    dependencies_versions = filemd5("${local.lambda_root}/requirements.txt")
    source_versions       = filemd5("${local.lambda_root}/index.py")
  }
}
data "aws_caller_identity" "current" {}
