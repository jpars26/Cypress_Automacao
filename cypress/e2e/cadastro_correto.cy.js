describe('Pagina de Cadastro', () => {

  beforeEach(()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();

  })

  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    //Aplicando boas praticas de testes e melhorando a performace dos testes
    cy.viewport(550, 750);
    
    cy.get('[data-test="input-name"]').type('Joao');
    cy.get('[data-test="input-email"]').type('jpars@gmail.com');
    cy.get('[data-test="input-password"]').type('Senha1234');
    cy.get('[data-test="input-confirm-password"]').type('Senha1234');
    cy.get('[data-test="submit-button"]').click();
    
    
  })
})