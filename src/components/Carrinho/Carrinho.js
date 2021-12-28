import React from "react";
import { CarrinhoItens } from "./CarrinhoItens";
import styled from "styled-components";
// import Produtos from "../Produtos/Produtos";

const ContainerCarrinho = styled.div`
    border: 1px solid black;
    padding: 8px;
`
const ContainerListaProd = styled.div`
    display: grid;
    gap: 4px;
`

export class Carrinho extends React.Component{
    getTotalValue = () =>{
        let totalValu = 0

        for(let produto of this.props.produtosCarrinho) {
            totalValu += produto.preco * produto.quantidade
        }

        return totalValu
    }
    render(){
        return(
            <ContainerCarrinho>
                <h3>Carrinho:</h3>
                <ContainerListaProd>
                    {this.props.produtosCarrinho.map((produto) => {
                        return <CarrinhoItens 
                                    cartItem={produto} 
                                    removerProduto = {this.props.removerProduto}
                                />
                    })}
                    {/* <CarrinhoItens/> */}
                </ContainerListaProd>
                <p>Valor total: R${this.getTotalValue()},00</p>
            </ContainerCarrinho>
        )
    }
}