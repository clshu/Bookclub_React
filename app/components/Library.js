import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getMembers } from '../actions/member_actions';

class Library extends Component{


componentDidMount() {
  
  this.props.getMembers();


}
	
render(){

return (


       <div className="row">

            {/*<!--Member panel listing names and avatar -->*/}
            <div className="col sm12 m5 lg5">
            <div className="choice-panel">
                  <ul className="collection">
                      <Link to="/app/members/edit" >
                      <li className="collection-item avatar">
                          <a href="#"><i className="material-icons circle teal">mode_edit</i>
                          <span className="title">Edit my profile</span></a>
                      </li>
                       </Link>


                      { this.props.members.map(e=>{

                        let imglink;
                        let detailLink ="/app/members/"+e.id;

                         if(e.piclink){

                          imglink = "/img/"+  e.piclink ;
                        
                          }else{
                          
                          imglink = "/img/unknown.png"

                        }

                     return (

                       <Link to={ detailLink } >
                         <li className="collection-item avatar">
                            <img src={ imglink } alt="" className="circle" />
                            <span className="title">{ e.fname} {e.lname}</span>
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

Members.propTypes = {

  members : React.PropTypes.array

 
}

function mapStateToProps(state){

  
    return {
      members : state.members
    }

 
}


export default connect(mapStateToProps,{ getMembers })(Library);