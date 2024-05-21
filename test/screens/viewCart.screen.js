class CartViewScreen {

    get #cardProduct(){
        return $(`-ios predicate string: name CONTAINS 'Kratos Gym Pant'`)
    }

    async accessProduct(){
        await this.#cardProduct.waitForDisplayed({ timeout: 20000 })
        await this.#cardProduct.click()
    }

    get #buttonAddToCart(){
        return $(`-ios predicate string: name CONTAINS 'Adicionar ao carrinho'`)
    }

    async addToCart(){
        await this.#buttonAddToCart.waitForEnabled({ timeout: 12000 })
        await this.#buttonAddToCart.click()
    }

    get #buttonSize(){
        return $(`-ios predicate string: name CONTAINS 'Size'`)
    }

    get #optionSize(){
        return $(`-ios predicate string: name CONTAINS '32'`)
    }

    async selectSize(){
        await this.#buttonSize.waitForEnabled({ timeout: 12000 })
        await this.#buttonSize.click()
        await this.#optionSize.waitForEnabled({ timeout: 12000 })
        await this.#optionSize.click()
    }

    get #buttonColor(){
        return $(`-ios predicate string: name CONTAINS 'Color'`)
    }

    get #optionColor(){
        return $(`-ios predicate string: name CONTAINS 'Black'`)
    }

    async selectColor(){
        await this.#buttonColor.waitForEnabled({ timeout: 12000 })
        await this.#buttonColor.click()

        await this.#optionColor.waitForEnabled({ timeout: 12000 })
        await this.#optionColor.click()
    }

    get #topIconCart(){
        return $("//XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeButton[3]")
    }

    async accessCart(){
        await this.#topIconCart.waitForEnabled({ timeout: 12000 })
        await this.#topIconCart.click()
    }

    get #itemInCart(){
        return $(`-ios predicate string: name CONTAINS 'Size: 32; Color: Black'`)
    }
    
    async checkSizeAndColor(){
        await this.#itemInCart.waitForDisplayed( { timeout: 12000 })
        return await this.#itemInCart
    }

    get #totalValue(){
        return $(`~R$ 57.00`)
    }

    async checkTotalValue(){
        await this.#totalValue.waitForDisplayed( { timeout: 12000 })
        return await this.#totalValue
    }
}

module.exports = new CartViewScreen()