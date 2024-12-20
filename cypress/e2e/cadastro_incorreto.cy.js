describe('Pagina de Cadastro Incorreto', () => {
    beforeEach(()=>{
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="register-button"]').click();

    })

    it('Preencher os campos do formulário incorretamente para tentar cadastrar um novo usuário', () => {
      //Aplicando boas praticas de testes e melhorando a performace dos testes
      cy.viewport(550, 750);
      
      cy.get('[data-test="submit-button"]').click();
      cy.contains('É necessário informar um endereço de email').should('be.visible');
      cy.contains('Crie uma senha').should('be.visible');
      cy.contains('Repita a senha criada acima').should('be.visible');
      
      
    })
  })