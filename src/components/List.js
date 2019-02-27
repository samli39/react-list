import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
	const { item } = props;
	return item.map((num, index) => <div key={index}>{num}</div>);
};

export default List;
