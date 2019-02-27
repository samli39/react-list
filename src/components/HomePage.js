import React from 'react';
import PropTypes from 'prop-types';
import List from './List';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		const { array } = props;
		this.state = {
			active: 0,
			array,
		};
	}

	setActive = (active) => {
		this.setState(() => ({ active }));
	};

	render() {
		const { array, active } = this.state;
		const { setActive } = this;
		let keys = 1;

		return (
			<div>
				<List item={array[active]} />
				{array.map((e, index) => (
					<span
						role="presentation"
						key={keys++}
						onClick={() => setActive(index)}
					>
						{index}
					</span>
				))}
			</div>
		);
	}
}

HomePage.propTypes = {
	array: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default HomePage;
