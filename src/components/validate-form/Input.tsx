import * as React from 'react';
import * as classnames from 'classnames';
import { isEmpty } from 'lodash';

declare type Validator = (value: string) => JSX.Element;

export interface InputProps {
  classname?: string;
  type?: string;
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string, name?: string) => void;
  autofocus?: boolean;
  disabled?: boolean;
  errorMessage?: JSX.Element;
  placeholder?: string;
  validators?: Validator[];
}

export interface InputState {
  errorMessage: JSX.Element;
}

export class Input extends React.Component<InputProps, InputState> {

  constructor() {
    super(null);
    this.state = { errorMessage: null };
  }

  public componentWillMount() {
    const errorMessage = this.validate(this.props.value);
    this.setState({ errorMessage });
  }

  public render() {
    const classNames = classnames('input', this.props.classname);
    const type = this.props.type ? this.props.type : 'text';

    return (
      <div>
        <input
          type={type}
          id={this.props.id}
          name={this.props.name}
          className={classNames}
          autoFocus={this.props.autofocus}
          disabled={this.props.disabled}
          value={this.props.value}
          onInput={this.handleChange}
          placeholder={this.props.placeholder}
        />
        <div className="errorMessage">
          {this.state.errorMessage}
        </div>
      </div>
    );
  }

  private handleChange = (event: any) => {
    this.props.onChange(event.target.value, this.props.name);
  }

  private validate(value: string): JSX.Element {
    if (isEmpty(this.props.validators)) {
      let result: JSX.Element = undefined;
      this.props.validators.forEach(validator => {
        result = validator(value);
      });
      return result;
    }
    return null;
  }
}