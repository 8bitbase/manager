import React, { PropTypes } from 'react';

export default function ScrollingList(props) {
  const { items } = props;
  return (
    <ul className="ScrollingList">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

ScrollingList.propTypes = {
  items: PropTypes.array,
};
