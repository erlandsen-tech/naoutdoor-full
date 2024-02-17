resource "aws_dynamodb_table" "member" {
  name         = "member"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "HomeGroup"

  attribute {
    name = "HomeGroup"
    type = "S"
  }
}
