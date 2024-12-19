describe('Teste Api AdaPet', () =>{
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNjQxNWMxNC1iNTYzLTQzNjItODVmMS1iZGMzOTgwNGYwNDUiLCJhZG9wdGVyTmFtZSI6IkpvYW8iLCJpYXQiOjE3MzQ2MzExODksImV4cCI6MTczNDg5MDM4OX0.hp3t8lJ9bRGJocb-aXY9bkLIttNHcao9h7OGQ4dcFjA`;

    it('Messagem Api', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/26415c14-b563-4362-85f1-bdc39804f045',
            headers: { authorization }
        }).then((res) =>{
            expect(res.status).to.be.equals(200),
            expect(res.body).to.not.empty,
            expect(res.body).to.have.property('msg')
        })
    })

})