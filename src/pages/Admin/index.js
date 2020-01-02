import React from 'react';
import api from '../../services/api.js';

class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state = { photos: [], oficiais: [] };

        this.adicionarFoto = this.adicionarFoto.bind(this);
        this.removerFoto = this.removerFoto.bind(this);
        this.adicionarOficial = this.adicionarOficial.bind(this);
        this.removerOficial = this.removerOficial.bind(this);
    }

    componentDidMount(){
        api.get('/getOficial',
        {
            auth : { username : "valhalla_tm" , password : "Tavares59@123456$"}
        }).then(res => this.setState({ oficiais: res.data }));

        api.get('/getPhoto',
        {
            auth : { username : "valhalla_tm" , password : "Tavares59@123456$"}
        }).then(res => {
            this.setState({ photos: res.data });
        });
    }

    adicionarFoto(){
        var desc = document.querySelector("#descfoto").value;
        var url = document.querySelector("#urlfoto").value;

        if (url.trim() === ""){
            alert("Preencha a url da foto");
            return;
        }

        api.post('/addPhoto', { caption: desc, photo: url },
        {
            auth : { username : "valhalla_tm" , password : "Tavares59@123456$"}
        }).then(res => { this.setState({ photos: res.data }); alert("Adicionado"); }).catch(err => alert("Ocorreu um erro: " + err.message));

        document.querySelector("#urlfoto").value = "";
        document.querySelector("#descfoto").value = "";
    }

    removerFoto(index){
        api.delete(`/removePhoto/${index}`,
        {
            auth : { username : "valhalla_tm" , password : "Tavares59@123456$"}
        }).then(res => { this.setState({ photos: res.data }); alert("Removido"); }).catch(err => alert("Ocorreu um erro: " + err.message));
    }

    adicionarOficial(){
        var desc = document.querySelector("#descOficial").value;
        var url = document.querySelector("#urlOficial").value;
        var urlgrande = document.querySelector("#urlOficialgrande").value;

        if ((url.trim() === "") || (desc.trim() === "")){
            alert("Preencha a url da foto e o nome do oficial");
            return;
        }

        api.post('/addOficial', { oficial: desc, photo: url, photoG: urlgrande },
        {
            auth : { username : "valhalla_tm" , password : "Tavares59@123456$"}
        }).then(res => { this.setState({ oficiais: res.data }); alert("Adicionado"); }).catch(err => alert("Ocorreu um erro: " + err.message));

        document.querySelector("#urlOficial").value = "";
        document.querySelector("#descOficial").value = "";
        document.querySelector("#urlOficialgrande").value = "";
    }

    removerOficial(index){
        api.delete(`/removeOficial/${index}`,
        {
            auth : { username : "valhalla_tm" , password : "Tavares59@123456$"}
        }).then(res => { this.setState({ oficiais: res.data }); alert("Removido"); }).catch(err => alert("Ocorreu um erro: " + err.message));
    }

    render() {
        return(
            <div id="Admin" className="container">
                <h2>Fotos</h2>
                <input id="descfoto" placeholder="Descrição(opcional)"></input> <input id="urlfoto" placeholder="Url foto"></input> 
                <button className="btn btn-primary" onClick={this.adicionarFoto}>Add</button>
                <ul className="list-group">
                    {
                        this.state.photos.map((value, index) => {
                        return <li className="list-group-item" key={value.id}>{value.caption} | 
                        <a href={value.photo.indexOf("http") > -1 ? value.photo : `http://${value.photo}`} className="badge badge-light" target="_blank">Foto</a>| 
                        <button onClick={()=>{this.removerFoto(value.id)}} className="btn btn-danger btn-sm">Remover</button></li>
                        })
                    }
                </ul>
                <h2>Oficiais</h2>
                <input id="descOficial" placeholder="Nome de família"></input> <input id="urlOficial" placeholder="Url foto cortada"></input> <input id="urlOficialgrande" placeholder="Url foto completa"></input> 
                <button className="btn btn-primary" onClick={this.adicionarOficial}>Add</button>
                <ul className="list-group">
                    {
                        this.state.oficiais.map((value, index) => {
                        return <li className="list-group-item" key={value.id}>{value.oficial} | 
                        <a href={value.photo.indexOf("http") > -1 ? value.photo : `http://${value.photo}`} className="badge badge-light" target="_blank">Foto Cortada</a>|
                        <a href={value.photoG.indexOf("http") > -1 ? value.photoG : `http://${value.photoG}`} className="badge badge-light" target="_blank">Foto Completa</a>|
                        <button onClick={()=>{this.removerOficial(value.id)}} className="btn btn-danger btn-sm">Remover</button></li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Admin;