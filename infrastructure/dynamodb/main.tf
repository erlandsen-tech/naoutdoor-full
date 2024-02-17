resource "aws_dynamodb_table" "member" {
  name         = "member"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "HomeGroup"
  range_key    = "Id"

  attribute {
    name = "HomeGroup"
    type = "S"
  }
  attribute {
    name = "Id"
    type = "S" # S for string.
  }
}
