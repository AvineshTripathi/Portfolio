import React, {Component} from "react";


class GithubApi extends Component {
  state = {
      data: null,
      issue: null
    };
  
    componentDidMount() {
      Promise.all([this.callForExpress(), this.callForIssue()])
        .then(([res1, res2]) => {
          this.setState({data: res1.express, issue: JSON.stringify(res2).charAt(42)});
        });
    }
    
      // fetching the GET route from the Express server which matches the GET route from server.js
    callForExpress = async () => {
      const response = await fetch('/express');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };

    callForIssue = async () => {
      const response= await fetch('/issue');
      const body = await response.json();

      if(response.status !== 200) {
        throw Error(body.message)
      }
      return body;
    }
  
    render() {
      return (
        <div>
          Hi, {this.state.data}
          {this.state.issue}
        </div>
      );
    }
  }
  
  export default GithubApi;