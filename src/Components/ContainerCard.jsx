import '../Sass/ContainerCard.sass';
import { Card } from './Card';
import PropTypes from 'prop-types';

export const ContainerCard = ({ plan }) => {
	return (
		<div className='container'>
			<Card
				title={'Basic'}
				pricing={19.99}
				storage={500}
				memory={3}
				users={2}
				theme={'secundary'}
				plane={plan}
			/>
			<Card
				title={'Professional'}
				pricing={24.99}
				storage={1}
				memory={10}
				users={5}
				theme={'primary'}
				plane={plan}
			/>
			<Card
				title={'Master'}
				pricing={39.99}
				storage={2}
				memory={20}
				users={10}
				theme={'secundary'}
				plane={plan}
			/>
		</div>
	);
};

ContainerCard.propTypes = {
	plan: PropTypes.string,
};
