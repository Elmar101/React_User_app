import React from 'react';
const User = ({user ,deleteMetod , stateChange}) =>{
    const onChangeStateHandler = (e) =>{
        const data = {state: e.target.value, id: user.id }
        stateChange( data );
    }
    return (
        <div className = "card bg-light mb-3 border border-primary">
            <div className = "card-body">
                <button onClick={ deleteMetod } className = "btn btn-sm btn-outline-danger"
                        style={ { position:'absolute', right:'15px'} }>
                    Sil
                </button>
                <h2 className = "card-title"> Ad: {user.name} </h2>
                <h3 className = "card-subtitle"> 
                    Durum: <span className={user.state}> {user.state} </span> 
                </h3>

                <select className="form-control mt-2" name="state" id="state"  value={ user.state }
                        onChange={ onChangeStateHandler }
                >
                    <option value="online"> online </option>
                    <option value="offline"> offline </option>
                    <option value="busy"> busy</option>
                </select>
            </div>
        </div>
    )
}
export default User;