import React,{useEffect, useState, Component} from 'react';
import "./Login.css";
import {Button} from "@material-ui/core";
import {auth, provider, updateProfile} from "./firebase" ;
import { useStateValue } from './StateProvider';
import { actionTypes , initialState} from './Reducer';
import db from "./firebase";

      

function Login()  {
    const [input,setInput]=useState("");
const [username,setUsername]=useState("");
    //useEffect((if())=>{},[auth.onAuthStateChanged])
    /*function 
     auth().onAuthStateChanged(function(user) {
        if (user) {
          alert("Signed in user!")
        } else {
          alert("No user!")
        }
      });*/
    const [{}, dispatch]=useStateValue();

    const signIn = () =>{
        auth
            .signInWithPopup(provider)
            .then((result)=>{
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })

            console.log(result.user);
            db.collection('users').doc(result.user.uid).set({
                name:result.user.displayName,
                state: "online",
                Status: "Hey there!!",
                photoURL: result.user.photoURL
            });
        
            })
            .catch((error) =>alert(error.message));
            
    };
    return (
    <div className="login">
        <div className="login_container">
            <img src="http://clipart-library.com/img/1227873.jpg" alt="" />
            <div className="login_text">
                <h1>Sign in to CureCheck</h1>
            </div>
            {/* <form >
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type username.."  />
                    <button type="submit" onClick={setUsername(input)}>Send message</button>
                </form> */}
            <Button onClick={signIn} >Sign in with Google</Button>

        </div>
    </div>
    )
}

export default Login
