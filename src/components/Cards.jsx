import { Component } from 'react';
import './Cards.css'
export class Cards extends Component{
  render(){
    const sortedItems = this.props.items.sort((a,b) => b.name - a.name);
    return (<div id="character-cards">
      {sortedItems.map(item => {
        return(
          <div key={item.name} className="card">
            <div className="card-titles">
              <h3>{item.name}</h3>
              <h4>{item.nickName}</h4>
            </div>
            <img src={item.imageUrl} alt="" />
            <p>{item.background}</p>
          </div>
        )
      })}
    </div>)
  }
}