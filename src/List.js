function List({ people }) {
  return (
    <>
      {
        people.map(person => {
          const { name, image, id, age } = person;
          return (
            <div className="list-item" key={id}>
              <img src={image} alt={name} />
              <div className="item-defination">
                <h3>{name}</h3>
                <p>{age} years</p>
              </div>
            </div>
          )
        })
      }
    </>
  )
};

export default List;