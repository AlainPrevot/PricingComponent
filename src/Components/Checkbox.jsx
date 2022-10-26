import '../Sass/Checkbox.sass';
import PropTypes from 'prop-types';

export const Checkbox = ({ onMode }) => {
	return (
		<div className='container'>
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
