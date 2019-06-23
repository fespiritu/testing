import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        };

        // this.handleChange = this.handleChange.bind(this);
    }

    
    handleChange = (event) => {
        this.setState({ comment: event.target.value});
    }

 
    handleSubmit = event => {
        event.preventDefault();
        // Call an action creator
        this.props.saveComment(this.state.comment);
        // save the comment

        this.setState({ comment: ''});
    }
    render() {
        return (
            <React.Fragment>
                <h4>Comment Box</h4>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea rows="5" cols="100" value={this.state.comment} onChange={this.handleChange} />
                    <div>
                        <button type="submit" className="btn btn-primary">Submit Component</button>&nbsp;
                        <button type="button" id="btnFetchCommments" onClick={this.props.fetchComments} className="btn btn-secondary">Fetch Comments</button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}


export default connect(null, actions) (requireAuth(CommentBox));
