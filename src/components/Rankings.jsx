import { Component } from "react";
export class Rankings extends Component{
  render(){
    return <>
    <section id="character-ratings">
    <h2>Rankings</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>Skillset</th>
        <th>Votes</th>
      </tr>
      {this.props.data.map((item) => {
        return(
          <tr key={item.name} className={this.props.data.indexOf(item)%2===0 ? "light" : "dark"}>
            <th>{item.name}</th>
            <th>{item.skillset}</th>
            <th>{item.votes}</th>
          </tr>
        )
      })}
    </table>
  </section>
  </>
  }

}