import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

function Button({user, setUser}){

    function handleLogoutClick(){
        fetch("http://localhost:3000/button", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return (
        <>
        <div>
            {user ? (
            <button onClick={handleLogoutClick} className="button3">Logout</button>
            ) : (
                <>
                <div id="sign-login"> 
                    <Link to="/signup">Signup  / </Link>   
                    <Link to="/login"> Login</Link>
                </div>
                </>
            )}
        </div>
        </>
    )
};

export default Button;