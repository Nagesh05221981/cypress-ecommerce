import  {BaseTest}  from "../base/baseTest"
const test = new BaseTest()
describe("Verify category filter functionality", () => {

    it("should verify category filter functionality", () => {
        test.filterBars.verifyFiltersBarVisible()
        test.filterBars.verifyFilterLabel('Shop by')
    })
    it("should verify clicking on category filter button", () => {
        //const category = 'tech' 
        test.filterBars.clickFilterButton('Tech')
        test.filterBars.verifyFilterApplied('Tech')
        //test.filterBars
        test.catalogue.verifycatTitle('Tech')

        })
    it("should verify clicking on Home category filter button", () => {
        test.filterBars.clickFilterButton('Home')
        test.filterBars.verifyFilterApplied('Home')
        test.catalogue.verifycatTitle('Home')
    })
    it ("should verify clicking on Fashion category filter button", () => { 
        test.filterBars.clickFilterButton('Fashion')
        test.filterBars.verifyFilterApplied('Fashion')
        test.catalogue.verifycatTitle('Fashion')
    })
    it ("should verify clicking on Beauty category filter button", () => {  
        test.filterBars.clickFilterButton('Beauty')
        test.filterBars.verifyFilterApplied('Beauty')
        test.catalogue.verifycatTitle('Beauty')
    })
    it ("should verify clicking on Fitness category filter button", () => { 
        test.filterBars.clickFilterButton('Fitness')
        test.filterBars.verifyFilterApplied('Fitness')
        test.catalogue.verifycatTitle('Fitne')
    })
    it ("should verify clicking on Food&Drink category filter button", () => {
        test.filterBars.clickFilterButton('Food & Drink')
        test.filterBars.verifyFilterApplied('Food & Drink')
        test.catalogue.verifycatTitle('Food')
    })
          
})
