import React, { Component } from 'react';
import { connect } from 'react-redux';
import RatingForm from './RatingForm';

class BookDetail extends Component{


render(){

  var bookid;

  if (this.props.book){
    bookid=this.props.book.id;
  }else{
    bookid=0;
  }
 
return (
             	<div className="detail-panel"> 
                  
                  <RatingForm bookId={bookid} />

                    {/*<!--Avatar content of stacked posts -->*/}
                    <ul className="collection">
                    	{ this.props.book ? this.props.book.Ratings.map(e=>{

                        let imglink;
                     

                         if(e.Member && e.Member.piclink){

                          imglink = "/img/"+  e.Member.piclink ;
                        
                          }else{
                          
                          imglink = "/img/unknown.png"

                          }

                     return (

                      <li className="collection-item avatar" key={e.id}>
                            <img src={imglink} alt="" className="circle" />
                            <span className="title">{ e.Member.fname} {e.Member.lname}</span>
                            <p>{e.ratedon}</p>
                            <p>{ e.comment}<br />{ e.stars} Stars</p>
                       </li>

                      );

                     })
                  : <div/>}
                        

                        

                    </ul>
                </div> 
               
           
     
            
		);
	}

}


BookDetail.propTypes = {

  book : React.PropTypes.object

 
}

function mapStateToProps(state,ownProps){

    console.log("ownProps params id =",ownProps.params.id);

    if(state.books.find(e=>e.id == ownProps.params.id)){
        return {
      		book : state.books.find(e=>e.id == ownProps.params.id)
     	}

    }else{

       return {
      	book : state.books[0]
       }

    }
  
  }
 



export default connect(mapStateToProps,{})(BookDetail);