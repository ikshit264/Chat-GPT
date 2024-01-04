import React from 'react'
import Google from "../../assets/google.png";
import Dropbox from "../../assets/dropbox.png";
import Slack from "../../assets/slack.png";
import Shopify from "../../assets/shopify.png";
import Atlassian from "../../assets/atlassian.png";

const Logos = () => {
  return (
    <div>
      <div className="flex ml-4 mr-0 sm:justify-around sm:mx-0">
        <div className="logos p-1">
          <img src={Google} alt="" />
        </div>
        <div className="logos p-1">
          <img src={Shopify} alt="" />
        </div>
        <div className="logos p-1">
          <img src={Dropbox} alt="" />
        </div>
        <div className="logos p-1">
          <img src={Slack} alt="" />
        </div>
        <div className="logos p-1">
          <img src={Atlassian} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Logos
