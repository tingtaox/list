import * as React from 'react';
import * as classnames from 'classnames';
import { ListItem, ListItemProps } from './ListItem';
import { sortBy, isEqual } from 'lodash';

export interface ThreadListProps {
  items: ListItemProps[];
}

export interface ThreadListState {
  listItems: JSX.Element[];
}

export class ThreadListProps extends React.Component<ThreadListProps, ThreadListState> {

  constructor(props: ThreadListProps) {
    super(props);
    this.state = { listItems: null };
  }

  public render() {
    const items = this.state.listItems;

    return (
      <div>
        <div>

          <ul>
            {items}
          </ul>
        </div>

      </div>
    );
  }

  public componentWillReceiveProps(nextProps: ThreadListProps) {
    if (!isEqual(nextProps.items, this.props.items)) {
      const listItems = this.renderListItems(nextProps.items);
      this.setState({ listItems: listItems });
    }
  }

  public componentWillUpdate(nextProps: ThreadListProps) {
    return !isEqual(nextProps.items, this.props.items);
  }

  private renderListItems = (items: ListItemProps[]): JSX.Element[] => {
    return items.map(item => {
      return <ListItem {...item}></ListItem>;
    });
  }

  private sortItemsByCreationDate = () => {
    const listItems = sortBy(this.props.items, 'createDate');
    this.setState({ listItems: this.renderListItems(listItems) });
  }

}