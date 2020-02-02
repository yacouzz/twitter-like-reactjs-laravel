import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Main from './Main';
import Navbar from './Navbar'
import Login from './src/login/Login'
import Register from './src/register/Register'
import {connect} from 'react-redux';
import { setCurrentUser } from './src/redux/user/user.actions';


class App extends React.Component {

    constructor(props){
        super(props);

        this.createUser=this.createUser.bind(this);
        this.setUser=this.setUser.bind(this);
    }

    createUser(user,tok){
        const userToCreate= {tok,user};
        console.log(userToCreate);
    }

    setUser(){
        const {setCurrentUser}=this.props;

        if(!this.props.user.user.currentUser.token){

            if(document.querySelector('meta[name="token-ta3i"]')){

                var toke = document.querySelector('meta[name="token-ta3i"]').getAttribute('content');
                setCurrentUser({token:toke, user:null});

            }else {
                console.log('nothing');
            }
        }

        if(window.location.pathname=='/'){
            if(this.props.user.user.currentUser.token && !this.props.user.user.currentUser.user){

                const to = this.props.user.user.currentUser.token;
                 var headers = {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
                'Authorization' : 'Bearer '+to,
                    }

            axios.get('http://127.0.0.1:8000/api/details',{"headers" : headers})
            .then(res =>
                //console.log(res.data)
                setCurrentUser({token:to,user:res.data.success})
                );
            }
        }
    }


  render(){
    //console.log(window.location.pathname);
    this.setUser();
    console.log(this.props);
    return (
      <div className="App">
       <Navbar/>

        <Switch>
            <Route exact path="/" render={()=>!this.props.user.user.currentUser.user ? (<Redirect to='/login'/>) :(<Main />) }></Route>
            <Route exact path="/login" /*component={Login}*/ render={()=>this.props.user.user.currentUser.user ? (<Redirect to='/'/>) :(<Login />) }></Route>
            <Route path="/register" render={()=>this.props.user.user.currentUser.user ? (<Redirect to='/'/>) :(<Register />) }></Route>
            <Route path="*" render={()=>(<Redirect to='/'/>)}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (currentUser) => ({
    user:currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  })


export default connect(mapStateToProps,mapDispatchToProps)(App);
