// import PropTypes from 'prop-types';

// Cards.propTypes = {
//   name: PropTypes.string,
//   nickName: PropTypes.string,
//   imageUrl: PropTypes.string,
//   background: PropTypes.string
// }

export function Cards( { items } ){
  return (<div id="character-cards">
    {items.map(item => {
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

