const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let response;

Given('subscription service is running', function () {});

When('I send extend request with {int} days', async function (days) {
  const res = await fetch('http://localhost:3000/extend-subscription', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ days })
  });

  response = res;
});

Then('response should be successful', function () {
  assert.equal(response.status, 200);
});