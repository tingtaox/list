import * as React from 'react';
import * as classnames from 'classnames';

export interface ListHeaderProps {
  className?: string | string[];
  sort: () => void;
}

export class ListHeader extends React.Component<ListHeaderProps, any> {

  constructor(props: ListHeaderProps) {
    super(props);
  }

  public render() {
    const className = classnames('list-header', this.props.className);

    return (
      <div className={className}>
        <span className="title">Title</span>
        <span className="creator">Creator</span>
        <span className="createDate" onClick={this.props.sort}>Create Date</span>
        <span className="views">Views</span>
      </div>
    );
  }

}
