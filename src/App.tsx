import * as React from "react";
import { ListItemProps } from './components/list/ListItem';
import { ListView } from './components/list/ListView';
import { DetailView } from './components/list/DetailView';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Input, InputProps } from './components/input/Input';

import { PrimaryButton, SuccessButton, DangerButton } from './components/button/Buttons';

export class App extends React.Component<any, any> {

  private data: ListItemProps[] = [
    {
      id: 'someUniqueId',
      title: 'my first post',
      username: 'okbanh',
      createDate: 123456,
      views: 12
    },
    {
      id: 'anotherUniqueId',
      title: 'my second post',
      username: 'dearjohn',
      createDate: 827134,
      views: 9
    }
  ];

  constructor(props: any) {
    super(props);
    this.state = { errorMessage: null, value: null };
  }

  public render() {
    const props: InputProps = {
      errorMessage: this.state.errorMessage,
      placeholder: 'Enter text',
      value: this.state.value,
      handleChange: this.onInputChange
    };

    return (
      <div className="form">
        {/* <BrowserRouter>
          <Switch>
            <Route exact path="/" component={this.withListView} />
            <Route path="/detail/:id" component={DetailView} />
          </Switch>
        </BrowserRouter> */}
        <Input {...props} />
        <span>{this.state.value}</span>

        <PrimaryButton onClick={null}>Primary button</PrimaryButton>
        <SuccessButton onClick={null}>Success button</SuccessButton>
        <DangerButton onClick={null}>Danger button</DangerButton>

      </div>
    );
  }

  private onInputChange = (value: string) => {
    const errorMessage = this.validator(value);
    this.setState({ errorMessage, value });
  }

  private validator = (value: string) => {
    if (value.length > 5) {
      return 'String is too long';
    }
  }

  private withListView = () => {
    return <ListView items={this.data} />;
  }

}
