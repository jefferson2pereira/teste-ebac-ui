/// <reference types="cypress"/>
import endereçoPage from '../support/page-objects/endereço.page';
const DadosEndereço = require('../fixtures/endereco.json')
describe('Funcionalidade endereços - Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)

        })
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        endereçoPage.editarEnderecoFaturamento('Jefferson', 'Pereira', 'Ebac', 'Brasil', 'Av Edson Brandao', '01', 'São Luis', 'Maranhão', '65045000', '98999999999', 'teste@email.com.br')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });

    it('Deve fazer cadastro de faturamento com sucesso- Usando massa de dados', () => {
        endereçoPage.editarEnderecoFaturamento(
            DadosEndereço[1].nome,
            DadosEndereço[1].sobrenome,
            DadosEndereço[1].empresa,
            DadosEndereço[1].país,
            DadosEndereço[1].endereço,
            DadosEndereço[1].numero,
            DadosEndereço[1].cidade,
            DadosEndereço[1].estado,
            DadosEndereço[1].cep,
            DadosEndereço[1].fone,
            DadosEndereço[1].email
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

});