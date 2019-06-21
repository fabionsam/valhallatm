import React from 'react';
import Header from '../Header/index.js';
import Footer from '../Footer/index.js';
import ReCAPTCHA from "react-google-recaptcha";

class Recruit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nome: '', familia: '', gs: '', classe: '', pq: '', captcha: ''};

        this.handleChangeNome = this.handleChangeNome.bind(this);
        this.handleChangeFamilia = this.handleChangeFamilia.bind(this);
        this.handleChangeGs = this.handleChangeGs.bind(this);
        this.handleChangeClasse = this.handleChangeClasse.bind(this);
        this.handleChangePq = this.handleChangePq.bind(this);
        this.handleCaptcha = this.handleCaptcha.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeNome(event) {
        this.setState({nome: event.target.value});
    }

    handleChangeFamilia(event) {
        this.setState({familia: event.target.value});
    }

    handleChangeGs(event) {
        this.setState({gs: event.target.value});
    }

    handleChangeClasse(event) {
        this.setState({classe: event.target.value});
    }

    handleChangePq(event) {
        this.setState({pq: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleCaptcha(value) {
        console.log(value);
        this.setState({captcha: value});
    }

    render(){
        return (
            <div id="Recruit">
                < Header/>
                <div class="intro">
                    <div class="intro-body">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-8">
                                    <h1 class="brand-heading">GET IN TOUCH</h1>
                                    <p class="intro-text">
                                        The contact form is Workin'!
                                    </p>
                                    <a href="#pageid" class="btn btn-circle page-scroll">
                                    <i class="fa fa-angle-double-down animated"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section id="pageid">
                    <div class="container content-section">
                        <div class="row justify-content-center">
                            <div class="col-md-8">
                                <div id="contactform">
                                    <form onSubmit={this.handleSubmit}>
                                        <input type="text" name="nome" placeholder="Nome do personagem" required/>
                                        <input type="text" name="familia" placeholder="Nome da família" required/>
                                        <input type="text" name="gs" placeholder="Gear Score (GS)" required/>
                                        <input type="text" name="classe" placeholder="Classe" required/>
                                        <textarea name="message" rows="7" placeholder="Por que você deseja se tornar membro da VALHALLA_TM?" required></textarea>
                                        <ReCAPTCHA
                                            sitekey="6LcaHKoUAAAAAPd2uc4l1MqpiCecD1Znx18aiYsF"
                                            onChange={this.onChange}
                                        />
                                        <input class="btn" type="submit" value="Send" disabled/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                < Footer/>
            </div>
        );}
}


export default Recruit;