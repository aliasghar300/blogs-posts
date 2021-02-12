import React, { Component } from "react";
import {connect} from "react-redux"
import {fetchPostsAndUser} from "../action/index";
import User from "./User";

class PostLists extends Component {
     
    componentDidMount(){
        this.props.fetchPostsAndUser()
    }
    
    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2> {post.title}</h2>
                            <p> {post.body} </p>
                        </div>
                            <User userId={post.userId} />                
                    </div> 
                </div>
            )
        })
    }

    render(){
        return ( 
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        )
    }
}
const mapStateToProp = state => {
    return {posts: state.posts}} 
export default connect(mapStateToProp,{fetchPostsAndUser})(PostLists) 