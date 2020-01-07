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
        this.state = {nome: '', familia: '', atvmar: '', classe: '', pq: '', captcha: '', message: '', possuibarco: ''};

        this.handleChangeNome = this.handleChangeNome.bind(this);
        this.handleChangeFamilia = this.handleChangeFamilia.bind(this);
        this.handleChangeMar = this.handleChangeMar.bind(this);
        this.handleChangeBarco = this.handleChangeBarco.bind(this);
        this.handleChangeClasse = this.handleChangeClasse.bind(this);
        this.handleChangePq = this.handleChangePq.bind(this);
        this.handleCaptcha = this.handleCaptcha.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        $('html,body').scrollTop(0);
    }

    handleChangeNome(event) {
        this.setState({nome: event.target.value});
    }

    handleChangeFamilia(event) {
        this.setState({familia: event.target.value});
    }

    handleChangeMar(event) {
        this.setState({atvmar: event.target.value});
    }

    handleChangeBarco(event) {
        this.setState({possuibarco: event.target.value});
    }

    handleChangeClasse = selectedOption => {
        this.setState({ classe: selectedOption });
    };

    handleChangePq(event) {
        this.setState({pq: event.target.value});
    }

    enviarEmail = async () => {
        var btn = document.querySelector(".btn-valhallaEnviar");
        btn.style = "display: none;"
        this.setState({message: "Por favor, aguarde..."});
        const response = await api.post('/send', {nome: this.state.nome, familia: this.state.familia, atvmar: this.state.atvmar, possuibarco: this.state.possuibarco, classe: this.state.classe.value, pq: this.state.pq},
        {
            auth : { username : "valhalla_tm" , password : "Tavares59@123456$"}
        });
        this.setState({message: response.data.msg === "success" ? "Enviado com sucesso! Entraremos em contato." : "Ocorreu um erro no envio do formulário. Por favor atualize a página e tente novamente"});
    }

    handleSubmit(event) {
        if(this.state.captcha === '' || this.state.classe === '' || this.state.nome === '' || this.state.possuibarco === '' ||
           this.state.familia === '' || this.state.atvmar === '' || this.state.pq === '')
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
                <div className="modal fade" id="ExemploModalCentralizado" tabIndex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="TituloModalCentralizado">Recrutamento</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" id="contactform">
                            <h4 className="brand-heading" style={{color: "black"}}>{this.state.message}</h4>
                            <form style={this.state.message === "Por favor, aguarde..." ? { display : "none"} : {}}>
                                <input type="text" name="nome" placeholder="NOME DO PERSONAGEM" value={this.state.nome} onChange={this.handleChangeNome} required/>
                                <input type="text" name="familia" placeholder="NOME DA FAMÍLIA" value={this.state.familia} onChange={this.handleChangeFamilia} required/>
                                <input type="text" name="atvmar" placeholder="ATIVO NO MAR?" value={this.state.atvmar} onChange={this.handleChangeMar} required/>
                                <input type="text" name="possuibarco" placeholder="POSSUI QUAL BARCO?" value={this.state.possuibarco} onChange={this.handleChangeBarco} required/>
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
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            <button type="button" className="btn btn-valhallaEnviar" onClick={this.handleSubmit} disabled={this.state.captcha === '' || this.state.classe === ''}>Enviar</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );}
}


export default Recruit;