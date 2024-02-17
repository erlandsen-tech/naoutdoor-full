variable "basic_lambda_role" {
  description = "The ARN of the basic lambda role."
  type        = string
}

variable "environment_prefix" {
  description = "The prefix to use for all resources to define environment"
  type        = string
  nullable    = false
}

variable "region" {
  description = "The region where AWS operations will take place"
  type        = string
}
