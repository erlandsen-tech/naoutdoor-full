output "create_member_lambda_arn" {
  value = module.create_member.lambda_function_arn
}

output "create_member_lambda_name" {
  value = module.create_member.lambda_function_name
}

output "list_members_lambda_arn" {
    value = module.list_members.lambda_function_arn
}
output "list_members_lambda_invoke_arn" {
    value = module.list_members.lambda_function_arn
}

output "list_members_lambda_name" {
    value = module.list_members.lambda_function_name
}