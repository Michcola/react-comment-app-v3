import React,{Component} from 'react'
import Comment from './Comment'
import { PropTypes } from "prop-types";

class CommentList extends Component{
    static propTypes = {
        onDeleteComment:PropTypes.func,
        comments:PropTypes.array
    }
    static defaultProps={
        comments:[]
    }
    handleDeleteComment(index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
    }
    render(){

        return (
            <div>
                {this.props.comments.map((comment,i)=>
                <Comment 
                onDeleteComment={this.handleDeleteComment.bind(this)}
                key={i}
                index={i}
                 comment={comment}
                 />)}
            </div>
        )
    }
}

export default CommentList