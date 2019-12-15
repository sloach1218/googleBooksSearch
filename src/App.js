import React from 'react';
import Form from './Form/Form'
import DisplayResults from './DisplayResults/DisplayResults'

class App extends React.Component  {
    constructor(props){
      super(props);
      this.state = {
          searchTerm: '',
          printType: 'all',
          bookType: 'full',
          data: []
      };

      this.handleSearch = this.handleSearch.bind(this);
      this.termChanged = this.termChanged.bind(this);
      this.filterChanged = this.filterChanged.bind(this);
      this.secondfilterChanged = this.secondfilterChanged.bind(this);
    }
    //handle click
    componentDidMount(){

    }
    
    handleSearch(e){
      e.preventDefault();
      this.setState({data: []})
      const query = '&q=' + this.state.searchTerm + '&printType=' + this.state.printType + '&filter=' + this.state.bookType;
      const url = 'https://www.googleapis.com/books/v1/volumes?key=AIzaSyC1xgkh4bZvKlQc88g9NwJbueLivaeUsR8&' + query;
      
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          
          let newResults = data.items.map((listing) => {
            return (
              <a href={listing.volumeInfo.previewLink} key={listing.id}>
                <div className="imgCont">
                  <img src={listing.volumeInfo.imageLinks.smallThumbnail} alt={listing.volumeInfo.title}/>
                </div>
                <h2>{listing.volumeInfo.title}</h2>
                <h3>{listing.volumeInfo.authors}</h3>
                <p>{listing.volumeInfo.description}</p>
              </a>
            )
          })
          this.setState({data: newResults})
          
        })
        
        
        
    }
  
    //update state when values change  
    termChanged(searchTerm) {
      this.setState({
        searchTerm
      });
    }

    filterChanged(printType) {
      this.setState({
        printType
      });
    }
    
    secondfilterChanged(bookType) {
      this.setState({
        bookType
      });
    }


  //fetch results from API

  
  render(){
    return (
      <div>
        <h1>Google Book Search</h1>
        <main className='App'>
          <Form 
            handleSearch={this.handleSearch}
            termChanged={this.termChanged}
            filterChanged={this.filterChanged}
            secondfilterChanged={this.secondfilterChanged}
            state={this.state}
            />
          <DisplayResults 
            state={this.state}
            />
        </main>
      </div>
      
    );
  }
}

export default App;
