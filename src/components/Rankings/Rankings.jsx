import "./Rankings.css";

export function Rankings({ data }) {
  const top5 = data.sort((a, b) => b.votes - a.votes).slice(0, 5);
  return (
    <>
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
            {top5.map((item) => {
              const classValue = top5.indexOf(item) % 2 === 0 ? "dark" : "light";
              return (
                <tr
                  key={item.name}
                  className={classValue}
                >
                  <td>{item.name}</td>
                  <td>{item.skillset.join(", ")}</td>
                  <td>{item.votes}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}
