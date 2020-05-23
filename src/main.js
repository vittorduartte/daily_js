var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
   };

var skills = ["Javascript", "ReactJS", "React Native"];

var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
    ];

function mostraEndereco(endereco) {
    console.log(
        `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}.` 
    )
}

function pares(x,y){
    while(x<=y){
        if(x%2==0)console.log(`O número ${x} é par.`);
        x++;
    }
}

function temHabilidades(skills) {
    if(skills.indexOf('Javascript') != -1){
        return true
    }
    return false
}

function experiencia(anos){
    if(anos<=1 && anos>=0){
        return 'Iniciante';
    }
    if(anos>1 && anos<=3){
        return 'Intermediário';
    }
    if(anos>3 && anos<=6){
        return 'Avançado';
    }
    if(anos>=7){
        return 'Jedi Master';
    }
    else{
        return 'Insira um número de anos válido.';
    }
}

function imprimeArray(array){
    for(let key in array){
        console.log(
            `O ${array[key].nome} possui as habilidades: ${array[key].habilidades.join([separator=', '])}.`
        )
    }
}