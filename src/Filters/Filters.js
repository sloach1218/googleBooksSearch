import React from 'react';

class Filters extends React.Component {
  render(){
    return (
        <div>
                <label>Print Type:</label>
                <select value={this.props.state.printType} onChange={e => this.props.filterChanged(e.target.value)}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
                <label>Book Type:</label>
                <select value={this.props.state.bookType} onChange={e => this.props.secondfilterChanged(e.target.value)}>
                    {/*<option value=" ">no filter</option>*/}
                    <option value="partial">partial</option>
                    <option value="full">full</option>
                    <option value="free-ebooks">free ebooks</option>
                    <option value="paid-ebooks">paid ebooks</option>
                    <option value="ebooks">ebooks (paid or free)</option>
                </select>
            
        </div>
      );
  }
}

export default Filters;