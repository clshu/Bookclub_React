import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';


class MemberDetail extends Component{


render(){

  var  currentMember  = this.props.member;

    let imglink;

    let renderContent;

     if(currentMember){

          if(currentMember.piclink){
             imglink = "/img/"+  currentMember.piclink ;

          }else{

            imglink = "/img/unknown.png";

          }

     

      renderContent = (<div className="detail-panel">
                  <div className="row">
                      <div className="col sm3 m3 l3">
                          <img src={ imglink } alt="" className="avatar" />
                      </div>
                      <div className="col sm9 m9 l9">
                          <h4 className="center">{ currentMember.fname } { currentMember.lname }</h4>
                      </div>
                  </div>
                  
                  <div className="row">
                
                        <div className="container">
                          <p>Member since: { currentMember.joindt ? moment(new Date(currentMember.joindt )).format('ll'): null }</p>
                          <p>{ currentMember.address1 }, { currentMember.city }, { currentMember.state }  { currentMember.zip }</p>
                          <p>m. { currentMember.mobile }</p>
                          <br />
                          <h3>ABOUT ME:</h3>
                          <p>{ currentMember.aboutme }</p>
           
                          <h3>TOP 3 BOOKS I'VE READ:</h3>
                            <li>{ currentMember.favbook1 }</li>
                            <li>{ currentMember.favbook2 }</li>
                            <li>{ currentMember.favbook3 }</li>
                         
                        </div>
                     
                  </div>

            </div>);
    
      }else{
      
     
      renderContent = <div/>;


    }

return (

      <div>
      {renderContent}
      </div>
            
		);
	}

}


MemberDetail.propTypes = {

  member : React.PropTypes.object

 
}

function mapStateToProps(state,ownProps){

    console.log("ownProps params id =",ownProps.params.id);

    if(state.members.find(e=>e.id == ownProps.params.id)){
        return {
      member : state.members.find(e=>e.id == ownProps.params.id)
     }

    }else{

       return {
      member : state.members[0]
     }

    }
  
  }
 



export default connect(mapStateToProps,{})(MemberDetail);