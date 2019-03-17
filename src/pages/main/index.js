import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {
    state = {
        products: [],

    }
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        this.setState( { products: response.data.docs });
    };

    render() {
        const { products } = this.state;

        return (
            

            <div className="product-list">
            {products.map(product => (
                //nome do produto
                <article key={product._id}> 
               <strong> {product.name} </strong>  
               <p> {product.description} </p>
               <img className="product-img" src={product.img} alt="img" />
               <p> {product.price} </p>
               
               <a href="">Comprar</a>
                </article>
            ))}
            </div>
        )
    }
}