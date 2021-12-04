import React from "react";
import styled from "styled-components";
import { ProdutoCard } from "./ProdutoCard";


const ProdutoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const DivCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  row-gap: 1rem;
  column-gap: 2rem;
  margin-left: 2rem;
  /* background-color: whitesmoke; */
`

class Produtos extends React.Component {
  getFiltroEOrdandoLista = () =>{
    return this.props.produtos
    .filter((produto) => produto.preco < this.props.valorMaximo)
    .filter((produto) => produto.preco > this.props.valorMinimo)
    .filter((produto) => produto.title.includes(this.props.buscaNome))
    // .sort((a,b) =>)
  }
  render(){
    const filtroEOrdandoLista = this.getFiltroEOrdandoLista()
    return (
      <di>
        <ProdutoHeader>
          <p>Quantidade de produtos: 9 </p>
          <label>
            Ordenação:
            <select>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>
          </label>
        </ProdutoHeader>
        <DivCards>
          {/* {filtroEOrdandoLista.map((produto) => {
            return <ProdutoCard produto={produto}/>
          })} */}
          {this.props.produtos.map((produto) => {
            return <ProdutoCard produto={produto}/>
          })}
          {/* <ProdutoCard/> */}
        </DivCards>        
      </di>
      
    );
    
  }
}
  
  export default Produtos;