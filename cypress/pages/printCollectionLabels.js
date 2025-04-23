class PrintLabels {

    getPatientBarcodeFiled(){
        return cy.get("#baby_scan")
    }

    getNumberOfLabelsField(){
        return cy.get("select[id='new_bottles']>option")
    }

    getNextButton(){
        return cy.get("input[value='Next']")
    }
    enterPatientBarcode(barcode){
        this.getPatientBarcodeFiled().clear().type(barcode)
    }
    selectNumberOfLabels(numberOfLabels){
        this.getNumberOfLabelsField().select(numberOfLabels.toString())
    }
    clickNextButton(){
        this.getNextButton().click()
    }
}
export default PrintLabels