import React from 'react';
import styled from 'styled-components';
import Produtos from './components/Produtos/Produtos';
import { Filtros } from './components/Filtros/Filtros';
import { Carrinho } from './components/Carrinho/Carrinho';
import foto1 from'./img/foto1.jpg';
import foto2 from'./img/foto2.jpg';
import foto3 from'./img/foto3.jpg';
import foto4 from'./img/foto4.jpg';
import foto5 from'./img/foto5.jpg';
import foto6 from'./img/foto6.jpg';
import foto7 from'./img/foto7.jpg';
import foto8 from'./img/foto8.jpg';
import foto9 from'./img/foto9.jpg';

const ContainerPrincipal = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* flex-grow: 0 1 0; */
`

const DivCarrinho = styled.div`
  margin-left: 3rem;
`
const produtos = [
  {
    imagem: foto1,
    title: "Foto",
    preco: "10"
  },
  {
    imagem: foto2,
    title: "Foto",
    preco: "150"
  },
  {
    imagem: foto3,
    title: "Foto",
    preco: "200"
  },
  {
    imagem: foto4,
    title: "Foto",
    preco: "120"
  },
  {
    imagem: foto5,
    title: "Foto",
    preco: "30"
  },
  {
    imagem: foto6,
    title: "Foto",
    preco: "11"
  },
  {
    imagem: foto7,
    title: "Foto",
    preco: "10"
  },
  {
    imagem: foto8,
    title: "Foto",
    preco: "100"
  },
  {
    imagem: foto9,
    title: "Foto",
    preco: "1"
  },
]

class App extends React.Component {

  state={
    valorMinimo:"",
    valorMaximo:"",
    buscaNome:""
  }
  
  mudarMinimo = (event) =>{
    this.setState({valorMinimo: event.target.value})
  }

  mudarMaximo = (event) => {
    this.setState({valorMaximo: event.target.value})
  }

  mudarBusca = (event) =>{
    this.setState({buscaNome: event.target.value})
  }

  render(){
    return (
      <div>
        <div>
          <h1>Header</h1>
        </div>

        <ContainerPrincipal>
          <div>
            <Filtros
              valorMinimo = {this.state.valorMinimo}
              valorMaximo = {this.state.valorMaximo}
              buscaNome = {this.state.buscaNome}
            />
          </div>

          <div>
            <Produtos 
            produtos = {produtos}
            valorMinimo = {this.state.valorMinimo}
            valorMaximo = {this.state.valorMaximo}
            buscaNome = {this.state.buscaNome}
            />
          </div>

          <DivCarrinho>
            <Carrinho/>
          </DivCarrinho>

        </ContainerPrincipal>
        <div>Footer</div>
      </div>  
    );
  }
    
}

export default App;