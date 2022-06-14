$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successful login and logout with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user specifies email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_specifies_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs in",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_logs_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the \"Dashboard / nopCommerce administration\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.the_user_is_on_the_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user logs out",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.the_user_logs_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the \"Your store. Login\" page",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.the_user_is_on_the_page(String)"
});
formatter.result({
  "status": "skipped"
});
});