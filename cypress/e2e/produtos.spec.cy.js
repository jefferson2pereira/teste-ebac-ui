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
            .contains('Abominable Hoodie')
            .click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text')
            .click().clear().type(quantidade)
        cy.get('.single_add_to_cart_button')
      .click()
            //testes
            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
            cy.get('.woocommerce-message').should('contain', quantidade +' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });
it('deve adicionar um produto cao carrinho - Usando comandos customizados', () => {
    cy.addProdutos('Abominable Hoodie','M','Green', 3)

});
it.only('deve adicionar um produto cao carrinho - Usando comandos customizados', () => {
    cy.addProdutos('Beaumont Summit Kit','L','Orange', 2)

});

});