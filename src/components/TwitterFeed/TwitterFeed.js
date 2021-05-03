import React, { useState, useEffect } from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';


function TwitterFeed() {
    const [followList, setFollowList] = useState([]);
    const [currentTwitterTerm, setCurrentTwitterTerm] = useState("");


    useEffect(() => {
        retrieveLocalTwitterTerms()
    }, []);

    const setLocalTwitterTerms = () => {
        if (localStorage.getItem("twitterFeed") === null) {
            setFollowList([])
            localStorage.setItem("twitterFeed", "[]")
        }
        else {
            let tempList = JSON.parse(localStorage.getItem("twitterFeed"));
            tempList.push(currentTwitterTerm);
            setFollowList(tempList);
            localStorage.setItem("twitterFeed", JSON.stringify(tempList));
            setCurrentTwitterTerm("")
        }
    };

    const retrieveLocalTwitterTerms = () => {
        if (localStorage.getItem("twitterFeed") === null) {
            localStorage.setItem("twitterFeed", "[]")
        }
        else {
            let tempList = JSON.parse(localStorage.getItem("twitterFeed"));
            setFollowList(tempList)
        }
    };


    return (
        <div>
            <InputGroup>
                <Input value={currentTwitterTerm} onChange={(e) => { setCurrentTwitterTerm(e.target.value) }} placeholder="Add to follow list." />
                <InputGroupAddon addonType="append">
                    <Button onClick={() => { setLocalTwitterTerms() }} >
                        Follow
                    </Button>
                </InputGroupAddon>
            </InputGroup>
            <button onClick={retrieveLocalTwitterTerms}>click for tweets</button>
            <br />
            <h2>List of tweets</h2>

            
            {/* terniary display of available tweets */}
            <ul>
                {followList.map((follows) => (
                    <li key={follows}>{follows}</li>
                ))}
            </ul>
            <Button onClick={getUserId}>get twitter ids</Button>
        </div>
    )
}

export default TwitterFeed
