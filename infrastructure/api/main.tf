module "api_gateway" {
  source = "terraform-aws-modules/apigateway-v2/aws"

  name          = "${var.environment_prefix}-main-http"
  description   = "Main api gw"
  protocol_type = "HTTP"
  create_api_domain_name = false

  cors_configuration = {
    allow_headers = [
      "content-type", "x-amz-date", "authorization", "x-api-key", "x-amz-security-token", "x-amz-user-agent"
    ]
    allow_methods = ["*"]
    allow_origins = ["*"]
  }
  # Access logs
  default_stage_access_log_destination_arn = aws_cloudwatch_log_group.main_api_gateway_access_logs.arn
  default_stage_access_log_format          = "$context.identity.sourceIp - - [$context.requestTime] \"$context.httpMethod $context.routeKey $context.protocol\" $context.status $context.responseLength $context.requestId $context.integrationErrorMessage"

  # Routes and integrations
  integrations = {
    "GET /listMembers" = {
      lambda_arn             = var.list_members_lambda_arn
      payload_format_version = "2.0"
      integration_type = "AWS_PROXY"
      timeout_milliseconds   = 12000
      tags                   = {
        Name = "test-http-apigateway"
      }
    }
    "POST /createMember" = {
      lambda_arn             = var.create_member_lambda_arn
      payload_format_version = "2.0"
      integration_type = "AWS_PROXY"
      timeout_milliseconds   = 12000
      tags                   = {
        Name = "test-http-apigateway"
      }
    }
  }
}

resource "aws_cloudwatch_log_group" "main_api_gateway_access_logs"{
  name = "API-Gateway-Access-Logs"
  tags = {
    Environment = "test"
    Application = "api-gateway"
  }
}

resource "aws_lambda_permission" "apigw_invoke_list_members" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = var.list_members_lambda_arn
  principal     = "apigateway.amazonaws.com"
  source_arn = "arn:aws:execute-api:${var.region}:${var.account_id}:${module.api_gateway.apigatewayv2_api_id}/*/*"
}

resource "aws_lambda_permission" "apigw_invoke_create_members" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = var.create_member_lambda_arn
  principal     = "apigateway.amazonaws.com"
  source_arn = "arn:aws:execute-api:${var.region}:${var.account_id}:${module.api_gateway.apigatewayv2_api_id}/*/*"
}