
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/post_actions';
import NewPostForm from './NewPostForm';

class News extends Component{

componentDidMount() {
  
  this.props.getPosts();


}

	
render(){

return (

     <div id="news">

            {/*<!--Input Form to post user comments-->*/}
         < NewPostForm />


            {/*<!--Avatar Content -->*/}
            <ul className="collection">

                { this.props.posts.map((e)=>{

                  let imglink;
                  if(e.Member.piclink){

                    imglink = "/img/"+  e.Member.piclink ;
                  }else{
                    imglink = "/img/unknown.png"

                  }


                  return (

                   <li className = "collection-item avatar" key={e.id}>
                      <img src={ imglink } alt="" className="circle"/>
                      <span className="title">{ e.Member.fname } { e.Member.lname }</span>
                      <p>{e.postedon}</p>
                      <p>{ e.content }</p>
                    </li>
                  );

                })

              }

            </ul>
  
    </div>
		);
	}

}

News.propTypes = {

  posts : React.PropTypes.array

 
}

function mapStateToProps(state){

  
    return {
      posts : state.posts
    }

 
}


export default connect(mapStateToProps,{ getPosts })(News);