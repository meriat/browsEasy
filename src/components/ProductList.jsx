import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

var masterProductList= [
  {
    image: 'http://static.zara.net/photos///2018/I/0/1/p/1639/182/601/2/w/1920/1639182601_1_1_1.jpg?ts=1542966859522',
    brand: 'Zara',
    price: '$49.90',
    size: 'S'
  },
  {
    image: 'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/11154392_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$',
    brand: 'Kiria',
    price: '$44.50',
    size: 'S, M'
  },
  {
    image: 'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/11112233_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$',
    brand: 'Guess',
    price: '$148',
    size: 'S, M, L'
  }
];


function ProductList(props) {
  return (
    <div className='container'>
      <style jsx>
        {`

    `}
      </style>
    </div>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array,
};

export default ProductList;