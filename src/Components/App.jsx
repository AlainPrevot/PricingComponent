import '../Sass/App.sass';
import { Title } from './Title';
import { Checkbox } from './Checkbox';
import { useState } from 'react';
import { ContainerCard } from './ContainerCard';

export const App = () => {
	const [plan, setPlan] = useState('monthly');

	const TypePlan = () => {
		setPlan(plan === 'monthly' ? 'Annually' : 'monthly');
	};

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				height: '76vh',
				// justifyContent: 'space-around',
				flexDirection: 'column',
			}}
			className='cuerpo'
		>
			<Title title={'Our Pricing'} />
			<Checkbox onMode={TypePlan} />
			<ContainerCard plan={plan} />
		</div>
	);
};
