import * as React from 'react';
import { Modal } from 'react-bootstrap';

export class Banner extends React.Component<any, any> {

  public render() {
    return (
      <div>
        <a className="signin" onClick={this.showSigninModal}>Sign in</a>
        <span>Or</span>
        <a className="signup" onClick={this.showSignupModal}>Sign up</a>
      </div>
    );
  }

  private showSigninModal = () => {

  }

  private showSignupModal = () => {}

}


