# Back-end coding challenge
> **IMPORTANT:** The challenge can't be done exactly how it was required, due to two major points mentioned in the note section below

## Functional specification
The challenge is about creating a REST microservice that list information about the languages used by the 100 trending github repositories here is the informations required for every language:

- The number of repositories using the language
- The list of repositories using the language
- Framework popularity over the 100 repositories

## Run

```sh
# with Docker
docker-compose up

# with nodejs installed locally
npm install && npm start
```

## Documentation

**Fetch languages infomations**

```sh
GET   /api/v1/repositories/languages
```

**Response example:**

```json
{
    "count": 1,
    "languages": [
    {
        "language": "JavaScript",
        "repositories_count": 1,
        "repositories": [
            {
                "name": "jira_clone",
                "author": "oldboyxx",
                "url": "https://github.com/oldboyxx/jira_clone",
                "stars": 2049,
                "forks": 167,
                "description": "A simplified Jira clone built with React/Babel (Client), and Node/TypeScript (API)."
            }
        ]
    }
}
```

## Note

**What is missing in the challenge is that:**

- The service can't guarantee to fetch language informations of exactly 100 trending repository and that's related to the github trending page it dosn't provide exactly the required number of repositories.

- The framework popularity part wasn't clear, and even though the github api dosn't provide clear information of which framework is used on each repository.