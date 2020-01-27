module.exports = (data, language) => {
    const info = {
        language: language,
        repositories_count: 0,
        repositories: []
    };

    for (let i = 0; i < data.length; i++) {
        const repo = data[i];

        if (repo.language === language) {
            info.repositories_count += 1;
            info.repositories.push({
                name: repo.name,
                author: repo.author,
                url: repo.url,
                stars: repo.stars,
                forks: repo.forks,
                description: repo.description
            });
        }
    }
    return info;
};
