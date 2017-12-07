import * as React from "react";
import { ListItemProps } from './components/list/ListItem';
import { ListView } from './components/list/ListView';
import { DetailView } from './components/list/DetailView';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Input, InputProps } from './components/input/Input';

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
    this.state = { value: null };
  }

  public componentDidMount() {
    fetch('/api//users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  public render() {

    const props: InputProps = {
      value: this.state.value,
      handleChange: this.onInputChange
    };

    return (
      <div>
        {/* <BrowserRouter>
          <Switch>
            <Route exact path="/" component={this.withListView} />
            <Route path="/detail/:id" component={DetailView} />
          </Switch>
        </BrowserRouter> */}
        <Input {...props} />
        <span>{this.state.value}</span>
      </div>
    );
  }

  private onInputChange = (value: string) => {
    this.setState({ value });
  }

  private withListView = () => {
    return <ListView items={this.data} />;
  }

}
