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
    this.myFunction = this.myFunction.bind(this);
  }


  handleDisplay() {
    let sizes = 'S';
    return this.state.products.filter(ele => ele.size.includes(sizes));
  }

  handleNav() {
    console.log('on my function');
    // if (document.getElementById("dropdown").style.display === "none")
    //   document.getElementById("dropdown").style.display = "block";
    // else {
    //   document.getElementById("dropdown").style.display = "none";
    // }
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';

    } else {
      x.className = 'topnav';
    }
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
          <Route path='/user' render={() =><ProductList onHandleNav={this.handleNav} productList={this.handleDisplay()} />} />
          <Route exact path='/' component={SplashPage} />
          <Route path='/profile' component={Profile} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;

