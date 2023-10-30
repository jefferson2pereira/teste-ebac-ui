/// <reference types="cypress"/>

describe('Funcionalidade endereços - Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados=>{
        cy.login(dados.usuario, dados.senha,{log: false})
        
        })
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
    

    });


});