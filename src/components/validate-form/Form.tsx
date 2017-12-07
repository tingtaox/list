import * as React from 'react';
import { isEmpty } from 'lodash';

interface FormProps {
  children: JSX.Element[];
}

export class Form extends React.Component<FormProps, void> {

  private validators: any;

  // recursively scan all child elements. save Input, Select, RadioButton/Checkbox, Button in the component. once submitting the form, run validators for each input, and set error message for them
  constructor(props: FormProps) {
    super(props);

    if (isEmpty(props.children)) {
      props.children.forEach(child => {

      });
    }

  }

}
