import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Main from './Main';
import Navbar from './Navbar'
import Login from './src/login/Login'
import Register from './src/register/Register'
import {connect} from 'react-redux';



class App extends React.Component {



  render(){
    console.log(this.props);

    return (
      <div className="App">
       <Navbar/>

        <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route exact path="/login" /*component={Login}*/ render={()=>this.props.user.user.currentUser.user ? (<Redirect to='/'/>) :(<Login />) }></Route>
            <Route path="/register" render={()=>this.props.user.user.currentUser.user ? (<Redirect to='/'/>) :(<Register />) }></Route>
        </Switch>
      </div>
    );
  }
}
/*const mapStateToProps=state=>{
  console.log(state)
  return {
    currentUser: selectCurrentUser(state)
  }

}*/

const mapStateToProps = (currentUser) => ({
    user:currentUser
})

export default connect(mapStateToProps)(App);
