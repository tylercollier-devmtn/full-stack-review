import React, { Component } from 'react';
import Account from './Account';
import axios from 'axios';
import { connect } from 'react-redux';
import { logIn } from '../redux/reducer';

class AccountContainer extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      message: null,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get('/api/user-data').then(response => {
      this.setState({
        loading: false,
      });
      this.props.login(response.data.user);
    }).catch(error => {
      console.log('error', error);
      this.setState({
        message: 'You are unauthorized',
        loading: false,
      });
    });
  }

  render() {
    const { loading, message } = this.state;
    const { user } = this.props;

    return (
      <div className="account-container">
        <h1>Account</h1>
        {loading && <div>Loading...</div>}
        {user && <Account
            name={user.name}
            email={user.email}
            picture={user.picture}
            id={user.auth0_sub}
            amount={Math.floor(100 + Math.random() * 100)}
          />
        }
        {message && <div>{message}</div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  login: logIn
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedAccountContainer = connector(AccountContainer);
export default connectedAccountContainer;
