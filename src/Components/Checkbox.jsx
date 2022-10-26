import PropTypes from 'prop-types';
import '../Sass/Checkbox.sass';

export const Checkbox = ({ onMode }) => {
	return (
		<div className='container--checkbox'>
			<span>Annually</span>
			<div className='checkbox'>
				<input type='checkbox' id='checkbox' onChange={() => onMode()} />
				<label htmlFor='checkbox'></label>
			</div>
			<span>Monthly</span>
		</div>
	);
};

Checkbox.propTypes = {
	onMode: PropTypes.func.isRequired,
};
