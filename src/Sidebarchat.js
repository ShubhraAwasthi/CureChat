import React,{useEffect, useState} from 'react';
import './Sidebarchat.css';
import {Avatar, IconButton} from "@material-ui/core";
import db from "./firebase";
import {Link} from "react-router-dom";

function Sidebarchat({id, name, addnewchat,type, photoURL}) {
    const [seed,setSeed]=useState('');
    const [messages, setMessages] = useState('');

    useEffect(()=>{
        if(id && type==="room"){
            db.collection('rooms')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp','desc')
            .onSnapshot((snapshot) =>(
                setMessages(snapshot.docs.map((doc) => doc.data()))
            ));
        }
    },[id])
    

    
    useEffect(() => {
        setSeed(Math.floor(Math.random()*500));
        
    }, [])

    const createchat = () =>{
        const roomname= prompt("Please enter room name for chat:");
        if(roomname)
        {
            db.collection('rooms').add({
                name:roomname,
            });
        }
    };
    return !addnewchat ? (
        
        type==="room"?
        (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarchat">
                <Avatar src={`data:image/png;base64,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`}/>
                <div className="sidebarchat_info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
        )
        :
        (<Link to={`/users/${id}`}>
            {console.log(name)}
            <div className="sidebarchat">
                {console.log(photoURL)}
                <Avatar src={photoURL?(photoURL): (`https://avatars.dicebear.com/api/human/${seed}.svg`)}/>
                <div className="sidebarchat_info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
        )
        
    ):
    (
        <div onClick={createchat} className="sidebarchat">
            <h2>Add new chat</h2>
        </div>
    )
}

export default Sidebarchat;
