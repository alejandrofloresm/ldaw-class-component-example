import React from "react";
import axios from "axios";

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: [] };
    // Tienes que hacer el binding the tu instancia a la función
    this.handleGetPokemons = this.handleGetPokemons.bind(this);
  }

  handleGetPokemons(event) {
    //  Creas una nueva variable con la cual referencias a la instancia (this)
    let _this = this;
    axios.get("https://pokeapi.co/api/v2/pokemon").then(function(data) {
      let pokemons = data.data.results;
      // Mandas a llamar la función setState a través de la referencia a la
      // instancia
      _this.setState({ pokemons: pokemons });
    });
  }

  render() {
    return (
      <>
        <input
          type="button"
          value="Get pokemons!"
          onClick={this.handleGetPokemons}
        />
        <ul>
          {this.state.pokemons.map(function(pokemon, i) {
            return <li key={i}>{pokemon.name}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default Pokedex;
