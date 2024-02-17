variable "lambda_function_name" {
  description = "The name of the lambda function"
  type        = string
}

variable "environment_prefix" {
  description = "The environment prefix"
  type        = string
}

variable "code_bucket" {
  description = "The S3 bucket to store the code"
  type        = string
}

variable "basic_lambda_role" {
  description = "The IAM role for the lambda function"
  type        = string
}
