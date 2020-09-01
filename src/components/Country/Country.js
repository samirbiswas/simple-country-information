import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';

const Country = (props) => {
    const {name}=props.country;
    
    return (
      
                
        
                        <Card  >
                            <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                <Button><Link to={`/about/${name}`}>About</Link></Button>
                            </Card.Text>
                            </Card.Body>
                        </Card>
            
               
       
  
    );
};

export default Country;