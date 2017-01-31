
import React, { Component } from 'react';

class News extends Component{

	
render(){

return (

     <div id="news">

            {/*<!--Input Form to post user comments-->*/}
            <div className="input-field">
                <input id="newsPost" type="text" className="validate"></input>
                <label for="newsPost">Whats on your mind?</label>
                <hr/>
                <button className="btn-sm right" type="submit" name="action">Submit</button><br/>
            </div>


            {/*<!--Avatar Content -->*/}
            <ul className="collection">
                <li className = "collection-item avatar">
                  <img src="img/aJolie.png" alt="" className="circle"/>
                  <span className="title">Angelina Jolie</span>
                  <p>January 25, 2017:  7:00pm</p>
                  <p>Rated Atlas Shrugged five stars!</p>
                </li>

                <li className = "collection-item avatar">
                  <img src="img/bPitt.png" alt="" className="circle"/>
                  <span className="title">Brad Pitt</span>
                  <p>January 21, 2017:  3:31pm</p>
                  <p>My new ambition is to become a steele tycoon!</p>
                </li>

                <li className = "collection-item avatar">
                  <img src="img/aJolie.png" alt="" className="circle"/>
                  <span className="title">Angelina Jolie</span>
                  <p>January 17, 2017:  4:35pm</p>
                  <p>I can't believe the main character sleeps with a married man!</p>
                </li>
            </ul>
  
    </div>
		);
	}

}

export default News