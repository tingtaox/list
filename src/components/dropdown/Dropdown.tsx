import * as React from 'react';
import { DefaultButton } from '../button/Buttons';
import * as classnames from 'classnames';

export interface DropdownProps {
  buttonText: string;
  buttonClass?: string;
  children?: JSX.Element[];
}

export interface DropdownState {
  isOpen: boolean;
}

export class Dropdown extends React.Component<DropdownProps, DropdownState> {

  constructor(props: DropdownProps) {
    super(props);
    this.state = { isOpen: false };
  }

  public render() {
    const dropdownClass = classnames('dropdown', this.state.isOpen ? 'open' : '');
    return (
      <div className={dropdownClass}>
        <DefaultButton onClick={this.toggleItems} classes="dropdown-toggle">{this.props.buttonText}</DefaultButton>
        {this.renderDropdownItems}
      </div>
    );
  }

  private renderDropdownItems() {
    const classes = classnames('item-container');
    if (!this.state.isOpen) {
      return null;
    } else {
      return (
        <div className={classes}>
          {this.props.children}
        </div>
      );
    }
  }

  private toggleItems = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

}

