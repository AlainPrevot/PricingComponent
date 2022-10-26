import '../Sass/Title.sass';
import PropTypes from 'prop-types';

export const Title = ({ title }) => {
	return <h2 className='Title'>{title}</h2>;
};

Title.propTypes = {
	title: PropTypes.string.isRequired,
};
