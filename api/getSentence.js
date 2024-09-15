const axios = require("axios");
const https = require("https");

const getSentence = async () => {
    try {
        // Create an HTTPS agent that ignores expired SSL certificates
        const agent = new https.Agent({
            rejectUnauthorized: false // Bypass SSL certificate validation
        });

        // Fetch a sentence with the corrected minLength query parameter
        const jokeData = await axios.get('https://api.quotable.io/random?minLength=20', { httpsAgent: agent });

        // Split the content into words
        return jokeData.data.content.split(" ");
    } catch (error) {
        console.error('Error fetching the sentence:', error.message);
        throw error;
    }
};

module.exports = getSentence;
