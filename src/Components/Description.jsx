import PropTypes from 'prop-types';
import '../Sass/Description.sass';

export const Description = ({ storage, users, memory }) => {
	const sizeStorage = storage.toString().length >= 2 ? 'GB' : 'TB';

	return (
		<ul className='card--description border-top-bottom'>
			<li>
				{storage} {sizeStorage} Storage
			</li>
			<li className='border-top-bottom'>{users} Users Allowed</li>
			<li>Send up to {memory} GB</li>
		</ul>
	);
};

Description.propTypes = {
	storage: PropTypes.number.isRequired,
	users: PropTypes.number.isRequired,
	memory: PropTypes.number.isRequired,
};
