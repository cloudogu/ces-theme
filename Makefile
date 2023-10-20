.DEFAULT_GOAL:=build

.PHONY: gen-audit
gen-audit: gen-audit-severity gen-audit-prod

.PHONY: result-dir
result-dir:
	@mkdir -p tmp

.PHONY: gen-audit-prod
gen-audit-prod: result-dir
	@mkdir -p target
	@-npm audit --json --prod 1> target/audit_prod.json

.PHONY: gen-audit-dev
gen-audit-dev: result-dir
	@mkdir -p target
	@-npm audit --json --dev 1> target/audit_dev.json

.PHONY: gen-audit-severity-all
gen-audit-severity-all: gen-audit-dev
	@cat target/audit_dev.json | jq '.advisories | with_entries(select(.value.severity == "low"))' 1> target/audit_dev_low.json
	@cat target/audit_dev.json | jq '.advisories | with_entries(select(.value.severity == "moderate"))' 1> target/audit_dev_moderate.json
	@cat target/audit_dev.json | jq '.advisories | with_entries(select(.value.severity == "high"))' 1> target/audit_dev_high.json
	@cat target/audit_dev.json | jq '.advisories | with_entries(select(.value.severity == "critical"))' 1> target/audit_dev_critical.json

.PHONY: build
build: install
	gulp

.PHONY: serve
serve: install
	gulp serve

.PHONY: install
install:
	npm install -g gulp bower
	npm install
	bower install
	npm rebuild node-sass
	npm rebuild sharp