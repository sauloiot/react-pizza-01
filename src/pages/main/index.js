import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,

    }
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState( { products: docs, productInfo, page });
    };

    prevPage = () => {
        const { page, productInfo } = this.state;

        if (page === 1) return;

        const pageNumber = page -1;
        
        this.loadProducts(pageNumber);

    };
    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber)
    };

    render() {
        const { products, page, productInfo } = this.state;

        return (
            

            <div className="produtos">
                {products.map(product => (
                    //nome do produto
                    <div className="produto">
                        <img src={product.img} alt="img" />
                        <div key={product._id}>                 
                            <strong> {product.name} </strong>  
                            <p> {product.description} </p>
                            <p className="price"> {product.price} R$ </p>            
                            <button onClick={this.prevPage}> Comprar</button>
                        </div>
                    </div>
                ))}
                <div className="operations">
                    <button disabled={page === 1} onClick={this.prevPage} >Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage} >Próximo</button>
                </div>
            </div>
        )
    }
}