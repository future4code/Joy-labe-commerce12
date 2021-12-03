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

  render(){

    return (
      <di>
        <ProdutoHeader>
          <p>Quantidade de produtos: 5</p>
          <label>
            Ordenação:
            <select>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>
          </label>
        </ProdutoHeader>
        <DivCards>
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