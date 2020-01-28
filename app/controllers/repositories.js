const axios = require("axios");
const getLanguageInfo = require('../helpers/getLanguageInfo');

exports.languages = async (req, res, next) => {
    try {
        const result = await axios.get("https://github-trending-api.now.sh/");
        const languages = new Set();
        const responseObject = {
            count: 0,
            languages: []
        };

        // guarantee to not exceed 100 repository
        const data = result.data.slice(0, 100);

        // exports all the languages from the repositories
        data.forEach(repo => {
            if (repo.language) {
                languages.add(repo.language);
            }
        });

        // get needed informations from every language
        languages.forEach(language => {
            responseObject.languages.push(getLanguageInfo(data, language));
        });

        // include the languages number
        responseObject.count = responseObject.languages.length;

        res.status(200).json(responseObject);
    } catch (error) {
        next(error);
    }
};
