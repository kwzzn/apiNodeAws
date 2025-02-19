//npm init -y
//npm install express
//node index.js
//npm install nodemon
//npm install mysql2
//npm install knex
//npm install cors

const express = require('express'); 
const cors = require('cors');
 


const router = require('./src/routes/routes');

const app = express();
app.use(cors())
app.use(express.json());
app.use(router);

app.listen(3001,() => {
    console.log("API Rodando");
})

/*
const musicas = [
    {
        id: 1,
        nome: "musica1"
    },
    {
        id: 2,
        nome: "musica2",
    }
];

//GET EXEMPLO
app.get('/musica', (req, res) => {
    res.json(musicas);
}); 

//GET1
app.get('/musicaById/:id', (req, res) => {
    const musica_id = req.params['id'];
    musicas.forEach(musica => {
        if (musica.id == musica_id){
            res.json(musica);
        }
    });
    res.send(400);
})

//GET2
app.get('/nomeById/:id', (req, res) => {
    const musica_id = req.params['id'];
    musicas.forEach(musica => {
        if (musica.id == musica_id){
            res.json(musica.nome);
        }
    })
    res.send(400);
})

//POST3
app.post('/post', (req, res) => {
    musicas.push(req.body)
    res.json(musicas);
})

//LISTA NOVA CLASSROOM

//1
app.get('/hello', (req, res) => {
    res.json({
        "message": "Olá Mundo!"
    });
})

//2
app.get('/greet/:name', (req, res) => {
    let name = req.params['name'];
    res.json({
        "message": "Olá, "+name
    });
})

//3
app.get('/sum/:um/:dois', (req, res) => {
    let a = req.params['um'];
    let b = req.params['dois'];
    let soma = parseInt(a) +  parseInt(b)

    res.json({
        "result": soma
    });
})

//4
app.get('/subtract/:um/:dois', (req, res) => {
    let a = req.params['um'];
    let b = req.params['dois'];
    let soma = parseInt(a) - parseInt(b);

    res.json({
            "result": soma
        });
})

//5
app.get('/multiply/:um/:dois', (req, res) => {
    let a = req.params['um'];
    let b = req.params['dois'];
    let resultado = parseFloat(a) * parseFloat(b);

    res.json(
        {
            "result": resultado
        }
    );

})

//6
app.get('/divide/:um/:dois', (req, res) => {
    let a = req.params['um'];
    let b = req.params['dois'];
    let resultado = parseFloat(a) / parseFloat(b);

    res.json(
        {
            "result": resultado
        }
    );
})

//7
app.get('/check-parity/:number', (req, res) => {
    let numero = req.params['number'];
    let resultado = "";
    if (numero % 2 == 0){
        resultado = "par";
    } else {
        resultado = "impar";
    }
    res.json(
        {
            "result": resultado
        }
    );
})

//8
app.get('/full-name/:nome/:sobrenome', (req, res) => {
    let nome = req.params['nome'];
    let sobrenome = req.params['sobrenome'];

    res.json(
        {
            "Full name": nome + " " + sobrenome
        }
    );
})//

//9
app.get('/convert-temperature/:celsius', (req, res) => {
    let celsius = req.params['celsius'];
    let resultado = (parseFloat(celsius) * (9/5)) + 32;

    res.json(
        {"fahrenheit": resultado}
    );
})

//10
app.get('/calculate-age/:birth_year', (req, res) => {
    let anoNascimento = req.params['birth_year'];
    let anoAtual = 2024;
    let resultado = anoAtual - parseInt(anoNascimento);

    res.json(
        {"age": resultado }
    );
})
*/