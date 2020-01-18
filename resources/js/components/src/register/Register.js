import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/user.actions';

class Register extends React.Component{


    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            c_password:'',
            name:''
        }
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handlePassChange=this.handlePassChange.bind(this);
        this.handleCPassChange=this.handleCPassChange.bind(this);
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }


       handleEmailChange(e) {
        this.setState({
            email: e.target.value,

        })

      }

      handleNameChange(e) {
        this.setState({
            name: e.target.value,

        })

      }

      handlePassChange(e) {
        this.setState({
            password: e.target.value,

        })

      }

      handleCPassChange(e) {
        this.setState({
            c_password: e.target.value,

        })

      }

      handleSubmit(e) {
          /*Submit code There ! */

          e.preventDefault();

           var headers = {
             'Content-Type': 'application/json',

         }

           const {setCurrentUser}=this.props;

           axios.post('/api/register',{
               name:this.state.name,
               email: this.state.email,
               password:this.state.password,
               c_password:this.state.c_password,

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
                    <label htmlFor="exampleInputPassword1">name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}  className="form-control" id="exampleInputPassword1" placeholder="Enter name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name="password"  value={this.state.password} onChange={this.handlePassChange}  className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name="c_password"  value={this.state.c_password} onChange={this.handleCPassChange}  className="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
                </div>

                <button disabled={!this.state.email || !this.state.password || !this.state.c_password || !this.state.name} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

        </>
        )
    }
}

const mapStateToProps = (currentUser) => ({
    user:currentUser
})
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  })


export default connect(mapStateToProps,mapDispatchToProps)(Register);
