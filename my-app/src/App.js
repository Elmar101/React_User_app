import React from 'react';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
class App extends React.Component {
  state = {
    idx: 4,
    users:[
      { id: 1,name:"Elmar", state:"online" },
      { id: 2,name:"Eldar", state:"offline" },
      { id: 3,name:"Elcin", state:"busy" }
    ]
  }

  addUsersHandler = (_name)=> {
    
    let _id = this.state.idx;
    let user ={ id:_id, name:_name, state: 'online'}
    let tUsers = [...this.state.users, user];
    this.setState( { users: tUsers, idx: _id +1 } );
  }

  deleteUsersHandler = (_id) => {
    let tUsers = this.state.users.filter(user => {
      return user.id !== _id
    });
    this.setState({ users: tUsers })
  }

  stateChangeHandler = (data) =>{
    let tUsers = this.state.users.map(user => {
      if(user.id === data.id) {
        user.state = data.state;
      }
      return  user;
    })
    this.setState({ users: tUsers })
  }
  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
             <UserList users={ this.state.users } 
                       deleteMetod = { this.deleteUsersHandler }
                       stateChange = { this.stateChangeHandler }/>
             <hr/>
             <AddUser addMetod = { this.addUsersHandler  }/>
          </div>
        </div>
        
        
      </div> 
    )
  }
}
export default App;
