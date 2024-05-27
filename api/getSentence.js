const axios = require("axios");

const getSentence = async () => {
    // Fetch a sentence with the dynamically determined minLength
    const jokeData = await axios.get(`https://api.quotable.io/random?minLength:20`);

    return jokeData.data.content.split(" ");
}

module.exports = getSentence;
