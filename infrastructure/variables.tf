variable "environment_prefix" {
  description = "The prefix to use for all resources to define environment"
  type        = string
  nullable    = false
}

variable "region" {
  description = "The region where AWS operations will take place"
  type        = string
}

variable "account_id" {
  description = "The AWS account ID"
  type        = string

}
variable "recaptcha_secret" {
  description = "The recaptch secret to use for the recaptcha validation"
  type        = string
  sensitive   = true

}
