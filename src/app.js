import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';

const array = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]];
const jsx = (
	<div>
		<HomePage array={array} />
	</div>
);

ReactDOM.render(jsx, document.getElementById('app'));
