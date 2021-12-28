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

    }
    render(){
        
        return(
            <ContainerFiltro>
                <h3>Filtro</h3>
                <label>
                    Valor mínimo:
                    <br/>
                    <input type="number" 
                    value={this.props.valorMinimo} 
                    onChange={this.props.onChangeMudarMinimo}/>
                </label>
                <label>
                    Valor máximo:
                    <br/>
                    <input type="number" 
                    value={this.props.valorMaximo} 
                    onChange={this.props.onChangeMudarMaximo}/>
                </label>
                <label>
                    Buscar por nome:
                    <br/>
                    <input type="text" 
                    placeholder="Pesquisa " 
                    value={this.props.buscaNome} 
                    onChange={this.props.onChangeMudarBusca}/>
                </label>
            </ContainerFiltro>
        )
    }
}