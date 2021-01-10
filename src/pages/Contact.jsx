import React from 'react';
import AboutProductsForm from '../components/AboutProductsForm';
import OrderTattoo from '../components/OrderTattoo';
import { Button } from 'reactstrap'

class Contact extends React.Component {
    constructor() {
        super();

        this.handlerTattooOrderRender = this.handlerTattooOrderRender.bind(this);
        this.handlerAboutProducts = this.handlerAboutProducts.bind(this);
        this.state = {
            orderTattoo: true,
            aboutProducts: false,
        }
    }

    handlerTattooOrderRender({ target }) {
        const productForm = document.querySelector('#product-form');
        productForm.style.backgroundColor = ''
        target.style.backgroundColor = 'chocolate';

        this.setState({
            orderTattoo: true,
            aboutProducts: false,
        })
    }

    handlerAboutProducts({ target }) {
        const tattooOrderBtn = document.querySelector('#tattoo-order');
        tattooOrderBtn.style.backgroundColor = '';
        target.style.backgroundColor = 'chocolate';

        this.setState({
            orderTattoo: false,
            aboutProducts: true,
        })
    }
    render() {
        const { orderTattoo } = this.state;
        return (
            <div className='contact-content'>
                <Button
                    onClick={(e) => this.handlerTattooOrderRender(e)}
                    id='tattoo-order'
                    className='selected-button-form'
                >
                    Tattoo Order
                </Button>
                <Button
                    onClick={(e) => this.handlerAboutProducts(e)}
                    id='product-form'
                    className='selected-button-form'
                >
                    About products
                </Button>
            {orderTattoo ? <OrderTattoo /> : <AboutProductsForm />}
            </div>
        )
    }
}

export default Contact;