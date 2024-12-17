describe('template teste', () => {
    it('passes', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
    //Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”;
      cy.get('.button').click(); 
      
    
    })
    // Visite a página de /login do Adopet;
    it("Visita a página de /login do Adopet", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
       
    })
    // Visite a página de /home do Adopet;
    it("Visita a página de /home do Adopet", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
       
    })
    // Visite a página de principal do AdoPet e teste os botões header;
    it("Visite a página de principal do AdoPet e teste os botões header", () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.header__home').click();
         
        cy.get('.header__message').click();
         
    })
    // Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.
    it("Visite a página de /home do AdoPet e clique no botão “Falar com o responsável", () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
         
        cy.get('.header__message').click();
    })
      
})