import React from 'react';
import Loading from '../components/Loading';
import TattoosProducts from '../components/TattooProduct';

class Products extends React.Component {

    constructor() {
        super();
        this.state = {
            loding: false,
            products: []
        }
    }
    componentDidMount() {
        this.setState(({
            loding: true,
        }), async () => {
            const responseFetch = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=tatuagem');
            const tattoosProducts = await responseFetch.json()
            this.setState({
                products: tattoosProducts.results,
                loding: false
            })
        })
    }
    render() {
        const { products, loding } = this.state
        return (
            <div className='products-content'>
                { loding ? <Loading /> : products
                    .map((product) => <TattoosProducts key={product.id} product={product} />)}
            </div>
        )
    }
}

export default Products;
