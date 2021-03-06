import React from 'react'
import CardA from './CardA'
import CardB from './CardB'
import CardC from './CardC'

class CardsCombined extends React.Component {
  
  render () {
    return (
      <React.Fragment>
        <div className='cardsCombined'>
          <div className="cardExternal cardA"><CardA></CardA></div>
          <div className="cardExternal cardB"><CardB></CardB></div>
          <div className="cardExternal cardC"><CardC></CardC></div>
        </div>
      </React.Fragment>
    )
  }
}

export default CardsCombined