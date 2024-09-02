# Na outdoor

## How it is built

All infrastructure is written in terraform. Currently there is no ci/cd for the infrastructure.
All frontend is written in react.
All backend is aws lambda running python 3.12

## How to install and run locally
npm install

npm run build

npm start

Nå kjører appen i localhost:3000

I nodejs 18 må denne settes (på linux) export NODE_OPTIONS=--openssl-legacy-provider
eller:
On Windows command prompt:

set NODE_OPTIONS=--openssl-legacy-provider

On PowerShell:

$env:NODE_OPTIONS = "--openssl-legacy-provider"
---
# TODO
CICD for infrastructure


