import '../Sass/Pricing.sass';
import PropTypes from 'prop-types';

export const Pricing = ({ value }) => {
	return (
		<div className='card--pricing'>
			<span>$</span>
			<h1>{value}</h1>
		</div>
	);
};

Pricing.propTypes = {
	value: PropTypes.number.isRequired,
};
