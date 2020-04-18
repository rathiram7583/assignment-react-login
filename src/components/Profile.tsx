import React from 'react';


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

    render() {
        return (
            
            <div>
            <h1>{this.props.profile.userName}</h1>
            <h4>Gender {this.props.profile.gender}</h4>
            <h4>Born in {this.props.profile.dateOfBirth}</h4>
            <h4>Location {this.props.profile.place}</h4>
            </div>
            

        )}
}