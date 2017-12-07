import * as React from 'react';
import { Signup } from './Signup';
import { Signin } from './Signin';

export enum SIGNING_VIEW { SIGNIN, SIGNUP }

interface SignState {
  isSignin: boolean;
}

export class Signing extends React.Component<void, SignState> {

  constructor() {
    super(null);
    this.state = { isSignin: true };
  }

  public render() {
    const view = this.state.isSignin ?
      <Signin switchView={this.toggle} /> : <Signup switchView={this.toggle} />;
    return <div>{view}</div>;
  }

  private toggle = (view: SIGNING_VIEW) => {
    this.setState({ isSignin: SIGNING_VIEW.SIGNIN === view });
  }

}


