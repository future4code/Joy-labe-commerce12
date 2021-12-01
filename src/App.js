import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    
  }
  
  render(){
    return (
      <div>
        <div>
          <h1>Header</h1>
        </div>

        <div className="App">
          <div>
            <h3>Filtro</h3>
            <label>
              "Valor mínimo:"
              <input type="number" value="50"/>
            </label>
            <label>
              "Valor máximo:"
              <input type="number" value="500"/>
            </label>
            <label>
              "Buscar por nome:"
              <input type="text" value="produto"/>
            </label>
          </div>

          <div>
            <h3>Pordutos</h3>
          </div>

          <div>
            <h3>Carrinho</h3>
          </div>

        </div>
        <div>Footer</div>
      </div>
      
    );
  }
  
}

export default App;
