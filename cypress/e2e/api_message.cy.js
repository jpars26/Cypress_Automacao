describe('Teste Api AdaPet', () =>{
    
    it('Messagem Api', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/26415c14-b563-4362-85f1-bdc39804f045',
            headers: Cypress.env()
        }).then((res) =>{
            expect(res.status).to.be.equals(200),
            expect(res.body).to.not.empty,
            expect(res.body).to.have.property('msg')
        })
    })

})