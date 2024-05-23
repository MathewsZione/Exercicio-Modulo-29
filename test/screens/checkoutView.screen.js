class CheckoutViewScreen {

    get #hamburgerTopIcon(){
        return $(`-ios predicate string: name CONTAINS 'Abrir menu de navegação'`)
    }

    async accessDrawer(){
        await this.#hamburgerTopIcon.waitForDisplayed({ timeout: 20000 })
        await this.#hamburgerTopIcon.click()
    }

    get #cartDrawer(){
        return $(`-ios predicate string: name CONTAINS 'Carrinho'`)
    }

    async accessCart(){
        await this.#cartDrawer.waitForEnabled({ timeout: 12000 })
        await this.#cartDrawer.click()
    }

    get #buttonCheckout(){
        return $(`-ios predicate string: name CONTAINS 'FAZER O CHECK-OUT'`)
    }

    async accessCheckout(){
        await this.#buttonCheckout.waitForEnabled({ timeout: 12000 })
        await this.#buttonCheckout.click()
    }

    get #validationCheckoutEmptyCart(){
        return $(`-ios predicate string: name CONTAINS 'Você precisa de itens no seu carrinho para fazer o checkout'`)
    }

    async checkValidationCheckoutEmptyCart(){
        await this.#validationCheckoutEmptyCart.waitForDisplayed( { timeout: 12000 })
        return await this.#validationCheckoutEmptyCart
    }
}

module.exports = new CheckoutViewScreen()