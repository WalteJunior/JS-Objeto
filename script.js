let eu = {
    nome: 'Walter',
    idade: 21,
    cor: 'azul',
};
console.log(eu)

eu.mes = 'dez';
console.log(eu)

delete eu.cor
console.log(eu)

let cadastro = [
    {
        nome: 'Bruno',
        idade: 20,
        telefone: 'xxxx-xxxx' ,
        amigos: ['Carlos','Camila','Amanda','Bia']
    },
    {
        nome: 'Amanda',
        idade: 22,
        telefone: 'xxxx-xxxx' ,
        amigos:  ['Bia','Camila','Amanda','Bruno']
    },
    {
        nome: 'Bia',
        idade: 21,
        telefone: 'xxxx-xxxx' ,
        amigos: ['Camila','Amanda','Bruno','Bia']
    },
    {
        nome: 'Carlos',
        idade: 19,
        telefone: 'xxxx-xxxx' ,
        amigos: ['Bruno','Bia','Camila','Amanda']
    },
    {
        nome: 'Camila',
        idade: 18,
        telefone: 'xxxx-xxxx' ,
        amigos: ['Amanda','Bia','Bruno','Carlos']
    },
];
console.log(cadastro)