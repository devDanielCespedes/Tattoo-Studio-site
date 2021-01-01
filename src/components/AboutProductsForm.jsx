import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AboutProductsForm extends React.Component {
    render() {
        return (
            <div>
                <Form className='about-products-content-forms'>
                    <FormGroup>
                        <Label htmlFor="full-name">
                            <FormText>Full Name*</FormText>
                            <Input id='full-name' type="text" />
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="email-address">
                            <FormText>Email Address*</FormText>
                            <Input type="email" name="email-address" id="email-address" />
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="phone-number">
                            <FormText>Mobile Number (Include Country Code)*</FormText>
                            <Input type="phone" name="phone-number" id="phone-number" />
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="location-input">
                            <FormText>Location (State/City/Country)*</FormText>
                            <Input type="text" name='location-input' id='location-input' />
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="Description-product-form">
                            <FormText>What happened?</FormText>
                            <textarea placeholder='max 1500 caracters' name="Description-product-form" id="Description-product-form" cols="60" rows="20" maxLength='1500'></textarea>
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="product-images-form">
                            <FormText>Product images*</FormText>
                            <Input type="file" id="product-images-form" name="product-images-form" accept="image/*" />
                        </Label>
                    </FormGroup>
                </Form>
                <Button type='submit'>Submit</Button>
            </div>
        )
    }
}

export default AboutProductsForm;