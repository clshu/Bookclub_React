import React, { Component } from 'react';
import { connect } from 'react-redux';


class MemberDetail extends Component{

constructor(props) {
  super(props);


  this.state = {
    
    memberId : 0,
    member : {}

    }
  
}
	
componentDidMount() {

 
  console.log("params",this.props.params.id);
}



componentWillReceiveProps(nextProps) {


  console.log("next params",nextProps.params.id);

   this.setState({

    member : this.props.members.find(e=>e.id=== this.props.params.id)
  }); 




}

render(){

  var { member } = this.state;

    let imglink;

    let renderContent;

     if(member){

      if(member.piclink){
         imglink = "img/"+  member.piclink ;

      }else{

        imglink = "img/unknown.png";

      }

     

      renderContent = <div className="detail-panel">
                  <div className="row">
                      <div className="col sm3 m3 l3">
                          <img src={ imglink } alt="" className="avatar" />
                      </div>
                      <div className="col sm9 m9 l9">
                          <h4 className="center">{ member.fname } { member.lname }</h4>
                      </div>
                  </div>
                  
                  <div className="row">
                
                        <div className="container">
                          <p>Member since: { member.joindt }</p>
                          <p>{ member.address1 }, { member.city }, { member.state }  { member.zip }</p>
                          <p>m. { member.mobile }</p>
                          <br />
                          <h3>ABOUT ME:</h3>
                          <p>{ member.aboutme }</p>
           
                          <h3>TOP 3 BOOKS I'VE READ:</h3>
                            <li>{ member.favbook1 }</li>
                            <li>{ member.favbook2 }</li>
                            <li>{ member.favbook3 }</li>
                         
                        </div>
                     
                  </div>

            </div> 
    
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

function mapStateToProps(state){

  
    return {
      members : state.members
    }

 
}


export default connect(mapStateToProps,{})(MemberDetail);