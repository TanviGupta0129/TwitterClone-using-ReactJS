import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search'
import {TwitterTweetEmbed, TwitterTimelineEmbed,TwitterShareButton} from "react-twitter-embed"

function Widgets() {
    return (
        <div className="Widgets">
            
            <h2>Widgets</h2>
 
          <div className="Widgets_Input">

           <SearchIcon className="Widgets_SearchIcon" />
           <input placeholder="Search Twitter" type="text"></input>
          </div>

          <div className="Widgets_Container">
              <h2>What's Happening?</h2>

              {/* <TwitterTweetEmbed tweetId = {"1294698453986140161"}  /> */}

              <TwitterTimelineEmbed sourceType = "profile"  screenName="TanviGupta__"  options = {{height:400}}  />

              {/* <TwitterShareButton 
               url={"https://kenkioria.herokuapp.com/"}
               options = {{text: "Check out my portfolio", via: "TanviGupta__"}}/> */}

          </div>
        </div>
    )
}

export default Widgets
