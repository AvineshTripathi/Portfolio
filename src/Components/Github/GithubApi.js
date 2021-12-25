import React from 'react'

export default function GithubApi() {

    const [res, setres] = ""
    const body = {
        "query": `
        query {
            user(login: ${process.env.USERNAME}) {
              followers {
                totalCount
              }
              following {
                totalCount
              }
            }
          }
        `
    }

    const baseUrl = "https://api.github.com/graphql";
    
    const headers = {
        "Content-Type": "application/json",
        Authorization: "bearer "+process.env.GITHUB
    }

    fetch(baseUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    }).
    then(response => setres(JSON.stringify(response)))
    .catch(err => console.log(JSON.stringify(err)));
    return (
        res
    )
}


