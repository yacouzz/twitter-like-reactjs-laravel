//ALL AUTH FUNCTIONS HERE
export const deleteCurrentUser =(userToDelete,currentUser)=>{
    var headers = {
        'Content-Type': 'application/json',
         'Accept' : 'application/json',
         'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        //'Authorization' : 'Bearer '+userToDelete.token,
            }
    axios.post('/api/logout',{"headers":headers}).then(response => {
        //console.log(response)
        console.log(response)
        console.log('its working')
    }).catch(err=>{
        console.log(err);
        if(err.response.status==422){
           console.log('its not working')
        }else{
          console.log('ou nooon')
        }
    })

    currentUser = {user:null, token:null}
    return (currentUser);

}
