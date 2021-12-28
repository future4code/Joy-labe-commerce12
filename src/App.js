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
    preco: "70"
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
    preco: "90"
  },
  {
    imagem: foto6,
    title: "Camiseta Nasa",
    preco: "80"
  },
  {
    imagem: foto7,
    title: "Camiseta Mars",
    preco: "70"
  },
  {
    imagem: foto8,
    title: "Camiseta Lua",
    preco: "130"
  },
  {
    imagem: foto9,
    title: "Camiseta Carl Sagan",
    preco: "50"
  },
]

class App extends React.Component {

  state={
    valorMinimo:10,
    valorMaximo: 999,
    buscaNome:"",
    produtosCarrinho: [
      {
        id: 4,
        imagem: foto8,
        title: "Camiseta Lua",
        preco: 130,
        quantidade: 2
      },
      {
        id: 8,
        imagem: foto9,
        title: "Camiseta Carl Sagan",
        preco: 50,
        quantidade: 3
      },
    ]
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

  addProdutoCarrinho = (produtoId) => {
    const produtoCarrinho = this.state.produtosCarrinho.find(produto => produtoId === produto.id)
    
    if(produtoCarrinho) {
      const newprodutoCarrinho = this.state.produtosCarrinho.map(produto =>{
        if(produtoId === produto.id) {
          return{
            ...produto,
            quantidade: produto.quantidade + 1
          }
        }
        return produto
      })

      this.setState({produtosCarrinho: newprodutoCarrinho})
    }else{
      const produtoAdd = produtos.find(produto => produtoId === produto.id)

      const newprodutoCarrinho = [...this.state.produtosCarrinho,{...produtoAdd, quantidade: 1}]

      this.setState({produtosCarrinho: newprodutoCarrinho})
    }
  }

  removerProduto = (produtoId) =>{
    const newprodutoCarrinho = this.state.produtosCarrinho.map((produto) => {
      if (produto.id === produtoId) {
        return{
          ...produto,
          quantidade: produto.quantidade - 1
        }
      }
      return produto
    }).filter((produto) => produto.quantidade >0)

    this.setState({produtosCarrinho: newprodutoCarrinho})
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
            addProdutoCarrinho = {this.addProdutoCarrinho}            
            />
          </div>

          <DivCarrinho>
            <Carrinho
              produtosCarrinho = {this.state.produtosCarrinho}
              removerProduto = {this.removerProduto}
            />
          </DivCarrinho>

        </ContainerPrincipal>
        {/* <div>Footer</div> */}
      </div>  
    );
  }
    
}

export default App;