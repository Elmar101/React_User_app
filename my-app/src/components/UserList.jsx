import React from 'react';
import User from './User';

const UserList = ( { users , deleteMetod, stateChange} )=>{

    if(users.length > 0 ) { 
        return(
            users.map( user => { return (
                <User user={ user } 
                      deleteMetod={()=> deleteMetod(user.id)} 
                      stateChange={ stateChange }
                      key={user.id}/> )
            })
        )
    } else  return (<div className="alert alert-warning"> istifadeci tapilmadi..... </div>)
          
}
export default  UserList;