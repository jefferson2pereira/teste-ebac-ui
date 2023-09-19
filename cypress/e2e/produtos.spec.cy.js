/// <reference types="cypress" />


describe('Funcionalidade Página de Produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um item da lista', () => {
        cy.get('.product-block')
            //.first()
            //.last()
            //.eq(3)
            .contains('Apollo Running Short')
            .click()
    });
    it('Deve adcionar um produto ao carrinho', () => {
       var quantidade = 3
        cy.get('.product-block')
            .contains('Atlas Fitness Tank')
            .click()
        cy.get('.button-variable-item-M').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item')
            .click()
        cy.get('.input-text')
            .click().clear().type(quantidade)
        cy.get('.single_add_to_cart_button')
            .click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
            cy.get('.woocommerce-message').should('contain', quantidade +' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')
    });
});