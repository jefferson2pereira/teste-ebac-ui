/// <reference types="cypress" />
const Perfil = require('../fixtures/perfil.json')

context('funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {

        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac20')

    })

    it('Deve fazer login com sucesso- Usando banco de dados', () => {

        cy.get('#username').type(Perfil.usuario)
        cy.get('#password').type(Perfil.senha)
        cy.get('.woocommerce-form > .button').click()
    })

    it('Deve fazer login com sucesso- Usando fixture', () => {
        cy.fixture('perfil').then(dados => {

            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha,{log: false})
            cy.get('.woocommerce-form > .button').click()

        })
    })

    it('Deve emitir uma mensagem de erro ao inserir usuário inválido', () => {

        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro')
    })

    it('Deve emitir uma mensagem de erro ao inserir senha inválida', () => {

        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro')
    })

})