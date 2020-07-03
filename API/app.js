const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

require('./models/home');
const Home = mongoose.model('Home');

app.use(express.json());

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Origin-Methods","GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Origin-Methods","X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

app.use(
    '/file',
    express.static(path.resolve(__dirname, 'temp', 'uploads'))
);

mongoose.connect('mongodb+srv://Paulo:34984c27@cluster0-6ha0s.mongodb.net/celke',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexão com o BD MongoDB realizado com sucesso!');
}).catch((err) => {
    console.log('Erro: Conexão com o BD MongoDB não realizado com sucesso!' + err);
})

app.get('/home', (req, res) =>{
    Home.findOne({}).then((home) => {
        if(home.portUmFileName){
            var portUmFileName = "http://localhost:8080/file/home/" + home.portUmFileName;
        }else{
            var portUmFileName = "http://localhost:8080/file/home/Stranger.jpg";
        }

        if(home.portDoisFileName){
            var portDoisFileName = "http://localhost:8080/file/home/" + home.portDoisFileName;
        }else{
            var portDoisFileName = "http://localhost:8080/file/home/Stranger_2.jpg";
        }

        if(home.portTresFileName){
            var portTresFileName = "http://localhost:8080/file/home/" + home.portTresFileName;
        }else{
            var portTresFileName = "http://localhost:8080/file/home/Stranger_3.jpg";
        }

        if(home.portQuatroFileName){
            var portQuatroFileName = "http://localhost:8080/file/home/" + home.portQuatroFileName;
        }else{
            var portQuatroFileName = "http://localhost:8080/file/home/Stranger_4.jpg";
        }
        return res.json({
            home,
            portUmFileName,
            portDoisFileName,
            portTresFileName,
            portQuatroFileName,
        });
    }).catch((err) =>{
        return res.status(400).json({
            error: true,
            message:"Nenhum retorno encontrado"
        })
    })
});

app.post('/home', (req, res) => {

    const dados = {
        "topTitulo": "Temos a solução que a sua empresa precisa!",
        "topSubtitulo": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "topTextoBtn": "ENTRE EM CONTATO",
        "topLinkBtn": "http://localhost:3000/",

        "serTitulo": "Serviços",
        "serSubtitulo": "Featured content or information",
        "serUmIcone": "code",
        "serUmTitulo": "Serviço 1",
        "serUmDesc": "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
        "serDoisIcone": "laptop-code",
        "serDoisTitulo": "Serviço 2",
        "serDoisDesc": "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
        "serTresIcone": "mobile-alt",
        "serTresTitulo": "Serviço 3",
        "serTresDesc": "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",

        "portTitulo": "Portfólio",
        "portSubtitulo": "Featured content or information.",

        "portUmOriginalName": "Stranger.jpg",
        "portUmFileName": "Stranger.jpg",
        "portUmTitulo": "Card title",
        "portUmSubtitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

        "portDoisOriginalName": "Stranger_2.jpg",
        "portDoisFileName": "Stranger_2.jpg",
        "portDoisTitulo": "Card title",
        "portDoisSubtitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

        "portTresOriginalName": "Stranger_3.jpg",
        "portTresFileName": "Stranger_3.jpg",
        "portTresTitulo": "Card title",
        "portTresSubtitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

        "portQuatroOriginalName": "Stranger_4.jpg",
        "portQuatroFileName": "Stranger_4.jpg",
        "portQuatroTitulo": "Card title",
        "portQuatroSubtitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    };

    const homeExiste = Home.findOne({});
    if(homeExiste){
        return res.status(400).json({
            error: true,
            message: "Erro: A página home já possui um registro!"
        });
    };

    Home.create(dados, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Erro: conteudo da pagina home não foi cadastrado!"
        })
    })

    return res.json({
        error: false,
        message: "Conteudo da pagina home cadastrado com sucesso!"
    })
})

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
})