import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getBooks } from '../actions/book_actions';

class Library extends Component{


componentDidMount() {
  
  this.props.getBooks();


}
	
render(){

return (


       <div className="row">

            {/*<!--Member panel listing names and avatar -->*/}
            <div className="col sm12 m5 lg5">
            <div className="choice-panel">
                  <ul className="collection">
                      <Link to="/app/books/edit" >
                      <li className="collection-item avatar">
                          <a href="#"><i className="material-icons circle teal">mode_edit</i>
                          <span className="title">Edit my profile</span></a>
                      </li>
                       </Link>


                      { this.props.books.map(e=>{

                       
                        let detailLink ="/app/books/"+e.id;

                       

                     return (

                       <Link to={ detailLink } >
                         <li className="collection-item avatar">
                            <i className="material-icons circle teal">library_books</i>
                            <span className="title">{ e.title }</span>
                        </li>
                      </Link>

                      );

                     })
                  }
                 
                     

                     
                  </ul>
            </div>
            </div>

            <div className="col sm12 m7 lg7">
           
              { this.props.children }
            </div> {/*<!--closes detail column -->*/}


           
        {/*<!--closes row -->*/}

    </div> 
		);
	}

}

Library.propTypes = {

  books : React.PropTypes.array

 
}

function mapStateToProps(state){

  
    return {
      books : state.books
    }

 
}


export default connect(mapStateToProps,{ getBooks })(Library);