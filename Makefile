.DEFAULT_GOAL:=build

.PHONY: gen-audit
gen-audit: gen-audit-severity-all gen-audit-prod

.PHONY: result-dir
result-dir:
	@mkdir -p target

.PHONY: gen-audit-prod
gen-audit-prod: result-dir
	@-npm audit --json --omit=dev 1> target/audit_prod.json

.PHONY: gen-audit-dev
gen-audit-dev: result-dir
	@-npm audit --json 1> target/audit_dev.json

.PHONY: gen-audit-severity-all
gen-audit-severity-all: gen-audit-dev
	@for severity in low moderate high critical; do \
		jq --arg severity $$severity '.vulnerabilities | with_entries(select(.value.severity == $$severity))' target/audit_dev.json 1> target/audit_dev_$$severity.json; \
	done

.PHONY: build
build: install
	npx gulp

.PHONY: serve
serve: install
	npx gulp serve

.PHONY: install
install:
	npm install
