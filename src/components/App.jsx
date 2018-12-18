import React from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Error404 from './Error404';
import ProductList from './ProductList';
import SplashPage from './SplashPage';
import Profile from './Profile';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products : []
    };
    this.handleDisplay = this.handleDisplay.bind(this);
    // this.handleNav = this.handleNav.bind(this);
  }

  handleDisplay() {
    let sizes = 'S';
    return this.state.products.filter(ele => ele.size.includes(sizes));
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/api/v1/masterProductList')
      .then(response => { 
        this.setState({products: response.data.masterProductList});      
        //  console.log(response.data.masterProductList);  
      });
  }

  render(){
    return (
      <div>
        <style global jsx> {`

        `}
        </style>
        <Switch>
          <Route path='/user' render={() =><ProductList productList={this.handleDisplay()} />} />
          <Route exact path='/' component={SplashPage} />
          <Route path='/profile' component={Profile} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;


  // handleNav() {
  //   console.log('on my function');
  //   var x = document.getElementById('navDemo');
  //   if (x.className.indexOf('w3-show') == -1) {
  //     x.className += ' w3-show';
  //   } else { 
  //     x.className = x.className.replace(' w3-show', '');
  //   }

  // }