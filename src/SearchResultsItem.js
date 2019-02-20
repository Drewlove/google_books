import React, {Component} from 'react'

class SearchResultsItem extends Component{
    render(){
        let {title, authors, price, imageLinks, description} = this.props.item; 
        return(
            <div>
                <h1>{title}</h1>
                <h2>{price}</h2>
                {authors ? <h2>{authors[0]}</h2>: null}
                <img src={imageLinks.smallThumbnail} />
                <p>{description}</p>
            </div>
        )
    }
}

export default SearchResultsItem