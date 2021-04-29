import React, { useState } from 'react';


function TwitterFeed() {
    const [followList, setFollowList] = useState(["one thing", "two  thing"])
    const call = () => {
        console.log("everything is fine.")
    }

    return (
        <div>
            <button onClick={call()}>click for tweets</button>
            <br />
            <h2>List of tweets</h2>
            <ul>
                {followList.map((follows)=>(
                    <li key={follows}>{follows}</li>
                ))}
            </ul>
        </div>
    )
}

export default TwitterFeed
