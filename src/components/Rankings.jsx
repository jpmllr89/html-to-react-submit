
export function Rankings( {data} ){
  const top4 = data.sort((a,b) => b.votes - a.votes).slice(0,4);
  return <>
    <section id="character-ratings">
    <h2>Rankings</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>Skillset</th>
        <th>Votes</th>
      </tr>
      {top4.map((item) => {
        return(
          <tr key={item.name} className={top4.indexOf(item)%2===0 ? "light" : "dark"}>
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
