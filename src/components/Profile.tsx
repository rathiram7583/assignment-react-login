import React from 'react';
import {Card} from 'semantic-ui-react';


type ProfileType =  {
    userName: string,
    gender: string,
    dateOfBirth: Date,
    place: string,
}

interface IProfileProps {
    profile: ProfileType
}



export default class Profile extends React.Component<IProfileProps> {

    displayUserInformation = () => (
            <Card>
    
            <Card.Content>
            <Card.Header>{this.props.profile.userName.toUpperCase()}</Card.Header>
            <Card.Meta>
            <span className='date'>Gender {this.props.profile.gender}</span>
            </Card.Meta>
            <Card.Meta>
            <span className='date'>Born in {this.props.profile.dateOfBirth.toLocaleDateString()}</span>
            </Card.Meta>
            <Card.Description>
            Location {this.props.profile.place}
            </Card.Description>
            </Card.Content>
            </Card>
    )

    render() {
        return this.displayUserInformation();
    }
}