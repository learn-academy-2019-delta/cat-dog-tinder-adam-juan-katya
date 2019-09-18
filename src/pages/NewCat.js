import React, { Component } from 'react';
import {
    Form,
    ButtonToolbar,
    Button

} from 'react-bootstrap'

class NewCat extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        form:{
          name: '',
          age: '',
          enjoys: ''
        }
      }
    }

    handleChange = (event) => {
      let {form} = this.state
      form[event.target.name] = event.target.value
      this.setState({form: form})

    }

    handleSubmit = () => {
        this.props.submittedCat(this.state.form)
    }

    render(){
        return (
            <div>
            <h1> Create New Cat</h1>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                 type="text"
                 placeholder="Enter Cats Name"
                 name= "name"
                 onChange={this.handleChange}
                 value={this.state.name}
              />

              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Age</Form.Label>
                <Form.Control as="select"
                name= "age"
                onChange={this.handleChange}
                value={this.state.age}>
                  <option>Select age</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Bio</Form.Label>
                <Form.Control
                as="textarea"
                rows="3"
                name= "enjoys"
                placeholder="Enter Cats bio"
                onChange={this.handleChange}
                value={this.state.enjoys}
                />
              </Form.Group>
            <ButtonToolbar>
             <Button value="Submit" variant="secondary" size="lg" onClick= {this.handleSubmit}> Submit
             </Button>
             </ButtonToolbar>
         </Form>
            </div>
        );
    }
}

export default NewCat;
