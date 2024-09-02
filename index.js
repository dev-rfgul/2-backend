require('dotenv').config()

const express = require('express')
const app = express()
// const port = 3000

const githubData = {
    "login": "dev-rfgul",
    "id": 146063235,
    "node_id": "U_kgDOCLS_gw",
    "avatar_url": "https://avatars.githubusercontent.com/u/146063235?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/dev-rfgul",
    "html_url": "https://github.com/dev-rfgul",
    "followers_url": "https://api.github.com/users/dev-rfgul/followers",
    "following_url": "https://api.github.com/users/dev-rfgul/following{/other_user}",
    "gists_url": "https://api.github.com/users/dev-rfgul/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/dev-rfgul/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/dev-rfgul/subscriptions",
    "organizations_url": "https://api.github.com/users/dev-rfgul/orgs",
    "repos_url": "https://api.github.com/users/dev-rfgul/repos",
    "events_url": "https://api.github.com/users/dev-rfgul/events{/privacy}",
    "received_events_url": "https://api.github.com/users/dev-rfgul/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Muhammad Fahad",
    "company": null,
    "blog": "https://muhammadfahad.vercel.app/",
    "location": "Bahawalpur,Pakistan",
    "email": null,
    "hireable": null,
    "bio": "I am a student at Islamia University Bahawalpur of Computer Science (22-26).",
    "twitter_username": "rf_gul785",
    "public_repos": 80,
    "public_gists": 0,
    "followers": 4,
    "following": 0,
    "created_at": "2023-09-26T06:41:20Z",
    "updated_at": "2024-08-19T09:16:59Z"
}

app.get('/', (req, res) => {
    res.send('Hello World! I am fahad')
});
app.get('/about', (req, res) => {
    res.send('Hello World! I am fahad currently on the about page')
});
app.get('/login', (req, res) => {
    res.send('Hello World! I am fahad currently on the login page')
})

app.get('/contact', (req, res) => {
    res.send("hello world i am on contact page")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`)
})