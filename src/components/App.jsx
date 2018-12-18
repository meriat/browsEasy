import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import ProductList from './ProductList';
import SplashPage from './SplashPage';
import Profile from './Profile';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
      //  masterProductList : [
      //   {
      //     image: 'http://static.zara.net/photos///2018/I/0/1/p/1639/182/601/2/w/1920/1639182601_1_1_1.jpg?ts=1542966859522',
      //     brand: 'Zara',
      //     price: '$49.90',
      //     size: ['S']
      //   },
      //   {
      //     image: 'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/11154392_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$',
      //     brand: 'Kiria',
      //     price: '$44.50',
      //     size: ['S']
      //   },
      //   {
      //     image: 'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/11112233_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$',
      //     brand: 'Guess',
      //     price: '$148',
      //     size:  ['M']
      //   },
      //   {
      //     image: 'http://static.zara.net/photos///2018/I/0/1/p/1639/182/601/2/w/1920/1639182601_1_1_1.jpg?ts=1542966859522',
      //     brand: 'Zara',
      //     price: '$49.90',
      //     size: ['S']
      //   },
      //   {
      //     image: 'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/11112233_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$',
      //     brand: 'Guess',
      //     price: '$148',
      //     size: ['S','L']
      //   }
      // ]
    };
    this.handleDisplay = this.handleDisplay.bind(this);
    this.myFunction = this.myFunction.bind(this);
  }


  handleDisplay() {
  let sizes = 'L';
  return this.state.masterProductList.filter(ele => ele.size.includes(sizes));
  }

    myFunction() {
      console.log("on my function");
      // if (document.getElementById("dropdown").style.display === "none")
      //   document.getElementById("dropdown").style.display = "block";
      // else {
      //   document.getElementById("dropdown").style.display = "none";
      // }
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";

    } else {
      x.className = "topnav";
    }
  }

  render(){
  return (
    <div>
      <style global jsx> {`

        `}
      </style>
      <Switch>
  <Route path='/user' render={() =><ProductList onMyFunction={this.myFunction} productList={this.handleDisplay()} />} />
        <Route exact path='/' component={SplashPage} />
        <Route path='/profile' component={Profile} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}
}

export default App;

