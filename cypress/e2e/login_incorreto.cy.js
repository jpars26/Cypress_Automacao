describe('Login Incorreto', () => {
    beforeEach(() =>{
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="login-button"]').click();
      cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
        statusCode:400,
      }).as('stubJoao');
    })

    it('Deve preencher os campos de login incorretamente', () => {
      //Aplicando boas praticas de testes e melhorando a performace dos testes
      cy.viewport(550, 750);
      
      cy.loginIncorreto('aaa@gmail','aa');     
    })

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () =>{
      cy.viewport(550, 750);
      cy.login('jpars@gmail.com','Senha1234');
      cy.wait('@StubJoao');
      cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    })
  })