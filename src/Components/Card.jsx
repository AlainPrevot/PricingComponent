import PropTypes from 'prop-types';
import { Description } from './Description';
import { Pricing } from './Pricing';
import '../Sass/Card.sass';
import { usePlan } from '../Hooks/usePlan';

export const Card = ({
	title,
	pricing,
	storage,
	users,
	memory,
	theme,
	plane,
}) => {
	const { newPricing } = usePlan(pricing, plane);

	return (
		<div className='card' data-theme={theme}>
			<h2>{title}</h2>
			<Pricing value={newPricing} />
			<Description Storage={storage} Memory={memory} Users={users} />
			<button className='card--button'>LEARN MORE</button>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string.isRequired,
	pricing: PropTypes.number.isRequired,
	storage: PropTypes.number.isRequired,
	memory: PropTypes.number.isRequired,
	users: PropTypes.number.isRequired,
	theme: PropTypes.string.isRequired,
	plane: PropTypes.string.isRequired,
};
