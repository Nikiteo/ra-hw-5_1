import React from 'react';

export default function Card(props) {
  return (
    <div className="card">
      {props.img && <img src={props.img} className="card-img-top" alt="some" />}
      <div className="card-body">
        { props.title && <h5 className="card-title">{props.title}</h5> }
        { props.children }
        { props.link && <a href={props.link} className="btn btn-primary">{props.link_text}</a> }
      </div>
    </div>
  );
}