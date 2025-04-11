import React, { useEffect, useState } from 'react';

function Cart({ Cartarry }) {
    const [total, settotal] = useState(0);

    useEffect(() => {
        console.log('Cartarry:', Cartarry); // Debugging data
        const calculatedTotal = Cartarry.reduce((acc, item) => {
            const numericPrice = parseFloat(item.price.replace('$', '')) || 0;
            return acc + numericPrice;
        }, 0);
        console.log('Calculated Total:', calculatedTotal); // Debugging total calculation
        settotal(calculatedTotal);
    }, [Cartarry]);

    return (
        <>
            <div className="container-fluid my-4">
                <div className="row g-3">
                    {Cartarry.map((item, index) => (
                        <div className="col-12 col-md-6 col-lg-4" key={index}>
                            <div className="card">
                                <img
                                    src={item.img}
                                    className="card-img-top"
                                    alt={item.title || 'Product Image'}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">
                                        {item.desc} - Some quick example text to build on the card title.
                                    </p>
                                    <h3>{item.price}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {Cartarry.length > 0 ? (
                    <h4>Total: <span>{`$${total.toFixed(2)}`}</span></h4>
                ) : (
                    <h4>No items in the cart</h4>
                )}
            </div>
        </>
    );
}

export default Cart;
