import React, { Component } from 'react';
import { UserService } from '../../services/index';
import './Author.css';

class AuthorComponent extends Component {
  constructor(props) {
    super(props);
    this.title = 'Author Component';
    this.state = {
      userId: this.destructuredPath(props),
      userSelected: {}
    };
  }
  componentDidMount() {
    const { userId } = this.state;
    this.getUserDetail(userId);
  }

  getUserDetail = (idUser) => {
    UserService.getUserById(idUser)
      .then(userInfo => {
        this.setState({
          userSelected: userInfo
        });
      });

  }

  destructuredPath = ({ match: { params: { id } } }) => {
    return parseInt(id);
  }
  companyName = (company) => {
    if(company) {
      const {bs, catchPhrase, name} = company;
      return `${bs} - ${catchPhrase} - ${name}`;
    }
  }
  render() {
    const title = this.title;
    const { userSelected } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <div className="ui grid">
          <div className="sixteen wide column">
            <h3>{userSelected.name}</h3>
            <div className="ui form">
              <div className="two fields">
                <div className="field">
                  <label>Username</label>
                  <input placeholder={userSelected.username} readOnly="" type="text" />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input placeholder={userSelected.email} readOnly="" type="text" />
                </div>
              </div>
            </div>

            <div className="ui form">
              <div className="two fields">
                <div className="field">
                  <label>Phone</label>
                  <input placeholder={userSelected.phone} readOnly="" type="text" />
                </div>
                <div className="field">
                  <label>Website</label>
                  <input placeholder={userSelected.website} readOnly="" type="text" />
                </div>
              </div>
            </div>

            <div className="ui form">
              <div className="sixteen wide field">
                <label>Company</label>
                <input placeholder={this.companyName(userSelected.company)} readOnly="" type="text" />
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default AuthorComponent;
