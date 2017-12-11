import * as React from 'react';
import * as classnames from 'classnames';

export interface DropdownItemProps {
  children?: string | JSX.Element;
  onClick: () => void;
}

export const DropdownItem = () => {
  return (
    <li onClick={this.props.onClick}>
      <a>{this.props.children}</a>
    </li>
  );
}
