import React from 'react';
import './DisplayResults.css'

class DisplayResults extends React.Component {
  render(){
    return (
        <div className="result">
            {this.props.state.data}
        </div>
        
      );
  }
}

export default DisplayResults;