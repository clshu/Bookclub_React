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
                      


                      { this.props.books.map(e=>{

                       
                        let detailLink ="/app/library/"+e.id;

                       

                     return (

                       <Link to={ detailLink } >
                         <li className="collection-item avatar">
                            <i className="material-icons circle teal">library_books</i>
                            <span className="title">{ e.title.toUpperCase() }</span>
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