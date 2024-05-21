const cartViewScreen = require("../screens/cartView.screen");

describe('Deve adicionar o Produto ao carrinho corretamente', () => {

    it('Deve adicionar um Produto Kratos Gym Pant no Tamanho 32 e Cor Black via lista', async () => {
        await cartViewScreen.accessProduct()
        await cartViewScreen.addToCart()
        await cartViewScreen.selectSize()
        await cartViewScreen.selectColor()
        await cartViewScreen.addToCart()
        await cartViewScreen.accessCart()

        expect (await cartViewScreen.checkSizeAndColor()).toExist()
        expect (await cartViewScreen.checkTotalValue()).toExist()
    });
})

