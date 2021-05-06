const axios = require("axios");

const getUserId = () => {
    axios.get("www.google.com", {
        auth: {
            username: 'janedoe',
            password: 's00pers3cret'
        }
    })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

getUserId()