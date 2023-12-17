include ./app/.env
export $(shell sed 's/=.*//' ./app/.env)

all:
	@echo "please specify a target"
	@echo $$GATEWAY_URL
# bump versions
bump:
	cd app &&\
	npm i next@latest react@latest react-dom@latest eslint-config-next@latest &&\
	npm update
# generate typesafe api schema to app/schemas/api-schema.d.ts
gen-api-schema:
	@echo "Generating API schema"
	cd app &&\
	npx openapi-typescript ${GATEWAY_URL}/api/openapi.json -o schemas/api-schema.d.ts