import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Jumbotron, Button, Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
    } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Head>
                <title>Home - ST</title>
                <meta name="description" content="Site de..."></meta>
            </Head>
        <Navbar color="dark" dark expand="md" className="fixed-top">
        <Container>
        <NavbarBrand href="/">Project ST</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/#inicio">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#servico">Serviço</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#portfolio">Portfólio</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>

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
        <h1 className="display-4 mb-4">Temos a suloção que sua empresa precisa!</h1>
        <p className="lead mb-4">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <p className="lead">
          <Button color="warning" size="lg" outline>Entre em contato</Button>
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
                <h2 className="display-4">Serviços</h2>
                <p className="lead pb-4">featured content or information.</p>
            </div>

           
    <div className="row">
      <div className="col-lg-4">
    
        <div className="rounded-circle circulo centralizar">
            <FontAwesomeIcon icon="code"/>
        </div>

        <h2 className="mt-4 mb-4">Serviço 1</h2>
        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
      </div>
      <div className="col-lg-4">
        
        <div className="rounded-circle circulo centralizar">
            <FontAwesomeIcon icon="laptop-code"/>
        </div>
       
        <h2 className="mt-4 mb-4">Serviço 2</h2>
        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
      </div>
      <div className="col-lg-4">

      <div className="rounded-circle circulo centralizar">
         <FontAwesomeIcon icon="mobile-alt"/>
      </div>

        <h2 className="mt-4 mb-4">Serviço 3</h2>
        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
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
                    <h2 className="display-4">Portfólio</h2>
                    <p className="lead pb-4">Featured content or information.</p>
                </div>

            <div className="row row-cols-1 row-cols-md-2">
            <div className="col mb-4">
                <div className="card">
                <img src="/Stranger.jpg" className="card-img-top" alt="Portfolio"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                <img src="/Stranger_2.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                <img src="/Stranger_3.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                <img src="/Stranger_4.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
                <h2 className="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
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
}

export default HomePage;