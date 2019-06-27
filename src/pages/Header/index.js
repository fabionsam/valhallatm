import React from 'react';


const Header = () => (
    <div id="Header"> 
        <video playsInline autoPlay muted="muted" loop="loop">
            <source src={process.env.PUBLIC_URL+"/videos/Vell.mp4"} type="video/mp4"></source>
        </video>
        <header>
            <div className="container divHeightFooter">
                <div className="row justify-content-center">
                    <div id="" className="col-4">
                        
                    </div>
                    <div id="" className="col-4">
                        <img alt="" src={process.env.PUBLIC_URL+"/images/Valhalla_600x600_vector.png"} width="60px" height="50px"></img>		
                    </div>
                    <div id="divRecruit" className="col-4">
                        <button type="button" className="btnRecruit btn btn-valhalla" data-toggle="modal" data-target="#ExemploModalCentralizado">
                            Recrutamento
                        </button>
                    </div>	
                </div>
            </div>
	    </header>   
    </div>
);


export default Header;