Feature: Extend subscription

  Scenario: Extend by 5 days
    Given subscription service is running
    When I send extend request with 5 days
    Then response should be successful

  Scenario: Extend by 10 days
    Given subscription service is running
    When I send extend request with 10 days
    Then response should be successful

  Scenario: Invalid request
    Given subscription service is running
    When I send extend request with 0 days
    Then response should fail