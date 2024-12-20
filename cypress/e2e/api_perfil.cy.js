describe('Teste Api AdaPet Perfil', () =>{
    
    it('Nome na Api', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/26415c14-b563-4362-85f1-bdc39804f045',
            headers: Cypress.env()
        }).then((res) =>{
            cy.log(JSON.stringify(res.body));
            expect(res.status).to.be.equals(200); // Valida o status HTTP
            expect(res.body).to.have.property('perfil'); // Garante que o perfil está presente
            expect(res.body.perfil).to.have.property('nome').and.to.be.a('string').and.not.empty; // Valida o campo 'nome'
        
        })
    })

})