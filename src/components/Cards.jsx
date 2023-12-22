import { Component } from 'react';

export class Cards extends Component{
  render(){
    return (<div id="character-cards">
      {this.props.items.map(item => {
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