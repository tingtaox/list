import * as React from 'react';

export interface ListItemProps {
  title: string;
  username: string;
  createDate: number;
  views: number;
}

export const ListItem = (props: ListItemProps) => (
  <li>
    <span className="title">Title</span>
    <span className="username">Username</span>
    <span className="createDate">CreationDate</span>
    <span className="views">Views</span>
  </li>
);
