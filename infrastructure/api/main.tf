resource "aws_api_gateway_rest_api" "naoutdoor" {
  name = "naoutdoor-api"
}

resource "aws_api_gateway_resource" "member" {
  rest_api_id = aws_api_gateway_rest_api.naoutdoor.id
  parent_id   = aws_api_gateway_rest_api.naoutdoor.root_resource_id
  path_part   = "createMember"
}

resource "aws_api_gateway_resource" "members" {
  rest_api_id = aws_api_gateway_rest_api.naoutdoor.id
  parent_id   = aws_api_gateway_rest_api.naoutdoor.root_resource_id
  path_part   = "listMembers"
}

resource "aws_api_gateway_method" "members_get" {
  rest_api_id   = aws_api_gateway_rest_api.naoutdoor.id
  resource_id   = aws_api_gateway_resource.members.id
  http_method   = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "members_get" {
  rest_api_id             = aws_api_gateway_rest_api.naoutdoor.id
  resource_id             = aws_api_gateway_resource.members.id
  http_method             = aws_api_gateway_method.members_get.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = var.list_members_lambda_arn
}


resource "aws_api_gateway_method" "member_get" {
  rest_api_id   = aws_api_gateway_rest_api.naoutdoor.id
  resource_id   = aws_api_gateway_resource.member.id
  http_method   = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "member_get" {
  rest_api_id             = aws_api_gateway_rest_api.naoutdoor.id
  resource_id             = aws_api_gateway_resource.member.id
  http_method             = aws_api_gateway_method.member_get.http_method
  integration_http_method = "GET"
  type                    = "AWS_PROXY"
  uri                     = var.create_member_lambda_arn
}

resource "aws_api_gateway_method" "member_create" {
  rest_api_id   = aws_api_gateway_rest_api.naoutdoor.id
  resource_id   = aws_api_gateway_resource.member.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "member_create" {
  rest_api_id = aws_api_gateway_rest_api.naoutdoor.id
  resource_id = aws_api_gateway_resource.member.id
  http_method = aws_api_gateway_method.member_create.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = var.create_member_lambda_arn
}

resource "aws_api_gateway_method_response" "get200" {
  rest_api_id = aws_api_gateway_rest_api.naoutdoor.id
  resource_id = aws_api_gateway_resource.member.id
  http_method = aws_api_gateway_method.member_get.http_method
  status_code = "200"
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true
    "method.response.header.Access-Control-Allow-Methods" = true
    "method.response.header.Access-Control-Allow-Origin"  = true
  }
  response_models = {
    "application/json" = "Empty"
  }
}

resource "aws_api_gateway_integration_response" "get200" {
  rest_api_id = aws_api_gateway_rest_api.naoutdoor.id
  resource_id = aws_api_gateway_resource.member.id
  http_method = aws_api_gateway_method.member_get.http_method
  status_code = aws_api_gateway_method_response.get200.status_code
  response_parameters = {
    "method.response.header.Access-Control-Allow-Origin"  = "'*'"
    "method.response.header.Access-Control-Allow-Methods" = "'GET,POST,OPTIONS'"
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'"
  }
  response_templates = {
    "application/json" = ""
  }
}

resource "aws_api_gateway_method_response" "post200" {
  rest_api_id = aws_api_gateway_rest_api.naoutdoor.id
  resource_id = aws_api_gateway_resource.member.id
  http_method = aws_api_gateway_method.member_create.http_method
  status_code = "200"
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true
    "method.response.header.Access-Control-Allow-Methods" = true
    "method.response.header.Access-Control-Allow-Origin"  = true
  }
  response_models = {
    "application/json" = "Empty"
  }
}

resource "aws_api_gateway_integration_response" "post200" {
  rest_api_id = aws_api_gateway_rest_api.naoutdoor.id
  resource_id = aws_api_gateway_resource.member.id
  http_method = aws_api_gateway_method.member_create.http_method
  status_code = aws_api_gateway_method_response.post200.status_code
  response_parameters = {
    "method.response.header.Access-Control-Allow-Origin"  = "'*'"
    "method.response.header.Access-Control-Allow-Methods" = "'GET,POST,OPTIONS'"
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'"
  }
  response_templates = {
    "application/json" = ""
  }
}

resource "aws_api_gateway_method_response" "get200members" {
  rest_api_id = aws_api_gateway_rest_api.naoutdoor.id
  resource_id = aws_api_gateway_resource.members.id
  http_method = aws_api_gateway_method.members_get.http_method
  status_code = "200"
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true
    "method.response.header.Access-Control-Allow-Methods" = true
    "method.response.header.Access-Control-Allow-Origin"  = true
  }
  response_models = {
    "application/json" = "Empty"
  }
}

resource "aws_api_gateway_integration_response" "get200members" {
  rest_api_id = aws_api_gateway_rest_api.naoutdoor.id
  resource_id = aws_api_gateway_resource.members.id
  http_method = aws_api_gateway_method.members_get.http_method
  status_code = aws_api_gateway_method_response.get200members.status_code
  response_parameters = {
    "method.response.header.Access-Control-Allow-Origin"  = "'*'"
    "method.response.header.Access-Control-Allow-Methods" = "'GET,OPTIONS'"
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'"
  }
  response_templates = {
    "application/json" = ""
  }
}


# OPTIONS HTTP method.
resource "aws_api_gateway_method" "options_for_create_member" {
  rest_api_id      = aws_api_gateway_rest_api.naoutdoor.id
  resource_id      = aws_api_gateway_resource.member.id
  http_method      = "OPTIONS"
  authorization    = "NONE"
  api_key_required = false
}

# OPTIONS method response.
resource "aws_api_gateway_method_response" "options_for_create_member" {
  rest_api_id = aws_api_gateway_rest_api.naoutdoor.id
  resource_id = aws_api_gateway_resource.member.id
  http_method = aws_api_gateway_method.options_for_create_member.http_method
  status_code = "200"
  response_models = {
    "application/json" = "Empty"
  }
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true
    "method.response.header.Access-Control-Allow-Methods" = true
    "method.response.header.Access-Control-Allow-Origin"  = true
  }
}

# OPTIONS integration.
resource "aws_api_gateway_integration" "options_for_create_member" {
  rest_api_id          = aws_api_gateway_rest_api.naoutdoor.id
  resource_id          = aws_api_gateway_resource.member.id
  http_method          = "OPTIONS"
  type                 = "MOCK"
  passthrough_behavior = "WHEN_NO_MATCH"
  request_templates = {
    "application/json" : "{\"statusCode\": 200}"
  }
}

# OPTIONS integration response.
resource "aws_api_gateway_integration_response" "options_for_create_member" {
  rest_api_id = aws_api_gateway_rest_api.naoutdoor.id
  resource_id = aws_api_gateway_resource.member.id
  http_method = aws_api_gateway_integration.options_for_create_member.http_method
  status_code = "200"
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'"
    "method.response.header.Access-Control-Allow-Methods" = "'GET,POST,OPTIONS'"
    "method.response.header.Access-Control-Allow-Origin"  = "'*'"
  }
}

# OPTIONS HTTP method.
resource "aws_api_gateway_method" "options_for_list_members" {
  rest_api_id      = aws_api_gateway_rest_api.naoutdoor.id
  resource_id      = aws_api_gateway_resource.members.id
  http_method      = "OPTIONS"
  authorization    = "NONE"
  api_key_required = false
}

# OPTIONS method response.
resource "aws_api_gateway_method_response" "options_for_list_members" {
  rest_api_id = aws_api_gateway_rest_api.naoutdoor.id
  resource_id = aws_api_gateway_resource.members.id
  http_method = aws_api_gateway_method.options_for_list_members.http_method
  status_code = "200"
  response_models = {
    "application/json" = "Empty"
  }
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true
    "method.response.header.Access-Control-Allow-Methods" = true
    "method.response.header.Access-Control-Allow-Origin"  = true
  }
}

# OPTIONS integration.
resource "aws_api_gateway_integration" "options_for_list_members" {
  rest_api_id          = aws_api_gateway_rest_api.naoutdoor.id
  resource_id          = aws_api_gateway_resource.members.id
  http_method          = "OPTIONS"
  type                 = "MOCK"
  passthrough_behavior = "WHEN_NO_MATCH"
  request_templates = {
    "application/json" : "{\"statusCode\": 200}"
  }
}

# OPTIONS integration response.
resource "aws_api_gateway_integration_response" "options_for_list_members" {
  rest_api_id = aws_api_gateway_rest_api.naoutdoor.id
  resource_id = aws_api_gateway_resource.members.id
  http_method = aws_api_gateway_integration.options_for_list_members.http_method
  status_code = "200"
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'"
    "method.response.header.Access-Control-Allow-Methods" = "'GET,POST,OPTIONS'"
    "method.response.header.Access-Control-Allow-Origin"  = "'*'"
  }
}


resource "aws_lambda_permission" "apigw_invoke_create_member" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = var.create_member_lambda_name
  principal     = "apigateway.amazonaws.com"

  // The /*/* portion grants permissions to any method on any resource
  // within the specified API Gateway.
  source_arn = "${aws_api_gateway_rest_api.naoutdoor.execution_arn}/*/*"
}
resource "aws_lambda_permission" "apigw_invoke_list_members" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = var.list_members_lambda_name
  principal     = "apigateway.amazonaws.com"

  // The /*/* portion grants permissions to any method on any resource
  // within the specified API Gateway.
  source_arn = "${aws_api_gateway_rest_api.naoutdoor.execution_arn}/*/*"
}

resource "aws_api_gateway_deployment" "naoutdoor" {
  rest_api_id = aws_api_gateway_rest_api.naoutdoor.id

  # This triggers a new deployment every time the API changes
  stage_description = sha256(jsonencode(aws_api_gateway_rest_api.naoutdoor.body))
}

resource "aws_api_gateway_stage" "main" {
  stage_name    = "main"
  rest_api_id   = aws_api_gateway_rest_api.naoutdoor.id
  deployment_id = aws_api_gateway_deployment.naoutdoor.id
  xray_tracing_enabled = true # Optional: Enable X-Ray tracing
}
