import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


class Main extends React.Component {

    //COMPONENT CONSTRUCTOR
    constructor(props){
        super(props);
        this.state={
                content:'',
                posts:[],
               // loading: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderPosts = this.renderPosts.bind(this);
        this.getPosts= this.getPosts.bind(this);

    }

    //GET POSTS METHOD
    getPosts(){
           // this.setState({loading:true});
           var headers = {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
            'Authorization' : 'Bearer '+this.props.user.user.currentUser.token,
                }

            axios.get('http://localhost:8000/api/tweets',{"headers" : headers}).then((
                response
            )=>
            this.setState({
                posts:[...response.data.posts],
               // loading:false
            })
            );
    }


    componentWillMount(){
        this.getPosts();
    }
    //LAUNCHING METHODS WHEN COMPONENT MOUNT
    componentDidMount(){

            Echo.channel('laravel_database_new-post').listen('TweetCreated',(e)=>console.log('ICI PUSHER BROTHER'));
    }

    //HANDLE THE SUBMIT OF THE FORM
    handleSubmit(e){
        e.preventDefault();

        var headers = {


            'Authorization' : 'Bearer '+this.props.user.user.currentUser.token,
                }

        axios.post('http://localhost:8000/api/tweets/add',{
            content:this.state.content
        },{"headers" :headers})
        .then(response=>{
            console.log(response);

            this.setState({
            posts:[...this.state.posts,response.data],
            content:''
        });


    });
}


  /*  postData(){
        axios.post('/tweets',{
            content: this.state.content
        });
    }
*/

    //HANDLE CHANGE
    handleChange(e){
        this.setState({
      content: e.target.value
    });
    }


    renderPosts()  {

        return this.state.posts.map(post=> (
         <div key={post.id} className="media">
                 <div className="media-left">

             </div>
             <div className="media-body">
                 <div className="user">
         <a  href="#">
         <b>{post.user.name}</b>
         </a> {' '}
         - {post.created_at}
             </div>
        <p>{post.content}</p>
        </div>
         </div>
         ));
         }

    render(){
        return(<>
            <div className="container mt-5">
                <div className="row justify-content-center">


                <div className="col-md-6">
                        <div className="card">
                        <div className="card-header">Write your tweet</div>
                        <div className="card-body">
                        <div className="form-group">
                            <form onSubmit={this.handleSubmit}>

                        <input type="string" placeholder="Whats up!!" className="form-control mb-4" value={this.state.content} onChange={this.handleChange} ></input>
                         <input type="submit" value="Tweet !" className="form-control" style={{'width':'30%','float':'right'}}></input>

                            </form>
                            </div>
                                   </div>
                              </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card pb-2 px-1">
                            <div className="card-header">Recent Post</div>
                                <div className="body p-2">
                            { this.renderPosts() }
                            </div>
                            <input type="submit" value="voir plus" className="form-control"></input>
                            </div>

                        </div>
                    </div>
                </div>

        </>);
    }

}
const mapStateToProps = (currentUser) => ({
    user:currentUser
})
export default connect(mapStateToProps)(Main);
