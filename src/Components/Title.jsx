import PropTypes from 'prop-types';
import '../Sass/Title.sass';

export const Title = ({ title }) => {
	return <h2 className='title'>{title}</h2>;
};

Title.propTypes = {
	title: PropTypes.string.isRequired,
};
