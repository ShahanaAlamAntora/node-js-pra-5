//import React from 'react';

import React ,{Component} from 'react';

import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form'c8u

//import Navbar from './Components/Navbar';

//import 'bootstrap/dist/css/bootstrap.min.css';

// or less ideally
//import { Button } from 'react-bootstrap';

class App extends Component {
render(){
  return (
    <div>

         <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>


    </div>
  );
}
}
export default App;
