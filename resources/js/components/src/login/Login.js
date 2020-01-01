import React from 'react';
//import {setCurrentUser} from '../redux/user/user.utils'
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/user.actions';



class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            remember:true,
            loading:false,
            error:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handlePassChange=this.handlePassChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

        //console.log(this.props)

    }

    handleChange(e) {
        this.setState({
            email: e.target.value,

        })

      }
      handlePassChange(e) {
        this.setState({
            password: e.target.value,

        })

      }


      handleSubmit(e) {
        this.setState({
            loading:true,
            errors:[]
        })
      e.preventDefault();

     /* const {email, password, remember}= this.state;

      console.log(email)
      console.log(password)
      console.log(remember)
      console.log(this.state)
*/
      var headers = {
        'Content-Type': 'application/json',

    }


      const {setCurrentUser}=this.props;

      axios.post('/api/login',{
          email: this.state.email,
          password:this.state.password,
          remember:this.state.remember
      },{"headers" : headers}).then(response => {
          //console.log(response)
          console.log(response)
          setCurrentUser(response.data);
      }).catch(err=>{
          console.log(err);
          this.setState({
              loading:false
          })
          if(err.response.status==422){
             console.log('its working')
          }else{
            console.log('ou nooon')
          }
      })
    }

    render(){
        return(
        <>
        <div className="card col-md-4 offset-md-4 mt-5 py-3 px-2">
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password"  value={this.state.password} onChange={this.handlePassChange}  className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button disabled={!this.state.email || !this.state.password || this.state.loading} type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        </>)
    }
}


const mapStateToProps = (currentUser) => ({
    user:currentUser
})
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  })

export default connect(mapStateToProps,mapDispatchToProps)(Login);
