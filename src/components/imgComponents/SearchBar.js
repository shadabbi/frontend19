import React,{Component} from  'react';
import './SearchBar.css';

class SearchBar extends Component {

    state = {term:''}

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term,true);
        this.setState({term:''})
    }
   
    render() {
        return (
            <div className=" searchBar">
               <form onSubmit={this.onFormSubmit} >
                   <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Image Search</label>
                    <input  value={this.state.term} type="text" 
                         onChange={(e)=> this.setState({term:e.target.value})}
                         className="form-control" />
                </div>
               </form>
            </div>
        )
    }
}

export default SearchBar;

