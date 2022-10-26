import PropTypes from 'prop-types';
import { Card } from '../Components';
import '../Sass/ContainerCard.sass';
import data from '../Data/Data.js';

export const ContainerCard = ({ plan }) => {
	return (
		<div className='container--card'>
			{data.map(data => (
				<Card
					key={data.id}
					title={data.title}
					pricing={data.pricing}
					storage={data.storage}
					memory={data.memory}
					users={data.users}
					theme={data.theme}
					plane={plan}
				/>
			))}
		</div>
	);
};

ContainerCard.propTypes = {
	plan: PropTypes.string.isRequired,
};
