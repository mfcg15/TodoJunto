import React from "react";

class PersonCard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            age:props.age
        }
    }

    aumentarEdad = (e,edad) => 
    {
        edad++;
        this.setState({age: edad})
    }

    render()
    {
        const {firstName,lastName,hairColor} = this.props;
        
        return(

                <div>
                    <h2>{lastName}, {firstName}</h2>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {hairColor}</p>
                    <button className='btn btn-secondary' onClick={(e)=>this.aumentarEdad(e,this.state.age)}>Birthday Button for {firstName} {lastName}</button>
                </div>
        )
    }
}

export default PersonCard;