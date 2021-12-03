import React from 'react';
import styled from 'styled-components';
import Produtos from './components/Produtos/Produtos';
import { Filtros } from './components/Filtros/Filtros';
import { Carrinho } from './components/Carrinho/Carrinho';


const ContainerPrincipal = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* flex-grow: 0 1 0; */
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

const DivCarrinho = styled.div`
  margin-left: 3rem;
`
const produtos = [
  {
    imagem: "https://picsum.photos/180/200?a=1",
    title: "Foto",
    preco: "100"
  },
  {
    imagem: "https://picsum.photos/180/200?a=2",
    title: "Foto",
    preco: "100"
  },
  {
    imagem: "https://picsum.photos/180/200?a=3",
    title: "Foto",
    preco: "100"
  },
  {
    imagem: "https://picsum.photos/180/200?a=4",
    title: "Foto",
    preco: "100"
  },
  {
    imagem: "https://picsum.photos/180/200?a=5",
    title: "Foto",
    preco: "100"
  },
  {
    imagem: "https://picsum.photos/180/200?a=6",
    title: "Foto",
    preco: "100"
  },
  {
    imagem: "https://picsum.photos/180/200?a=7",
    title: "Foto",
    preco: "100"
  },
  {
    imagem: "https://picsum.photos/180/200?a=8",
    title: "Foto",
    preco: "100"
  },
  {
    imagem: "https://picsum.photos/180/200?a=9",
    title: "Foto",
    preco: "100"
  },
]

function App() {
  return (
    <div>
      <div>
        <h1>Header</h1>
      </div>

      <ContainerPrincipal>
        <div>
          <Filtros/>
        </div>

        <DivCards>
          <Produtos produtos = {produtos}/>
        </DivCards>

        <DivCarrinho>
          <h3>Carrinho:</h3>
          <Carrinho/>
        </DivCarrinho>

      </ContainerPrincipal>
      <div>Footer</div>
    </div>  
  );
}

export default App;
