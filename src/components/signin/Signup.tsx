import * as React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Input } from '../validate-form/Input';
import { SIGNING_VIEW } from './Signing';

interface SignupState {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}

interface SignupProps {
  switchView: (view: SIGNING_VIEW) => void;
}

export class Signup extends React.Component<SignupProps, SignupState> {

  constructor(props: SignupProps) {
    super(props);
    this.state = {
      username: null,
      password: null,
      confirmPassword: null,
      email: null
    };
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

            <label htmlFor="email">Email</label>
            <Input
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.onInputChange}
              placeholder="Enter your Email"
              validators={[this.requiredValidator]}
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

            <label htmlFor="confirmPassword">Confirm password</label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={this.state.password}
              onChange={this.onInputChange}
              placeholder="Confirm your password"
              validators={[this.requiredValidator]}
            />

            <a onClick={this.switchToSignin}>Already have an account? Sign in.</a>
            <button onClick={this.signup}>Submit</button>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }

  private onInputChange = (value: string, name: string) => {
    this.setState({ [name as any]: value });
  }

  private signup = () => {
    if (name === 'confirmPassword') {
      this.state.password === this.state.confirmPassword;
    }

    // do nothing
  }

  private switchToSignin = () => {
    this.props.switchView(SIGNING_VIEW.SIGNIN);
  }

  private requiredValidator = (value: string) => {
    if (value !== null && value.trim() !== '') {
      return <span>This field is required</span>
    }
  }

}
