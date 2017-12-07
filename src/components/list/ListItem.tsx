import * as React from 'react';
import { Link } from 'react-router-dom';

export interface ListItemProps {
  id: string;
  title: string;
  username: string;
  createDate: number;
  views: number;
}

export const ListItem = (props: ListItemProps) => (
  <li className="listRow">
    <Link to={`/detail/${props.id}`}>
      <a className="title">{props.title}</a>
      <span className="username">{props.username}</span>
      <span className="createDate">{props.createDate}</span>
      <span className="views">{props.views}</span>
    </Link>
  </li>
);
