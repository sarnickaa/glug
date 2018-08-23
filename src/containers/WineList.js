import React from 'react';
import Wine from './Wine.js'

const WineList = props => {
// props = the wine list taken from <Main /> state + wineID setter method, token, axios GET method

  const Wines = props.wines.map((wineData, index) => {
    return (
      <Wine setCurrentFormWineID={props.setCurrentFormWineID} token={props.token} wineRequest={props.wineRequest} key={index} {...wineData} />
      )
  })

  return (
    <div className="TweetList-div">
    {Wines}
    </div>
  )
};

export default WineList
