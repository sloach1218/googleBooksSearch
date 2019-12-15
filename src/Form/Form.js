import React from 'react';
import Search from '../Search/Search'
import Filters from '../Filters/Filters'
import './Form.css'

class Form extends React.Component {
  
    render(){
    return (
        <form>
            <fieldset>
                <Search 
                    handleSearch={this.props.handleSearch}
                    termChanged={this.props.termChanged}
                    state={this.props.state}/>
                <Filters 
                    state={this.props.state}
                    filterChanged={this.props.filterChanged}
                    secondfilterChanged={this.props.secondfilterChanged}
                />
            </fieldset>
        </form>
        
      );
  }
}

export default Form;