import fetch from 'node-fetch';
import express from "express"

var issue_assigned=0  
const query = `
  query {
    viewer {
      issues(filterBy: {assignee: "AvineshTripathi"}, last: 11) {
        totalCount
      }
    }
  }`;

fetch('https://api.github.com/graphql', {
  method: 'POST',
  body: JSON.stringify({query}),
  headers: {
    Authorization: `Bearer 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`
  }
})
  .then(res => res.text())
  .then(text => issue_assigned = text)
  .catch(error => console.error(error))


const app = express();
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`listening to port ${process.env.PORT}`))

app.get('/express', (req,res) => {
    res.send({express: 'Your express backend is connected now'});
    console.log(req)
});

app.get('/issue', (req,res) => {
  res.send(issue_assigned)
})