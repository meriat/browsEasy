import React from 'react';
import PropTypes from 'prop-types';

function Product(props) {
    return(
        <div className='conatiner'>
            <div className="card" style="width: 18rem;">
            <img className="card-img-top" src="{props.image}" alt="Card image cap" />
            <div className="card-body">
                <p className="card-text">Brand: {props.brand}</p>
                <p className="card-text">Price: {props.price}</p>
                <p className="card-text">Size: {props.size}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
      );
    }

Product.propTypes = {
  image: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  size: PropTypes.string,
};

export default Product;

