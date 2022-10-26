import PropTypes from 'prop-types';
import { Card } from '../Components';
import '../Sass/ContainerCard.sass';

export const ContainerCard = ({ plan }) => {
	const data = [
		{
			id: 1,
			title: 'Basic',
			pricing: 19.99,
			storage: 500,
			memory: 3,
			users: 2,
			theme: 'secundary',
		},
		{
			id: 2,
			title: 'Professional',
			pricing: 24.99,
			storage: 1,
			memory: 10,
			users: 5,
			theme: 'primary',
		},
		{
			id: 3,
			title: 'Master',
			pricing: 39.99,
			storage: 2,
			memory: 20,
			users: 10,
			theme: 'secundary',
		},
	];

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
