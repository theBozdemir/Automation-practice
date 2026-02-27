   //This is a seperate hook file
   
   beforeEach(function(){
                cy.fixture("AutomationRecapNew").then(function(data){
            //when we use "this.variable" this makes that variable globally available outside that scope
            //"this" method is not working when we declare function as arrow function
            this.data=data
        })

    }) 