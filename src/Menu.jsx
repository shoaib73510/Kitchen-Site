import React, { useState } from 'react';
import data from './Data';

function Menu({ Cartarry, setCartarry }) {
  const [Foods, setFoods] = useState(data);

  const Category = [...new Set(data.map((item) => item.category))];

  const filterItem = (cat) => {
    const filtered_foods = data.filter((item) => item.category === cat);
    setFoods(filtered_foods);
  };

  const addtoCart = (cartitem) => {
    setCartarry([...Cartarry, cartitem]);
    console.log(Cartarry);
  };

  const removeCart = (item_id) => {
    setCartarry(Cartarry.filter((item) => item.id !== item_id));
  };

  return (
    <>
      <div className="container-fluid d-flex flex-column align-items-center main bg-primary">
        <div className="btn-group my-3">
          {Category.map((item) => (
            <button
              key={item}
              className="btn btn-warning tit"
              onClick={() => filterItem(item)}
            >
              {item}
            </button>
          ))}
          <button className="btn btn-info tit" onClick={() => setFoods(data)}>
            All
          </button>
        </div>

        <div className="container-fluid my-4">
          <div className="row g-3">
            {Foods.map((item) => (
              <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                <div className="card">
                  <img src={item.img} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content. {item.desc}
                    </p>
                    {Cartarry.includes(item) ? (
                      <button
                        className="btn btn-danger"
                        onClick={() => removeCart(item.id)}
                      >
                        Remove from Cart
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={() => addtoCart(item)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
