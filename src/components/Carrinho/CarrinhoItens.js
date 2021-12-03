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
                <p>1x</p>
                <p>Produto</p>
                <button>Remover</button>
            </ContainerItem>
        )
    }
}