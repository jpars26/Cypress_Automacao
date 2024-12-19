describe('Pagina de Login', () => {
    beforeEach(() =>{
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="login-button"]').click();
    })

    it('Deve preencher os campos de login corretamente', () => {
      //Aplicando boas praticas de testes e melhorando a performace dos testes
      cy.viewport(550, 750);
      
      cy.get('[data-test="input-loginEmail"]').type('jpars@gmail.com');
      cy.get('[data-test="input-loginPassword"]').type('Senha1234');
      cy.get('[data-test="submit-button"]').click();
      
      
    })
  })