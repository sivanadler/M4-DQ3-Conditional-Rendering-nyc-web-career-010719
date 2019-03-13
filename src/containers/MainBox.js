import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: 'profile'
    }
  }


  renderProfile = () => {
    this.setState({
      page: 'profile'
    })
  }

  renderPhotos = () => {
    this.setState({
      page: 'photos'
    })
  }

  renderCocktails = () => {
    this.setState({
      page: 'cocktails'
    })
  }

  renderPokemon = () => {
    this.setState({
      page: 'pokemon'
    })
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */
    let detailsToDisplay = "original content right here"
    if (this.state.page === 'profile') {detailsToDisplay = <Profile />}
    if (this.state.page === 'photos') {detailsToDisplay = <Photos />}
    if (this.state.page === 'cocktails') {detailsToDisplay = <Cocktails />}
    if (this.state.page === 'pokemon') {detailsToDisplay = <Pokemon />}
    return (
      <div>
        <MenuBar
          renderProfile={this.renderProfile}
          renderPhotos={this.renderPhotos}
          renderCocktails={this.renderCocktails}
          renderPokemon={this.renderPokemon}
          page = {this.state.page}
        />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
