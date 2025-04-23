Feature: End to end Ecommerce validation

Scenario: Ecommerce products delivery

Given I am on Ecommerce page
When I login to the application
And I add items to cart and checkout
And validate the total price limit
Then select the country and submit and verify Thank you

    Feature Description