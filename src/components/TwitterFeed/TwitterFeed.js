import React, { useState, useEffect } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';


function TwitterFeed() {
    const [followList, setFollowList] = useState(["Nothing here yet"]);
    const [currentTwitterTerm, setCurrentTwitterTerm] = useState("");


    // useEffect(() => {
        
    //     localStorage.getItem("twitterFeed")
    //     if (TwitterFeed){
    //         let tempList = JSON.parse(localStorage.getItem("twitterFeed"));
    //         setFollowList(tempList)
    //     }
    //    else{
    //        setFollowList(["POTUS"])
    //    }
    //   }, []);

    const setLocalTwitterTerms = () => {
        let tempList = JSON.parse(localStorage.getItem("twitterFeed"));
        tempList.push(currentTwitterTerm);
        setFollowList(tempList);
        localStorage.setItem("twitterFeed", JSON.stringify(tempList));
    };

    const retrieveLocalTwitterTerms = () => {
        let tempList = JSON.parse(localStorage.getItem("twitterFeed"));
        setFollowList(tempList)
    };

    return (
        <div>
            <InputGroup>
                <Input onChange={(e)=>{setCurrentTwitterTerm(e.target.value)}} placeholder="Add to follow list." />
                <InputGroupAddon addonType="append">
                    <Button onClick={()=>{setLocalTwitterTerms()}} >
                        Follow
                    </Button>
                </InputGroupAddon>
            </InputGroup>
            <button onClick={retrieveLocalTwitterTerms}>click for tweets</button>
            <br />
            <h2>List of tweets</h2>
            <ul>
                {followList.map((follows) => (
                    <li key={follows}>{follows}</li>
                ))}
            </ul>
        </div>
    )
}

export default TwitterFeed
