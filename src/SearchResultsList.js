import React, {Component} from 'react'; 
import SearchResultsItem from './SearchResultsItem'

class SearchResults extends Component{
    render(){
        let {searchResults} = this.props; 
        let renderList = Object.keys(searchResults).map(key => {
            return <SearchResultsItem item={searchResults[key]} key={key} />
        })
        return(
            <section>
                {renderList}
            </section>
        )
    }
}

export default SearchResults 