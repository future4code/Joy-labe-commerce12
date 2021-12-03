import React from "react";
import styled from "styled-components";

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

export class ProdutoCard extends React.Component{
    render(){
        const produto = this.props.produto
        return(
            <ContainerCard>
                <img src={produto.imagem}/>
                <di>
                    <h4>{produto.title}</h4>
                    <p>R$ {produto.preco},00</p>
                    <BotaoAddCarrinho>Adicionar ao carrinho</BotaoAddCarrinho>
                </di>
            </ContainerCard>
        )
    }
}