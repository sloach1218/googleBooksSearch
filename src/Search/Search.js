import React from 'react';


class Search extends React.Component {
  
    render(){
        return (
            <div>
                <label htmlFor="searchTerm">Search:</label>
                <input 
                    type="text"
                    name="searchTerm"
                    id="searchTerm"
                    placeholder="searchTerm"
                    value={this.props.state.searchTerm}
                    onChange={e => this.props.termChanged(e.target.value)}
                    />
                <button onClick={this.props.handleSearch}>Search</button>
            </div>
            
        );
    }
}

export default Search;