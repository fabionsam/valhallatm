import React from 'react';
import Header from '../Header/index.js';
import Footer from '../Footer/index.js';
import ReCAPTCHA from "react-google-recaptcha";
import Select from 'react-select';
import api from '../../services/api.js';

const options = [
    { value: 'Arqueiro', label: 'Arqueiro' },
    { value: 'Berserker', label: 'Berserker' },
    { value: 'Bruxa', label: 'Bruxa' },
    { value: 'Cavaleira das Trevas', label: 'Cavaleira das Trevas' },
    { value: 'Domadora', label: 'Domadora' },
    { value: 'Feiticeira', label: 'Feiticeira' },
    { value: 'Guerreiro', label: 'Guerreiro' },
    { value: 'Kunoichi', label: 'Kunoichi' },
    { value: 'Lhan', label: 'Lhan' },
    { value: 'Lutador', label: 'Lutador' },
    { value: 'Maehwa', label: 'Maehwa' },
    { value: 'Mago', label: 'Mago' },
    { value: 'Mística', label: 'Mística' },
    { value: 'Musah', label: 'Musah' },
    { value: 'Ninja', label: 'Ninja' },
    { value: 'Shai', label: 'Shai' },
    { value: 'Valquíria', label: 'Valquíria' },
  ];

class Recruit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nome: '', familia: '', gs: '', classe: '', pq: '', captcha: '', message: ''};

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

    handleChangeClasse = selectedOption => {
        this.setState({ classe: selectedOption });
    };

    handleChangePq(event) {
        this.setState({pq: event.target.value});
    }

    enviarEmail = async () => {
        const response = await api.post('/send', {nome: this.state.nome, familia: this.state.familia, gs: this.state.gs, classe: this.state.classe.value, pq: this.state.pq},
        {
            auth : { username : "valhalla_tm" , password : "Tavares59@123456$"}
        });
        this.setState({message: response.data.msg === "success" ? "Enviado com sucesso! Entraremos em contato." : "Ocorreu um erro no envio do formulário. Por favor tente novamente"});
    }

    handleSubmit(event) {
        this.enviarEmail();
        event.preventDefault();
    }

    handleCaptcha(value) {
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
                                    <h2 class="brand-heading">{this.state.message}</h2>
                                    
                                    <form onSubmit={this.handleSubmit} style={this.state.message === "Enviado com sucesso! Entraremos em contato." ? { display : "none"} : {}}>
                                        <input type="text" name="nome" placeholder="Nome do personagem" value={this.state.nome} onChange={this.handleChangeNome} required/>
                                        <input type="text" name="familia" placeholder="Nome da família" value={this.state.familia} onChange={this.handleChangeFamilia} required/>
                                        <input type="text" name="gs" placeholder="Gear Score (GS)" value={this.state.gs} onChange={this.handleChangeGs} required/>
                                        <Select
                                            value={this.state.classe}
                                            onChange={this.handleChangeClasse}
                                            options={options}
                                            placeholder="Classe"
                                        />
                                        <textarea name="message" rows="7" value={this.state.pq} placeholder="Por que você deseja se tornar membro da VALHALLA_TM?" onChange={this.handleChangePq} required></textarea>
                                        <ReCAPTCHA
                                            sitekey="6LcaHKoUAAAAAPd2uc4l1MqpiCecD1Znx18aiYsF"
                                            onChange={this.onChange}
                                        />
                                        <p/>
                                        <input id="botaoEnviar" class="btn" type="submit" value="Enviar" disabled={!this.state.captcha || this.state.classe === ''}/>
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