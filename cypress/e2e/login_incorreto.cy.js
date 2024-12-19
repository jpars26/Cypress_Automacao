describe('Login Incorreto', () => {
    beforeEach(() =>{
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="login-button"]').click();
    })

    it('Deve preencher os campos de login incorretamente', () => {
      //Aplicando boas praticas de testes e melhorando a performace dos testes
      cy.viewport(550, 750);
      
      cy.get('[data-test="input-loginEmail"]').type('aaa@gmail');
      cy.get('[data-test="submit-button"]').click();
      cy.contains('Por favor, verifique o email digitado').should('be.visible');
      cy.get('[data-test="input-loginPassword"]').type('aa');
      cy.get('[data-test="submit-button"]').click();
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
      
      
      
    })
  })