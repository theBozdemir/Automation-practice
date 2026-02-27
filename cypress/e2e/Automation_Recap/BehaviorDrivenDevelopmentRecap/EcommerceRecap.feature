#Feature is test suite it is equal to "describe" keyword
Feature: End to end Ecommerce Validation

#Scenario keyword is equal to "it" keyword. On another saying it is testcase
@RegressionRecap
Scenario: "Ecommerce products delivery"

Given I am on Ecommerce page -recap
When I login to the application -recap
And I add items to cart and checkout -recap
And Validate the total price limit -recap
Then select the country submit and verify thank you -recap

@SmokeRecap
Scenario Outline: "Ecommerce products delivery"

Given I am on Ecommerce page -recap
When I login to the application portal -recap
|username           |password            |
|rahulshettyacademy |Learning@830$3mK2   |
And I add items to cart and checkout -recap
And Validate the total price limit -recap
Then select the country submit and verify thank you -recap

