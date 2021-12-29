import fetch from 'node-fetch';
import express from "express"

var issue_assigned=""
var arr = []  
const query = `
  query {
    user(login: "AvineshTripathi") {
      issues(filterBy: {assignee: "AvineshTripathi"}) {
        totalCount
      }
    }
    viewer {
      repositoriesContributedTo(first: 10, contributionTypes: COMMIT) {
        nodes {
          nameWithOwner
        }
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
  .then(text => issue_assigned = text.split(','))
  .then(issue_assigned => getArr(issue_assigned))
  .catch(error => console.error(error))


// to convert the json array into simple array
function getArr(issue_assigned){
  var count = 0
  issue_assigned.forEach(element => {
    const f = element.substring(
      element.indexOf(':'),
      element.lastIndexOf('"')+2
    )
    if(count == 0){
      const issueCount = element.substring(element.indexOf('t":')+3, element.lastIndexOf('}')-1)
      arr.push(issueCount)
      count=1
    }else {
      const fin = f.substring(f.indexOf(':"')+2, f.lastIndexOf('"}'))
      arr.push(fin)
    }    
  });
}



const app = express();
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`listening to port ${process.env.PORT}`))

app.get('/data', (req,res) => {
    res.send(arr);
});

