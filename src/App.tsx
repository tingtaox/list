import * as React from "react";
import { ListItemProps } from './components/ListItem';
import { ListView } from './components/ListView';
import { DetailView } from './components/DetailView';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
  }

  public componentDidMount() {
    fetch('/api//users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  public render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={this.withListView} />
            <Route path="/detail/:id" component={DetailView} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

  private withListView = () => {
    return <ListView items={this.data} />;
  }

}
