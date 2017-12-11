import * as React from 'react';
import * as classnames from 'classnames';

export interface ButtonProps {
  children?: string | JSX.Element;   // it should be button text
  classes?: string | string[];
  onClick: () => void;
}

export const DefaultButton = (props: ButtonProps) => {
  const classes = classnames("btn", props.classes);
  return (
    <button className={classes} onClick={props.onClick}>{props.children}</button>
  );
}

export const PrimaryButton = (props: ButtonProps) => {
  const classes = classnames("btn", "btn-primary", props.classes);
  return (
    <button className={classes} onClick={props.onClick}>{props.children}</button>
  );
}

export const SuccessButton = (props: ButtonProps) => {
  const classes = classnames("btn", "btn-success", props.classes);
  return (
    <button className={classes} onClick={props.onClick}>{props.children}</button>
  );
}

export const DangerButton = (props: ButtonProps) => {
  const classes = classnames("btn", "btn-danger", props.classes);
  return (
    <button className={classes} onClick={props.onClick}>{props.children}</button>
  );
}