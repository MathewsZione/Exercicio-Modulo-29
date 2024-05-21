const productViewScreen = require("../screens/productView.screen")

describe('Product List', () => {
    beforeEach(async () => {
    let state = await driver.queryAppState("br.art.ebaconline")
    if(state !== 4){
    await driver.launchApp()
    }
     })
    afterEach(async () => {
    await driver.closeApp()
     })
    it('shoud list products', async () => {
        expect(await productViewScreen.product("Yoga")).toExist()
        expect(await productViewScreen.productList()).toBeElementsArrayOfSize(10)
    })
})