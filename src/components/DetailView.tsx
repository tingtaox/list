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
      <p className="detailHeader">Hello detail {props.match.params.id}</p>
      <p><Link to="/">Back</Link></p>
    </div>
  );
};
