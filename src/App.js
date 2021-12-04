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
    title: "Camiseta Life on Mars",
    preco: "10"
  },
  {
    imagem: foto2,
    title: "Camiseta Três Monstros da Astronomia",
    preco: "150"
  },
  {
    imagem: foto3,
    title: "Camiseta Laika",
    preco: "250"
  },
  {
    imagem: foto4,
    title: "Camiseta Yuri Gagarin",
    preco: "120"
  },
  {
    imagem: foto5,
    title: "Camiseta Nasa",
    preco: "30"
  },
  {
    imagem: foto6,
    title: "Camiseta Nasa",
    preco: "20"
  },
  {
    imagem: foto7,
    title: "Camiseta Mars",
    preco: "10"
  },
  {
    imagem: foto8,
    title: "Camiseta Lua",
    preco: "130"
  },
  {
    imagem: foto9,
    title: "Camiseta Carl Sagan",
    preco: "1"
  },
]

class App extends React.Component {

  state={
    valorMinimo:"0",
    valorMaximo:"999",
    buscaNome:""
  }
  
  onChangeMudarMinimo = (event) =>{
    this.setState({valorMinimo: event.target.value})
  }

  onChangeMudarMaximo = (event) => {
    this.setState({valorMaximo: event.target.value})
  }

  onChangeMudarBusca = (event) =>{
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
              onChangeMudarMinimo={this.onChangeMudarMinimo}
              onChangeMudarMaximo={this.onChangeMudarMaximo}
              onChangeMudarBusca={this.onChangeMudarBusca}
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