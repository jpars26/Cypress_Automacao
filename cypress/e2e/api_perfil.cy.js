describe('Teste Api AdaPet Perfil', () =>{
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNjQxNWMxNC1iNTYzLTQzNjItODVmMS1iZGMzOTgwNGYwNDUiLCJhZG9wdGVyTmFtZSI6IkpvYW8iLCJpYXQiOjE3MzQ2NjE0MjYsImV4cCI6MTczNDkyMDYyNn0.pufMbm9MmEiG_SP2L-cNZw4Uzf9g8yGWmaJOiU78Eqo`;

    it('Nome na Api', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/26415c14-b563-4362-85f1-bdc39804f045',
            headers: { authorization }
        }).then((res) =>{
            cy.log(JSON.stringify(res.body));
            expect(res.status).to.be.equals(200); // Valida o status HTTP
            expect(res.body).to.have.property('perfil'); // Garante que o perfil está presente
            expect(res.body.perfil).to.have.property('nome').and.to.be.a('string').and.not.empty; // Valida o campo 'nome'
        
        })
    })

})