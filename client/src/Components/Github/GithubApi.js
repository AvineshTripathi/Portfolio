import React, {Component} from "react";


class GithubApi extends Component {
  state = {
      data: null
    };
  
    componentDidMount() {

      this.callBackendApi()
        .then(res => this.setState({data: res})); 
    }
    
      // fetching the GET route from the Express server which matches the GET route from server.js
    callBackendApi = async () => {
      const response = await fetch('/data');
      const body = await response.text();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };
  
    render() {
      return (
        <div>
          Hi, {this.state.data}
        </div>
      );
    }
  }
  
  export default GithubApi;