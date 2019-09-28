import React, { Component } from 'react';
import './erro.css';

class Erro extends Component{
    render(){
        return(
            <div className="erro">
                <h1> Ops... Página não encontrada :( </h1>
                <h2> Erro 404 </h2>
                {/* <Link> Clique aqui para voltar a Página inicial </Link> */}
            </div>
        )
    }
}

export default Erro;