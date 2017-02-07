import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component{


render(){

 
return (
             	<div className="detail-panel"> 
                  
                    <div id="book-rating">
                       <h5 className="panel-title">Rate the Book!</h5>
                       <div className="input-field">
                          <input id="libraryPost" type="text" className="validate" placeholder="Comments" />
                       </div>

	                    <div className="stars">
	                        <input type="radio" id="star-1" name="star" value="1"></input>
	                        <label for="star-1" title="text">1 star</label>
	                        <input type="radio" id="star-2" name="star" value="2"></input>
	                        <label for="star-2" title="text">2 star</label>
	                        <input type="radio" id="star-3" name="star" value="3"></input>
	                        <label for="star-3" title="text">3 star</label>
	                        <input type="radio" id="star-4" name="star" value="4"></input>
	                        <label for="star-4" title="text">4 star</label>
	                        <input type="radio" id="star-5" name="star" value="5"></input>
	                        <label for="star-5" title="text">5 star</label>
	                    </div>

	                    <button className="btn-sm right" type="submit" name="action">Submit</button><br />
	                </div>

                    {/*<!--Avatar content of stacked posts -->*/}
                    <ul className="collection">
                    	{ this.props.book ? this.props.book.Ratings.map(e=>{

                        let imglink;
                     

                         if(e.Member.piclink){

                          imglink = "/img/"+  e.Member.piclink ;
                        
                          }else{
                          
                          imglink = "/img/unknown.png"

                          }

                     return (

                      <li className="collection-item avatar">
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