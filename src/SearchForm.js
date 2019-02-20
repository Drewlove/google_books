import React, {Component} from 'react'; 

class SearchForm extends Component{
    state = {
        term: '', 
        printType: 'All', 
        bookType: 'partial'
    }

    updateSearch(term){
        this.setState({
            term
        })
    }

    updatePrintType(printType){
        this.setState({
            printType
        })
    }

    updateBookType(bookType){
        this.setState({
            bookType
        })
    }

    handleClick(e){
        e.preventDefault(); 
        const {term, printType, bookType} = this.state
        this.props.search(term, printType, bookType)
    }

    render(){
        return(
                <form>
                    <div className='form-search'>
                        <label htmlFor='search'>Search</label>
                        <input 
                        type='text'
                        name='search'
                        id='search'
                        onChange={(e)=>this.updateSearch(e.target.value)}
                        value={this.state.term}
                        />
                        <button 
                        type='submit'
                        onClick={e => this.handleClick(e)}>Search: 
                        </button>
                    </div>
                    <div className='form-filter'>
                        <label htmlFor='print-type'>Print Type</label>
                        <select name='print-type' onChange={e => this.updatePrintType(e.target.value)}>
                            <option value='all'>All</option>
                            <option value='books'>Books</option>
                            <option value='magazines'>Magazines</option>
                        </select>
                        <label htmlFor='book-type'>Book Type</label>
                        <select name='book-type' onChange={(e)=>this.updateBookType(e.target.value)}>
                            <option value='partial'>Partial</option>
                            <option value='full'>Full</option>
                            <option value='free-ebooks'>Free Ebooks</option>
                            <option value='paid-ebooks'>Partial</option>
                            <option value='ebooks'>Ebooks</option>
                        </select>
                    </div>
                    </form>
        )
    }
}

export default SearchForm