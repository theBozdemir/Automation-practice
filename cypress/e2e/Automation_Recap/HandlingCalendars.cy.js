describe('Handling iframe cross origin', () => {
    it('Handle iframe using cy.origin', () => {
    
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
    
    cy.get("button[class='react-date-picker__calendar-button react-date-picker__button").click()
    cy.get(".react-calendar__navigation__label").click()
    cy.get(".react-calendar__navigation__label").click()
    cy.get(".react-calendar__tile.react-calendar__decade-view__years__year").each(($el,index,$list)=>{
        const year=$el.text()
        if(year==="2021"){
            cy.wrap($el).click()
        }
    })
    cy.get(".react-calendar__tile").each(($el,index,$list)=>{
        const month=$el.text()
        if(month==="November"){
            cy.wrap($el).click()
        }
    })
    cy.get(".react-calendar__month-view__days__day").each(($el,index,$list)=>{
        const day=$el.text()
        if(day==="22"){
            cy.wrap($el).click()
        }
    })
    cy.get("input[type='date']").should("have.value",'2021-11-22')
    cy.get("input[type='date']").then(function(date){
        const datePrint=date.prop('value')
        cy.log(datePrint)
    })

    

    })
})