import React, {Component} from "react";


class GithubApi extends Component {
  state = {
      issueCount: 0,
      data: []
    };
    
    // used to render something as soon as the page renders 
    componentDidMount() {
      this.callBackendApi()
        .then(res => this.setState({issueCount: res[0],data: res}))
    }
    
      // fetching the GET route from the Express server which matches the GET route from server.js
    callBackendApi = async () => {
      const response = await fetch('/data');
      const body = await response.json();
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };
  
    
    render() {
      return (
        <div className="Github_main">
            {this.state.issueCount}
           {this.state.data.map((item,index)=>{
                return <li key={index}>{item}</li>
              })}
        </div>
      );
    }
  }
  
  export default GithubApi;