import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import './Pokedex.css'

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      filterType: pokemons,
      type: 'all',
    }
    this.nextPokemon = this.nextPokemon.bind(this);
    this.handleFilter = this.handleFilter.bind(this)
  }
  handleAll() {
    this.setState({
      index: 0,
      filterType: pokemons,
      type: 'all',
    })
  }

  handleFilter(event) {
    const filter = event.target.innerText;
    let arrayFilter = this.state.filterType;
    if (this.state.type !== filter) {
      this.setState((state) => state.filterType = arrayFilter.filter((pokemon) => {
        return pokemon.type.includes(filter)
      })
      )
    }

  }

  nextPokemon() {
    const arrayFilter = this.state.filterType;
    if (this.state.index === (arrayFilter.length - 1)) {
      this.setState({
        index: 0
      })
    } else {
      this.setState((state) => ({
        index: (state.index + 1)
      }))
    }
  }

  render() {
    return (
      <section className="pokedex">
        <div className='pokemons'>
          <Pokemon pokemon={this.state.filterType[this.state.index]} />
        </div>
        <div>
          <button type='button' onClick={this.nextPokemon}>Próximo Pokemon</button>
          <button type='button' onClick={(event) => this.handleFilter(event)}>Fire</button>
          <button type='button' onClick={(event) => this.handleFilter(event)}>Psychic</button>
          <button type='button' onClick={(event) => this.handleAll(event)}>All</button>
        </div>
      </section>
    );
  }
}

export default Pokedex;