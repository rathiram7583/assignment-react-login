import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'semantic-ui-react';

class Logout extends Component {

    constructor(props:any) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = (event:any) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    logout = (event: any) => {
        event.preventDefault();

        this.setState({
            userName: '',
            password:'',
            
        
        })
    }


    render() {
        return (
            <div>
                <h1>Login</h1>
                <h6>The User Information on the</h6>
                <Form >
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="li_username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" onClick={this.logout}> Login </Button>
                </Form>
            </div>
        )
    }
}

export default Logout;