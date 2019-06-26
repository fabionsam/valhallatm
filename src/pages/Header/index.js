import React from 'react';


const Header = () => (
    <div id="Header"> 
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src={process.env.PUBLIC_URL+"/videos/Vell.mp4"} type="video/mp4"></source>
        </video>
        <header>
            <div id="divHeaderImage">
                <img alt="" src={process.env.PUBLIC_URL+"/images/Valhalla_600x600_vector.png"} width="60px" height="50px"></img>		
            </div>
            <div id="divRecruit">
                <button type="button" class="btnRecruit btn btn-valhalla" data-toggle="modal" data-target="#ExemploModalCentralizado">
                    Recrutamento
                </button>
            </div>	
	    </header>   
    </div>
);


export default Header;