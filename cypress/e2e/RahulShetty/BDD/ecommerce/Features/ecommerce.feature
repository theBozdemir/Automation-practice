Feature: End to end Ecommerce validation

  @Regression
  Scenario: Ecommerce products delivery
    Given I am on Ecommerce page
    When I login to the application
    And I add items to cart and checkout
    And Validate the total price limit
    Then Select the country and submit and verify Thank you


  @Smoke
    Scenario: Ecommerce products delivery cucumber driven
    Given I am on Ecommerce page
    When I login to the application with cucumber credentials
    |username           |   password|
    |rahulshettyacademy |   learning|
    And I add items to cart and checkout
    And Validate the total price limit
    Then Select the country and submit and verify Thank you
