#!/usr/bin/env bash
set -ex
pip install --upgrade pip
pip install awscli --upgrade --user
pip install cfn-lint --upgrade --user
sudo apt update
curl -s https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update
sudo apt install -y jq git python3-distutils terraform vim