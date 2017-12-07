import * as React from 'react';
import * as classnames from 'classnames';

export interface InputProps {
  classes?: string | string[];
  handleChange: (value: string) => void;
  value: string;
}

export class Input extends React.Component<InputProps, any> {

  public render() {
    const classes = classnames('form-control');
    return (
      <input
        type="text"
        className={classes}
        value={this.props.value}
        onInput={this.handleInput}
      />
    );
  }

  private handleInput = (event: any) => {
    this.props.handleChange(event.target.value);
  }

}