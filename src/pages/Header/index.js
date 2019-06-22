import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
    <div id="Header">
        <head>
            <meta charset="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
            <meta http-equiv="x-ua-compatible" content="ie=edge"></meta>
            <meta name="description" content=""></meta>
            <meta name="keywords" content=""></meta>
            <meta name="author" content=""></meta>
            <title></title>
            <link rel="shortcut icon" href="assets/img/favicon.ico"></link>

            
            {/* <link rel="stylesheet" href="assets/css/main.css"></link> */}
            
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i|Open+Sans:300,300i,400,400i,700,700i" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>    
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
                
            {/* <link rel="stylesheet" href="assets/css/theme.css"></link> */}
            
        </head>   
        
        
        <nav class="navbar navbar-expand-md navbar-custom fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">VALHALLA_TM</a>
                <button class="navbar-light navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsDefault" aria-controls="navbarsDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarsDefault">
                    <ul class="navbar-custom navbar-nav ml-auto">
                        
                        <li class="nav-item active">
                        <Link class="nav-link" to="/">Home</Link>
                        </li>

                        <li class="nav-item">
                        <Link class="nav-link" to="/recrutamento">Recrutamento</Link>
                        </li>
                        
                    </ul>              
                    
                </div>
            </div>
        </nav>    
        
    </div>
);


export default Header;