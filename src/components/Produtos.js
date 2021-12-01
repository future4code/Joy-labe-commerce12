import React from "react";
import styled from "styled-components";
import App from "../App";

const ContainerCard = styled.div`
  /* border: 1px black solid; */
  box-shadow: 5px 3px 3px silver;
  padding: 2px;
  border-radius: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: whitesmoke;
`
const BotaoAddCarrinho = styled.button`
  /* background-color: whitesmoke; */
  margin-left: 20px;

`

class Produtos extends React.Component {

    render(){
      return (
        <ContainerCard>
            <img src={this.props.img}/>
            <h4>{this.props.nomeProduto}</h4>
            <p>R$ {this.props.preco}</p>
            <BotaoAddCarrinho>Adicionar ao carrinho</BotaoAddCarrinho>
        </ContainerCard>
      );
    }
    
  }
  
  export default Produtos;