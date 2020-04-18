import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'
import Profile from './Profile';


const userPwd: {[index: string]: string} = {
    Rathi: "0125",
    Ram:   "0278",
    Gautam: "0710",
    Kaelyn:"1214"
}

const userGender: {[index: string]: string} = {
    Rathi: "Female",
    Ram: "Male",
    Gautam: "Male",
    Kaelyn:"Female"
}

const userDob: {[index: string]: Date} = {
    Rathi: new Date("1983-05-07"),
    Ram: new Date("1978-04-14"),
    Gautam: new Date("2011-10-07"),
    Kaelyn:new Date("2014-02-01")
}

const userPlace: {[index: string]: string} = {
    Rathi: "Edmonton",
    Ram: "Red Deer",
    Gautam: "Red Deer",
    Kaelyn:"Edmonton"
}



interface IUserProps {

}

interface IUserState {
    userName: string,
    password: string,
    gender: string,
    dateOfBirth: Date,
    place: string,
    loggedin: boolean,
    userNameErr: boolean,
    pwdErr: boolean
}

export default class User extends React.Component<IUserProps, IUserState> {
    constructor (props : string | Date) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            gender: "",
            dateOfBirth: new Date(""),
            place: "",
            loggedin: false,
            userNameErr: false,
            pwdErr: false
        }
    }

    submitForm = (event: any): void => {
        event.preventDefault();

        this.setState({
            pwdErr: false,
            userNameErr: false
        });
            
        const userNameNode: HTMLInputElement | null = document.querySelector("[name='user-name']");
        const passwordNode: HTMLInputElement | null = document.querySelector("[name='password']");

        if ((userNameNode !== null) && (passwordNode !== null)) {
            for (let user in userPwd) {
                if (user === userNameNode.value) {
                    if (userPwd[user] === passwordNode.value) {
                        this.setState({
                            userName: user,
                            gender: userGender[user],
                            dateOfBirth: userDob[user],
                            place: userPlace[user],
                            loggedin: true,
                            pwdErr: false,
                            userNameErr: false
                        });
                        return;
                    } else {
                        this.setState({
                            pwdErr: true
                        });
                        return;
                    }
                }
            }
            this.setState({
                userNameErr: true
            })
        }
    }

    logout = (event: any) => {
        event.preventDefault();

        this.setState({
            userName: '',
            gender: '',
            dateOfBirth: new Date(),
            place: '',
            loggedin: false,
            userNameErr: false,
            pwdErr: false
        })
    }

    LoginForm = () => (
        <div>
            
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input 
                            fluid 
                            icon='user'
                            iconPosition='left' 
                            placeholder='UserName' 
                            name='user-name'
                            error={this.state.userNameErr ? "User Name doesn't exist!" : null} 
                            />
                            <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            name='password'
                            error={this.state.pwdErr ? "Password incorrect!" : null}
                            />
                            <Button color='teal' fluid size='large' onClick={this.submitForm}>
                            Login
                            </Button>
                        </Segment>
                    </Form>

            
            
        </div>
      );

    render() {
        if (this.state.loggedin) {
            const user = { profile: this.state }
            return (
                <div>
                    
                
                            <Profile {...user} />
                            <Button color='teal' fluid onClick={this.logout}>
                            Logout
                            </Button>
                
                    
                </div>
            );
        } else {
            return this.LoginForm();
        }
    }
}