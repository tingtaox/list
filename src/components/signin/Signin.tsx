import * as React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Input } from '../validate-form/Input';
import { SIGNING_VIEW } from './Signing';

interface SigninState {
  username: string;
  password: string;
}

interface SigninProps {
  switchView: (view: SIGNING_VIEW) => void;
}

export class Signin extends React.Component<SigninProps, SigninState> {

  constructor(props: SigninProps) {
    super(props);
    this.state = { username: null, password: null };
  }

  public render() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Sign up</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <label htmlFor="username">Username</label>
            <Input
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.onInputChange}
              placeholder="Enter your username"
              validators={[this.requiredValidator]}
              autofocus={true}
            />

            <label htmlFor="password">Password</label>
            <Input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.onInputChange}
              placeholder="Enter your password"
              validators={[this.requiredValidator]}
            />

            <a onClick={this.switchToSignup}>Already have an account? Sign in.</a>
            <button onClick={this.signin}>Submit</button>
          </Modal.Body>
        </Modal.Dialog>
      </div>

    );
  }

  private switchToSignup = () => {
    this.props.switchView(SIGNING_VIEW.SIGNUP);
  }

  private onInputChange = (value: string, name: string) => {
    this.setState({ [name as any]: value });
  }

  private requiredValidator = (value: string) => {
    if (value !== null && value.trim() !== '') {
      return <span>This field is required</span>
    }
  }

  private signin = () => {
    // do nothing
  }

}
