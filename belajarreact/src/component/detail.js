import React, { Component } from 'react'

class Detail extends Component{
    constructor(props){
        super(props);
        this.state ={
            umur:22,
            alamat:' Jakarta, Indonesia'
        };
    //     console.log('saya constructor')
    // }
    // componentWillMount(){
    //     console.
    }
    ubahumur(){
        this.setState(
            {
                umur:20
            }
        )
    }
render(){
    return(
        <div>
            <h1>{this.props.nama}</h1>
            <p> Age : {this.state.umur} </p>
            <p> Address :{this.state.alamat}</p>
            <button class="button" onClick={() => this.ubahumur()}>Edit Age</button>
            </div>
    )
}
}

export default Detail;