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
  <li>
    <Link to={`/detail/${props.id}`}>
      <p className="title">{props.title}</p>
      <p className="username">{props.username}</p>
      <p className="createDate">{props.createDate}</p>
      <p className="views">{props.views}</p>
    </Link>
  </li>
);
