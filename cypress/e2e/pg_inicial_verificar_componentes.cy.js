describe('Pagina Inicial', () => {

    beforeEach(()=>{
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
  
    })
  
    it('Deve verificar se todos os elementos estao presentes na pagina', () => {
      //Aplicando boas praticas de testes e melhorando a performace dos testes
      cy.viewport(550, 750);

      //Visite a página principal do AdoPet e verifique se o title com o texto “AdoPet” está presente no html
      cy.title().should('eq', 'AdoPet');
      //Verificar se a logo está com imagem
      cy.get('.initial > img').should('be.visible');
      //Visite a página principal do AdoPet e verifique se o texto “Quem ama adota!” está presente no html.
      cy.get('.footer > p').should('include.text', 'Quem ama adota!');
      //Visite a página principal do AdoPet e verifique se o texto “Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!” está presente no htm
      cy.get('.initial > p').should('include.text', 'Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!');
      
      
    })
  })