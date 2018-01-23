import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComments } from '../actions';
import CommentItem from './CommentItem';
import _ from 'lodash';

class CommentList extends Component {

    componentDidMount() {
        this.props.fetchComments(this.props.postID);
    }
    render() {
        const { comments } = this.props;
        if (!comments) {
            console.log("no comments");
            return (
                <div>There are no comments yet</div>
            )
        }

        return (
            <div className="row">
                {_.map(_.orderBy(comments, ['timestamp'], ['desc']), commentData => {
                    if(!commentData.deleted){
                        return <CommentItem key={commentData.id} commentData={commentData}/>
                    }
                })}
            </div>
        )
    }
}

function mapStateToProps({ comments }) {
    return { comments };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchComments }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);