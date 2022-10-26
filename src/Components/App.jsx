import { useState } from 'react';
import { Title, Checkbox, ContainerCard } from '../Components';
import '../Sass/App.sass';

export const App = () => {
	const [plan, setPlan] = useState('monthly');

	const TypePlan = () => {
		setPlan(plan === 'monthly' ? 'Annually' : 'monthly');
	};

	return (
		<div className='app'>
			<Title title={'Our Pricing'} />
			<Checkbox onMode={TypePlan} />
			<ContainerCard plan={plan} />
		</div>
	);
};
