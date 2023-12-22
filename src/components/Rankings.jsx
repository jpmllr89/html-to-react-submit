
export function Rankings( {data} ){
  return <div>
    <h2>Rankings</h2>
    <ul>
      {data.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </ul>
  </div>

}