import React from "react";
import styled from "styled-components";


const ContainerFiltro = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem;
  border: 1px red solid;
  margin: 0 1rem;
  height: 15rem;
  background-color: whitesmoke;
`

export class Filtros extends React.Component{
    state={
        quantidade:"",
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
        
        return(
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
        )
    }
}