import React from 'react';

const Footer = () => (
    <div id="Footer">
        <footer>
            <div className="container divHeightFooter">
                <div className="row align-items-center divHeightFooter">
                    <div className="col-auto divImgSobre">
                        <a href="https://www.facebook.com/ValhallaTM/" rel="noopener noreferrer" target="_blank"><img src={process.env.PUBLIC_URL+"/images/fb.png"} width="35px" height="35px" alt=""></img></a>
                        <a href="https://discord.gg/YYfzRtG" rel="noopener noreferrer" target="_blank"><img src={process.env.PUBLIC_URL+"/images/discord-preto.png"} width="35px" height="35px" alt="" style={{marginLeft: 15, marginRight: 15}}></img></a>
                        <a href="https://www.twitch.tv/meridah_" rel="noopener noreferrer" target="_blank"><img src={process.env.PUBLIC_URL+"/images/twitch.png"} width="30px" height="30px" alt=""></img></a>
                    </div>
                </div>
            </div>
        </footer>    
    </div>
);


export default Footer;