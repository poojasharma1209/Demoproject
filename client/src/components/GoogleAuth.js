import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({  // this initialize the GoogleAuth object.
                clientId: '716891294885-64tnbll5vljecl9rroa9mgmr5qqkjc7j.apps.googleusercontent.com',
                scope: 'email'
            }).then( () => {
                this.auth = window.gapi.auth2.getAuthInstance(); // returns the GoogleAuth object. we can use GoogleAuth's methods with this object.
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }


    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null;
        } else if(this.props.isSignedIn) {
            return (
              <button onClick={this.onSignOutClick} className="ui red google button">
                  <i className="google icon" />
                  Sign Out
              </button>  
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                        Sign In with google
                </button>
            )
        }
    }

    render() {
        return <div style = {{'margin' : '100px 0px' }} >{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
