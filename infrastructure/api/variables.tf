variable "create_member_lambda_arn" {
  type = string
}
variable "create_member_lambda_name" {
  type = string
}
variable "list_members_lambda_arn" {
  type = string
}
variable "list_members_lambda_name" {
  type = string
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

variable "account_id" {
  description = "The AWS account ID"
  type        = string

}
