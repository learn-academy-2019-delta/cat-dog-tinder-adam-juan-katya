import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom'
import { Nav, Navbar, Form, Button} from 'react-bootstrap'
import Cats from './pages/Cats';
import NewCat from './pages/NewCat';
import { getCats, createCat,showNewCat, showOldCat, updateCat } from './api'


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          cats: []
      }
  }

        componentDidMount() {
          getCats()
        	.then(APIcats => {
        	  this.setState({
        		cats: APIcats
        	  })
          })
}


      // handleNewCat = (arg) => {
      //     console.log(arg)
      // }

      handleNewCat(newCatInfo) {
	         createCat(newCatInfo)
             .then(successCat => {
                showNewCat(newCatInfo)
                console.log("SUCCESS! New cat: ", successCat);
    })
}
            updateOldCat(updated) {
                updateCat(updated)
                .then(successCat => {
                    showOldCat(updated)
                console.log("SUCCESS! Update Cat: ", updateCat);
            })
}


  render(){
  return (
      <div>
      <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/Cats">Cat Tinder</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link}
          to="/Cats">Home</Nav.Link>
        </Nav>
        <Form inline>
          <Button as={Link} to="/NewCat" variant="outline-info">Add New Cat</Button>
        </Form>
      </Navbar>


       <Switch>
        <Route exact path="/Cats" render= {( props)=> <Cats cats={this.state.cats}/> } />
        <Route exact path="/NewCat" render= {( props)=> <NewCat submittedCat={this.handleNewCat}/> } />
        <Route exact path= "/UpdateCat" render= {(props) => <Cats cats={this.updateOldCat} /> } />


        </Switch>
      </Router>
      </div>
  );
 }
}

export default App;
