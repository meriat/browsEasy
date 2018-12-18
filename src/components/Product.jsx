import React from 'react';
import PropTypes from 'prop-types';

function Product(props) {
  return (
    <div>
      <style jsx>
        {`
            .card{
                width: 18em;
                height: 40em;
                margin-top:2em;
            }
            `}
      </style>
      <div className='col-md-4'>
            
        <div className="card" >
          <img className="card-img-top" src={props.image} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">Brand: {props.brand}</p>
            <p className="card-text">Price: {props.price}</p>
            <p className="card-text">Size: {props.size.join(' ')}</p>
            <a href="#" className="btn btn-primary">See details</a>
          </div>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  image: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  size: PropTypes.array,
};

export default Product;

