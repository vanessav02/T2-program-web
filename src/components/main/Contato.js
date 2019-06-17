import React from 'react';

export default class Contato extends React.Component{
    render(){
        return(
            <div id="contato">
                <h2 id="titulo">GitHub</h2>

                <br/>
                <table className="redessociais">
                    <tr>
                    <td><img src="./img/logo-github.svg" alt="GitHub"/></td><td><h3>GitHub:</h3></td><td><a href ="https://github.com/vanessav02/" target="_blank">@vanessav02</a></td>
                    </tr>
                </table>
                <br/><br/>

                <h2 id="titulo">Formulário de Contato</h2>
                <div className="formulario"><br/>
                    <form name="form1" id="form1" method="post" action="https://formspree.io/vanessa_v02@yahoo.com.br">
                        <input type="text" name="nome" id="nome" placeholder="Nome:"/>
                        <input type="email" name="email" id="email" placeholder="E-mail:"/>
                        <input type="text" name="assunto" id="assunto" placeholder="Assunto:"/>
                        <textarea type="text" name="mensagem" id="mensagem" placeholder="Mensagem:"/>
                        <input type="submit" value="Enviar"/><br/><br/>
                    </form>
                </div>

            </div>
  
        );
    }

}