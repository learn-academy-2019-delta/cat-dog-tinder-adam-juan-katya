import React, { Component } from 'react';
import {
    Col, Container, Row, ListGroup, Card, Button, CardDeck,Navbar, Nav, FormControl, Form,
} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Cats extends React.Component {
    render() {
            // console.log(this.props);
        return (
            <center>
            <Container>
                {this.props.cats.map((cat, index) =>{
                    return (
                        <Card key={index} style={{width:"18 rem"}}>
                        <Card.Title>
                             <span className='cat-name'>{cat.name}</span>
                        </Card.Title>
                        <Card.Img variant="top" src={cat.img}/>
                        <Card.Body>
                        <Card.Text>
                            <span className='cat-enjoys'>{cat.enjoys}</span>
                        </Card.Text>
                            <Card.Footer>
                               <small className='cat-age'>{cat.age} years old</small>
                            </Card.Footer>
                            <Button size="sm">Update</Button>
                        </Card.Body>
                        </Card>
                      )
                })}
            </Container>
            </center>
        );
    }
}


        export default Cats;
