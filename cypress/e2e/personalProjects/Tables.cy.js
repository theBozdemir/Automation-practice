describe("Handle tables",()=>{

    beforeEach('Login',()=>{ //hook -> This will be executed before every it block

        cy.visit("https://verify2.imp.wai.cacentral1.timelessmedical.com/")

        cy.get("input[placeholder='Username']").type("usr000001")
        cy.get("input[placeholder='Password']").type("USR000001TMS!")
        cy.contains('button', 'Login').click();


        //Clinical management menu ->
        /*
        cy.get(".sidebar-menu>li:nth-child(12)>a>span:nth-child(2)").click() //customers main menu

        cy.get(".row>div:nth-child(3)>a").click() //Customers sub menu */


    })
    it.skip("Check number Rows & Columns",()=>{
        
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should("have.length)",'10');
        cy.get("table[class='table table-bordered table-hover'].thead>tr>td").should("have.length","6");
    })
    it.skip("Check cell data from specific row & column",()=>{
        cy.visit("https://www.mackolik.com/puan-durumu/t%C3%BCrkiye-s%C3%BCper-lig/482ofyysbdbeoxauk19yg7tdt")
        cy.get("table>tbody>tr:nth-child(8)>td:nth-child(3)>a>span:nth-child(2)").contains("Kasımpaşa")
    })
    it.only("read all the rows & columns data in the first page",()=>{
        cy.visit("https://verify2.imp.wai.cacentral1.timelessmedical.com/logs")
        let myRow=1
        cy.get("table>tbody>tr")
        .each(($row, index, $rows)=>{
            
            cy.wrap($row).within(()=>{
                cy.get("td").each(($column, index, $columns)=>{
                    cy.log($column.text())


                })
                cy.log(myRow)
                myRow++
            })
        })
        
    })
    it("Pagination",()=>{
        
    })

})