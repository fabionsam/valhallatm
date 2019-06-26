import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import Select from 'react-select';
import api from '../../services/api.js';
import * as $ from 'jquery';

const options = [
    { value: 'Arqueiro', label: 'Arqueiro' },
    { value: 'Berserker', label: 'Berserker' },
    { value: 'Bruxa', label: 'Bruxa' },
    { value: 'Caçadora', label: 'Caçadora' },
    { value: 'Cavaleira das Trevas', label: 'Cavaleira das Trevas' },
    { value: 'Domadora', label: 'Domadora' },
    { value: 'Feiticeira', label: 'Feiticeira' },
    { value: 'Guerreiro', label: 'Guerreiro' },
    { value: 'Kunoichi', label: 'Kunoichi' },
    { value: 'Lahn', label: 'Lahn' },
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

    componentDidMount(){
        var script = document.createElement("script");
        script.src = process.env.PUBLIC_URL + "/js/theme.js"; 
        script.async = true;
        document.body.appendChild(script);

        $('html,body').scrollTop(0);
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
        this.setState({message: response.data.msg === "success" ? "Enviado com sucesso! Entraremos em contato." : "Ocorreu um erro no envio do formulário. Por favor atualize a página e tente novamente"});
    }

    handleSubmit(event) {
        if(this.state.captcha === '' || this.state.classe === '' || this.state.nome === '' ||
           this.state.familia === '' || this.state.gs === '' || this.state.pq === '')
            return;
        this.enviarEmail();
        event.preventDefault();
    }

    handleCaptcha(value) {
        this.setState({captcha: value});
    }

    render(){
        return (
            <div id="Recruit">
                <div class="modal fade" id="ExemploModalCentralizado" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="TituloModalCentralizado">Recrutamento</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body" id="contactform">
                            <h4 class="brand-heading" style={{color: "black"}}>{this.state.message}</h4>
                            <form style={this.state.message === "Enviado com sucesso! Entraremos em contato." ? { display : "none"} : {}}>
                                <input type="text" name="nome" placeholder="NOME DO PERSONAGEM" value={this.state.nome} onChange={this.handleChangeNome} required/>
                                <input type="text" name="familia" placeholder="NOME DA FAMÍLIA" value={this.state.familia} onChange={this.handleChangeFamilia} required/>
                                <input type="text" name="gs" placeholder="GEAR SCORE (GS)" value={this.state.gs} onChange={this.handleChangeGs} required/>
                                <Select
                                    value={this.state.classe}
                                    onChange={this.handleChangeClasse}
                                    options={options}
                                    placeholder="CLASSE"
                                />
                                <textarea name="message" rows="3" value={this.state.pq} placeholder="POR QUE VOCÊ DESEJA SE TORNAR MEMBRO DA VALHALLA_TM?" onChange={this.handleChangePq} required></textarea>
                                <ReCAPTCHA
                                    sitekey="6LcaHKoUAAAAAPd2uc4l1MqpiCecD1Znx18aiYsF"
                                    onChange={this.handleCaptcha}
                                />
                                <p/>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            <button type="button" class="btn btn-valhallaEnviar" onClick={this.handleSubmit} disabled={this.state.captcha === '' || this.state.classe === ''}>Enviar</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );}
}


export default Recruit;