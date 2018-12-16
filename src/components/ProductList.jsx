import React from 'react';
import Product from './Product';
import Header from './Header';

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
  },
  {
    image: 'http://static.zara.net/photos///2018/I/0/1/p/1639/182/601/2/w/1920/1639182601_1_1_1.jpg?ts=1542966859522',
    brand: 'Zara',
    price: '$49.90',
    size: 'S'
  },
  {
    image: 'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/11112233_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$',
    brand: 'Guess',
    price: '$148',
    size: 'S, M, L'
  }
];


function ProductList() {
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
      <Header/>
      <div className='container'>
        <div className='row'>
          {masterProductList.map((product,index) =>
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

// ProductList.propTypes = {
//   productList: PropTypes.array,
// };

export default ProductList;

// https://images.unsplash.com/photo-1531948240083-6a7582ab0c93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80
// https://images.pexels.com/photos/1037994/pexels-photo-1037994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260