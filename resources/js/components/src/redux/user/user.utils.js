//ALL AUTH FUNCTIONS HERE
export const setCurrentUser = (email, password, remember)=>{
    var headers = {
        'Content-Type': 'application/json',

    }

      axios.post('/api/login',{
          email: email,
          password:password,
          remember:remember
      },{"headers" : headers}).then(response => {
          //console.log(response)
          console.log(response)
          return {user:response.data.user, token: response.data.success};
      }).catch(err=>{
          console.log(err);

          if(err.response.status==422){
             console.log('its working')
          }else{
            console.log('ou nooon')
          }
      })

     //must return the user and token
}
