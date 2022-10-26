import { Card } from './Card';
import '../Sass/App.sass';
import { Title } from './Title';
import { Checkbox } from './Checkbox';
import { useState } from 'react';

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
			<div className='prueba'>
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
		</div>
	);
};
