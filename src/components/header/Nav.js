import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Nav extends React.Component{
    render(){
        return(
            <div className="nav">
                <AnchorLink href='#minibiografia' offset='20'>Home</AnchorLink>
                <AnchorLink href='#curriculo' offset='70'>Currículo</AnchorLink>
                <AnchorLink href='#detalhes' offset='70'>Detalhes</AnchorLink>
                <AnchorLink href='#habilidades' offset='70'>Habilidades</AnchorLink>
                <AnchorLink href='#blog' offset='70'>Blog</AnchorLink>
                <AnchorLink href='#portfolio' offset='70'>Portfólio</AnchorLink>
                <AnchorLink href='#informacoes' offset='70'>Mais Informações</AnchorLink>
                <AnchorLink href='#contato' offset='70'>Contato</AnchorLink>
                <AnchorLink href='#redessociais' offset='70'>Redes Sociais</AnchorLink>
            </div>
            
        );

    }

}