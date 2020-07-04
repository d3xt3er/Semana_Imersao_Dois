import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Menu from '../components/Menu';

import { Container, Jumbotron, Button} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const Home = (data) => (
        <div>
            <Head>
                <title>Home - ST</title>
                <meta name="description" content="Site de..."></meta>
            </Head>

        <Menu/>
      <Jumbotron fluid className="descr-top">
    <style>{`.descr-top{
        background-color:#000;
        color:#fff;
        padding-top: 150px;
        padding-bottom: 100px;
        margin-bottom: 0rem !important;
        position:relative;
    }.inicio-link{
        position:absolute;
        top:0px;
    }`}</style>
        <Container className="text-center">
            <a name="inicio" className="inicio-link"></a>
        <h1 className="display-4 mb-4">{data.response.home.topTitulo}</h1>
        <p className="lead mb-4">{data.response.home.topSubtitulo}</p>
        <p className="lead">
            <a href={data.response.home.topLinkBtn} className="btn btn-outline-warning btn-lg">
                <a>{data.response.home.topTextoBtn}</a>
            </a>
        </p>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="servicos">
        <style>{`.servicos{
            background-color:#fff;
            padding-top: 80px;
            padding-bottom: 80px;
            margin-bottom: 0rem !important;
            position:relative;
        }.servico-link{
            position:absolute;
            top:0px;
        }.circulo{
            width:140px;
            height:140px;
            background-color:#fed136;
            font-size:52px;
            padding-top:24px;
            color:#fff;
        }.centralizar{
            margin:0 auto !important;
            float:none;
        }`}</style>
          <Container className="text-center">
          <a name="servico" className="servico-link"/>
            <div>
                <h2 className="display-4">{data.response.home.serTitulo}</h2>
                <p className="lead pb-4">{data.response.home.serSubtitulo}</p>
            </div>

           
    <div className="row">
      <div className="col-lg-4">
    
        <div className="rounded-circle circulo centralizar">
            <FontAwesomeIcon icon={data.response.home.serUmIcone}/>
        </div>

        <h2 className="mt-4 mb-4">{data.response.home.serUmTitulo}</h2>
        <p>{data.response.home.serUmDesc}</p>
      </div>
      <div className="col-lg-4">
        
        <div className="rounded-circle circulo centralizar">
            <FontAwesomeIcon icon={data.response.home.serDoisIcone}/>
        </div>
       
        <h2 className="mt-4 mb-4">{data.response.home.serDoisTitulo}</h2>
        <p>{data.response.home.serDoisDesc}</p>
      </div>
      <div className="col-lg-4">

      <div className="rounded-circle circulo centralizar">
         <FontAwesomeIcon icon={data.response.home.serTresIcone}/>
      </div>

        <h2 className="mt-4 mb-4">{data.response.home.serTresTitulo}</h2>
        <p>{data.response.home.serTresDesc}</p>
      </div>
    </div>

          </Container>
      </Jumbotron>
  
        <Jumbotron fluid className="portfolio">
        <style>{`.portfolio{
            background-color:#f8f9fa;
            padding-top: 80px;
            padding-bottom: 80px;
            margin-bottom: 0rem !important;
            position:relative;
        }.portfolio-link{
            position:absolute;
            top:0px;
        }`}</style>
            <Container className="text-center">
                <a name="portfolio" className="portfolio-link"/>

                <div>
                    <h2 className="display-4">{data.response.home.portTitulo}</h2>
                    <p className="lead pb-4">{data.response.home.portSubtitulo}</p>
                </div>

            <div className="row row-cols-1 row-cols-md-2">
            <div className="col mb-4">
                <div className="card">
                <img src={data.response.portUmFileName} className="card-img-top" alt={data.response.home.portUmTitulo}/>
                <div className="card-body">
                    <h5 className="card-title">{data.response.home.portUmTitulo}</h5>
                    <p className="card-text">{data.response.home.portUmSubtitulo}</p>
                </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                <img src={data.response.portDoisFileName} className="card-img-top" alt={data.response.home.porDoisTitulo}/>
                <div className="card-body">
                    <h5 className="card-title">{data.response.home.porDoisTitulo}</h5>
                    <p className="card-text">{data.response.home.porDoisSubtitulo}</p>
                </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                <img src={data.response.portTresFileName} className="card-img-top" alt={data.response.home.porTresTitulo}/>
                <div className="card-body">
                    <h5 className="card-title">{data.response.home.porTresTitulo}</h5>
                    <p className="card-text">{data.response.home.porTresSubtitulo}</p>
                </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                <img src={data.response.portQuatroFileName} className="card-img-top" alt={data.response.home.porQuatroTitulo}/>
                <div className="card-body">
                    <h5 className="card-title">{data.response.home.porQuatroTitulo}</h5>
                    <p className="card-text">{data.response.home.porQuatroSubtitulo}</p>
                </div>
                </div>
            </div>
            </div>

            </Container>
        </Jumbotron>

        <Jumbotron fluid className="portolio">
            <Container>
            <div className="row featurette">
            <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-5 order-md-1">
                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
            </div>
            </div>
            </Container>
        </Jumbotron>

        <Jumbotron fluid className="rodape">
        <style>{`.rodape{
            background-color:#000;
            color:#fff;
            padding-top: 0px;
            padding-bottom: 0px;
            margin-bottom: 0rem !important;
        }`}</style>
            <Container className="text-center">
            <footer className="footer mt-auto py-3">
                <div className="container">
                <span className="text-muted">Place sticky footer content here.</span>
                </div>
            </footer>
            </Container>
        </Jumbotron>
    </div>
);

Home.getInitialProps = async () => {
  var response = await axios.get('http://localhost:8080/home')
  return { response: response.data };
}

export default Home;