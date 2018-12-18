import React from 'react';
import Product from './Product';
import Header from './Header';
import PropTypes from 'prop-types';

function ProductList(props) {
  return ( 
    <div>
      <style global jsx>
        {`
    body{
      background-image: url('  https://i1.wp.com/www.zoewithlove.me/wp-content/uploads/2017/07/yellow-pink-2.jpg?fit=2134%2C2134');
      background-color: #FFB9B7;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
      font-family: 'Fira Mono', monospace;
      }
      .row{
        display: flex;
        align-items: center;
        justify-content: center;
      }
    
    `}
      </style>
      <Header onHandleNav={props.onHandleNav}/>
      <div className='container'>
        <div className='row'>
          {props.productList.map((product,index) =>
            <Product image={product.image}
              brand={product.brand}
              price={product.price}
              size={product.size}
              key={index} />
          )}
        </div>
      </div>
            
    </div>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onHandleNav: PropTypes.func,
};

export default ProductList;

// https://images.unsplash.com/photo-1531948240083-6a7582ab0c93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80
// https://images.pexels.com/photos/1037994/pexels-photo-1037994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260