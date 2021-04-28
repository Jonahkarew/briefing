import React from 'react';


function TwitterFeed() {

    const call = () => {
        console.log("everything is fine.")
    }

    return (
        <div>
            <button onClick={call()}>click for tweets</button>
        </div>
    )
}

export default TwitterFeed
