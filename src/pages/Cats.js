import React, { Component } from 'react';
import {
    Col, Container, Row, ListGroup, Card, Button, CardDeck
} from 'react-bootstrap'

class Cats extends React.Component {
        render() {
            // console.log(this.props);
            return (
                <Container>
                <CardDeck>
                  {this.props.cats.map((cat, index) =>{
                    return (
                <Card key={index}>
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
                    </Card.Body>
                </Card>
                       )
                     })}
                   </CardDeck>
                   </Container>
        );
    }
}


        export default Cats;
