import React from 'react';
import TattoosProducts from '../components/TattooProduct';

class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

   async componentDidMount() {
       const responseFetch = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=tatuagem');
       const tattoosProducts = await responseFetch.json()
        this.setState({
            products: tattoosProducts.results
        })
    }
    render() {
       const { products } = this.state
        return(
            <div>
                {products.map((product) => <TattoosProducts />)}
            </div>
        )
    }
}

export default Products;
