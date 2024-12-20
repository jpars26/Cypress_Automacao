import { usuarios } from '../fixtures/usuarios.json'

describe('Pagina de Cadastro em Massa', () => {
    beforeEach(() => {
        
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="register-button"]').click();

    })
    //Percorre todos os usuarios que tem no arquivo usuarios.json
    usuarios.forEach(usuario => {
        it('Deve preencher com todos os usuarios', ()=> {
            cy.cadastro(usuario.name, usuario.email, usuario.password);
        })
    })
})