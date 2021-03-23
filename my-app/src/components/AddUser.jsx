import React from 'react';

class AddUser extends React.Component {
    state = { name: ''}

    submitHandler = (e) =>{
        e.preventDefault();
        this.props.addMetod( this.state.name );
        this.setState({ name : '' })
    }

    changeHandler = (e) =>{
        this.setState({
            name: e.target.value
        })
    }
    render(){
        return(
            <form onSubmit={ this.submitHandler }>
                <input type="text" id="name" className="form-control mb-2" placeholder="enter the name"
                       onChange={ this.changeHandler } value ={this.state.name} />
                <button className="btn btn-outline-success btn-block" type="submit"> Save </button>
            </form>
        )
    }
}

export default AddUser;