import React from 'react';
import styled from 'styled-components';
import './App.css';
import Produtos from './components/Produtos';

const ContainerPrincipal = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* flex-grow: 0 1 0; */
`
const ContainerFiltro = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem;
  border: 1px red solid;
  margin: 0 1rem;
  height: 15rem;
  background-color: whitesmoke;
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
class App extends React.Component {
  state = {
    quantidade:"",
    preco:"",
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
          <ContainerFiltro>
            <h3>Filtro</h3>
            <label>
              Valor mínimo:
              <br/>
              <input type="number" value={this.state.valorMinimo} onChange={this.mudarMinimo}/>
            </label>
            <label>
              Valor máximo:
              <br/>
              <input type="number" value={this.state.valorMaximo} onChange={this.mudarMaximo}/>
            </label>
            <label>
              Buscar por nome:
              <br/>
              <input type="text" placeholder="Pesquisa " value={this.state.buscaNome} onChange={this.mudarBusca}/>
            </label>
          </ContainerFiltro>

          <DivCards>
            {/* <h3>Pordutos</h3> */}
            <Produtos 
              img={"https://loremflickr.com/180/200?lock=1"}
              nomeProduto={"Gato 1"}
              // preco={this.state.preco}
              preco={"1.000"}
            />
            <Produtos 
              img={"https://loremflickr.com/180/200?lock=2"}
              nomeProduto={"Gato 1"}
              preco={"1.000"}
            />
            <Produtos 
              img={"https://loremflickr.com/180/200?lock=3"}
              nomeProduto={"Gato 1"}
              preco={"1.000"}
            />
            <Produtos 
              img={"https://loremflickr.com/180/200?lock=4"}
              nomeProduto={"Gato 1"}
              preco={"1.000"}
            />
            <Produtos 
              img={"https://loremflickr.com/180/200?lock=5"}
              nomeProduto={"Gato 1"}
              preco={"1.000"}
            />
            <Produtos 
              img={"https://loremflickr.com/180/200?lock=6"}
              nomeProduto={"Gato 1"}
              preco={"1.000"}
            />
            <Produtos 
              img={"https://loremflickr.com/180/200?lock=7"}
              nomeProduto={"Gato 1"}
              preco={"1.000"}
            />
            <Produtos 
              img={"https://loremflickr.com/180/200?lock=8"}
              nomeProduto={"Gato 1"}
              preco={"1.000"}
            />
            <Produtos 
              img={"https://loremflickr.com/180/200?lock=1"}
              nomeProduto={"Gato 1"}
              preco={"1.000"}
            />
          </DivCards>

          <DivCarrinho>
            <h3>Carrinho:</h3>
          </DivCarrinho>

        </ContainerPrincipal>
        <div>Footer</div>
      </div>
      
    );
  }
  
}

export default App;
