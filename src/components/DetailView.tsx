import * as React from "react";
import { Link } from 'react-router-dom';

export interface DetailViewProps {
  match: {
    params: {
      id: string;
    }
  }
}

export const DetailView = (props: DetailViewProps) => {
  return (
    <div>
      <span>Hello detail {props.match.params.id}</span>
      <Link to="/">Back</Link>
    </div>
  );
};
