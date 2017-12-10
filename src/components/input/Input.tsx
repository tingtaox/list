import * as React from 'react';
import * as classnames from 'classnames';

export interface InputProps {
  classes?: string | string[];
  placeholder?: string;
  handleChange: (value: string) => void;
  errorMessage?: JSX.Element;
  value: string;
}

export class Input extends React.Component<InputProps, any> {

  public render() {
    const classes = classnames('form-control', this.props.errorMessage ? 'has-error' : '');
    return (
      <div>
        <input
          type="text"
          className={classes}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onInput={this.handleInput}
        />
        {this.renderErrorMessage}
      </div>
    );
  }

  private handleInput = (event: any) => {
    this.props.handleChange(event.target.value);
  }

  private renderErrorMessage() {
    if (this.props.errorMessage) {
      const classes = classnames("error-message", "glyphicon", "glyphicon-remove");
      return <div className={classes}>{this.props.errorMessage}</div>
    }
    return null;
  }

}