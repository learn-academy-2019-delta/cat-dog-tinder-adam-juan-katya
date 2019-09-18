import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Cats from './pages/Cats';
import NewCat from './pages/NewCat';


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          cats: [
            {
              id: 1,
              name: 'Morris',
              age: 2,
              enjoys: "Long walks on the beach.",
              img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
            },
            {
              id: 2,
              name: 'Paws',
              age: 4,
              enjoys: "Snuggling by the fire.",
              img: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'

            },
            {
              id: 3,
              name: 'Mr. Meowsalot',
              age: 12,
              enjoys: "Being in charge.",
              img: 'https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
            }
          ]
        }
      }


      handleNewCat = (arg) => {
          console.log(arg)
      }

  render(){
  return (
      <div>

       <Router>
       <Switch>
        <Route exact path="/Cats" render= {( props)=> <Cats cats={this.state.cats}/> } />
        <Route exact path="/NewCat" render= {( props)=> <NewCat submittedCat={this.handleNewCat}/> } />


        </Switch>
      </Router>
      </div>
  );
 }
}

export default App;
