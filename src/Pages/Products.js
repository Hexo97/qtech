import React, { useState, useEffect } from 'react'
import '../App.css';
import db from '../db';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Products() {

  const [Products, setProducts] = useState([])
  

  useEffect(() => setProducts(db.Products.findAll()), [])



  return (
    <div>
      <header>
        <br />
        <h1> Products </h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Type</th>
              <th>Duration</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {
              Products.map(product =>
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.title}</td>
                  <td>{product.type}</td>
                  <td>{product.duration}</td>
                   <td><Button  size="sm" variant="outline-light" as={Link} to={`/productdetail/${product.id}`}> Details </Button></td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </header>
    </div>
  );
}

export default Products;
