import React from "react";
import { CarrinhoItens } from "./CarrinhoItens";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
    border: 1px solid black;
    padding: 8px;
`
const ContainerListaProd = styled.div`
    display: grid;
    gap: 4px;
`

export class Carrinho extends React.Component{
    render(){
        return(
            <ContainerCarrinho>
                <h3>Carrinho:</h3>
                <ContainerListaProd>
                    <CarrinhoItens/>
                </ContainerListaProd>
                <p>Valor total: R$154,00</p>
            </ContainerCarrinho>
        )
    }
}