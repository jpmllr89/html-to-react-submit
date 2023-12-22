
export function TestCard( {items} ){
  return(
    <div>
      <h4>Grocery List</h4>
      <div>
        {items.map(item => <div key={item}>{item}</div>)}
      </div>
    </div>
  )

}

