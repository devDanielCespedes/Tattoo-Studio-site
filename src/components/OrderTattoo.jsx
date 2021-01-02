import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class OrderTattoo extends React.Component {

    componentDidMount() {
        const btntattooOrder = document.getElementById('tattoo-order');
        btntattooOrder.style.backgroundColor = 'chocolate';
    }
    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label htmlFor="full-name">
                            <FormText>Full Name*</FormText>
                            <Input id='full-name' type="text" />
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='data-birth'>
                            <FormText>Date of Birth*</FormText>
                            <Input type="date" name="data-birth" id="data-birth" />
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
                        <Label htmlFor="location-Input">
                            <FormText>Location (State/City/Country)*</FormText>
                            <Input type="text" name='location-Input' id='location-Input' />
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="style-tattoo-client">
                            <FormText>Style you want to ink*</FormText>
                            <Input type="select" name="style-tattoo-client" id="style-tattoo-client">
                                <option value="fine-line">Fine Line</option>
                                <option value="oldschool">Old School</option>
                                <option value="watercolor">Watercolor</option>
                                <option value="colorful-realism">Colorful Realism</option>
                                <option value="new-traditional">New Traditional</option>
                                <option value="letter">Letter</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="height-Input">
                            <FormText>Height(cm/ft)*</FormText>
                            <Input type="text" name='height-Input' id='height-Input' />
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="Description-tattoo">
                            <FormText>Description of your tattoo/idea/theme*</FormText>
                            <textarea placeholder='max 1500 caracters' name="Description-tattoo" id="Description-tattoo" cols="60" rows="20" maxLength='1500'></textarea>
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="reference-img">
                            <FormText>Reference Images*</FormText>
                            <Input type="file" id="reference-img" name="reference-img" accept="image/*" />
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="area-to-be-tattooed">
                            <FormText>Area to be tattooed</FormText>
                            <Input type="file" name="area-to-be-tattooed" id="area-to-be-tattooed" accept='image/*' />
                        </Label>
                    </FormGroup>
                </Form>
                <Button type='submit'>Submit</Button>
            </div>
        )
    }
}


export default OrderTattoo;

