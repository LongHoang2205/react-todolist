import React,{Component} from 'react';
import Search from '../components/Search';
import Sort from '../components/Sort';

class SearchSort extends Component {
  
   
  render(){ 
  return (
    <div className="row ">
              {/*Search*/}
                     <Search onSearch={this.props.onSearch}/>
                      {/*Sort*/}
                      
                       <Sort 
                            onSort={this.props.onSort}
                            sortBy={this.props.sortBy}
                            sortValue={this.props.sortValue}
                       />
                </div>
       
        );
      }
}

export default SearchSort;
