const { Given, When } = require("@badeball/cypress-cucumber-preprocessor");
import homePage from "../../PageObjects/homepage";
const obj =new homePage()
Given(' I am on ecommerce page',()=>{
    obj.goTo()

})

When("I login to the application",()=>{
    
})