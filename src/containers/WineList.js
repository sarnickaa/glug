import React from 'react';
import Wine from './Wine.js'

const WineList = props => {
  // props = the tweet list taken from the state object

  const Wines = props.wines.map((wineData, index) => {
//wine(props) = array of objects
    return (
      <Wine key={index} {...wineData} />
      )
  })

  return (
    <div className="TweetList-div">
    {Wines}
    </div>
  )
};

export default WineList
