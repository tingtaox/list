import * as React from 'react';
import * as classnames from 'classnames';
import { ListItem, ListItemProps } from './ListItem';
import { sortBy, isEqual } from 'lodash';

export interface ListViewProps {
  items: ListItemProps[];
}

export interface ListViewState {
  listItems: JSX.Element[];
}

export class ListView extends React.Component<ListViewProps, ListViewState> {

  constructor(props: ListViewProps) {
    super(props);
    const listItems = this.renderListItems(this.props.items);
    this.state = { listItems };
  }

  public render() {
    const items = this.state.listItems;
    return <ul>{items}</ul>;
  }

  private renderListItems = (items: ListItemProps[]): JSX.Element[] => {
    return items.map(item => {
      return <ListItem key={item.id} {...item}></ListItem>;
    });
  }

  private sortItemsByCreationDate = () => {
    const listItems = sortBy(this.props.items, 'createDate');
    this.setState({ listItems: this.renderListItems(listItems) });
  }

}