import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

class App extends Component {
    renderButton() {
        if(this.props.auth) {
            return <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
        } else {
            return <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
        }
        
    }
    renderHeader() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item mr-4"><Link to="/">Home</Link></li>
                            <li className="nav-item mr-4"><Link to="/post">Post a Comment</Link></li>
                            <li className="nav-item mr-4">{this.renderButton()}</li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
    render() {
        return (
            <div className="container">
                {this.renderHeader()}
                <Route path="/post" component={CommentBox} />
                <Route exact path="/" component={CommentList} />
            </div>
        );   
    }

}
const mapStateToProps = (state, ownProps) => {
    return { auth: state.auth }
};

export default connect(mapStateToProps, actions) (App);