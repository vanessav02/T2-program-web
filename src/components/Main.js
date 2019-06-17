import React from 'react';
import Foto from './main/Foto';
import MiniBiografia from './main/MiniBiografia';
import Curriculo from './main/Curriculo';
import Detalhes from './main/Detalhes';
import Habilidades from './main/Habilidades';
import Blog from './main/Blog';
import Informacoes from './main/Informacoes';
import Portfolio from './main/Portfolio';
import Contato from './main/Contato';
import RedesSociais from './main/RedesSociais';

export default class Main extends React.Component{
    render(){
        return(
            <div className="main">
                <Foto/>
                <MiniBiografia/>
                <Curriculo/>
                <Detalhes/>
                <Habilidades/>
                <Blog/>
                <Portfolio/>
                <Informacoes/>
                <Contato/>
                <RedesSociais/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            
        );
    }

}