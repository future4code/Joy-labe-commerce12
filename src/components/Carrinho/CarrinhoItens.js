import React from "react";
import styled from "styled-components";

const ContainerItem = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 4px;
`

export class CarrinhoItens extends React.Component{
    render(){
        return(
            <ContainerItem>
                <p>{this.props.cartItem.quantidade}x</p>
                <p>{this.props.cartItem.title}</p>
                <button onClick={() => this.props.removerProduto(this.props.cartItem.id)}>
                    Remover
                </button>
            </ContainerItem>
        )
    }
}