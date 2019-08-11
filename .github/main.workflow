workflow "New workflow" {
  on = "push"
  resolves = [
    "Cypress E2E Test"
  ]
}

action "Install Packages" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "Cypress E2E Test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install Packages"]
  args = "run test:e2e"
}
