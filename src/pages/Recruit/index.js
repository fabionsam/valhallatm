import React from 'react';
import Header from '../Header/index.js';
import Footer from '../Footer/index.js';

class Recruit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
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
                                        <input type="text" name="name" placeholder="Nome do personagem" required/>
                                        <input type="text" name="name" placeholder="Nome da família" required/>
                                        <input type="text" name="gs" placeholder="Gear Score (GS)" required/>
                                        <input type="text" name="classe" placeholder="Classe" required/>
                                        <textarea name="message" rows="7" placeholder="Por que você deseja se tornar membro da VALHALLA_TM?" required></textarea>
                                        <input class="btn" type="submit" value="Send"/>
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