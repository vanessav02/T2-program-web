import React from 'react';

export default class RedesSociais extends React.Component{
    render(){
        return(
            <div id="redessociais">
                <h2 id="titulo">Redes Sociais</h2>
                <br/><table className="redessociais">
                    <tr>
                    <td><img src="./img/logo-instagram.webp" alt="Instagram"/></td><td><h3>Instagram:</h3></td><td><a href ="https://www.instagram.com/vanessa_v02/" target="_blank">@vanessa_v02</a></td>
                    </tr>
                    <tr>
                    <td><img src="./img/logo-facebook.png" alt="Facebook"/></td><td><h3>Facebook:</h3></td><td><a href ="https://www.facebook.com/VanessadaRochaAlves" target="_blank">@VanessadaRochaAlves</a></td>
                    </tr>
                    <tr>
                    <td><img src="./img/logo-whatsapp.jpg" alt="WhatsApp"/></td><td><h3>WhatsApp:</h3></td><td><h3>(14) 99641-3132</h3></td>
                    </tr>
                </table><br/><br/>

            </div>
        );
    }

}