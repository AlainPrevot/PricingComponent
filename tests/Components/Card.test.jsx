import { render, screen } from '@testing-library/react';
import { Card } from '../../src/Components/Card';

describe('Pruebas en Card', () => {
	test('Debe de hacer match con el snapshot', () => {
		const { container } = render(
			<Card
				title='Basic'
				pricing={19.99}
				storage={500}
				memory={3}
				users={2}
				theme='secundary'
				plane='monthly'
			/>
		);

		expect(container).toMatchSnapshot();
		expect(screen.getByRole('button')).toBeTruthy();
	});
	test('Debe de devolver el mismo valor del precio si el plan es mensual', () => {
		const newPricing = 19.99;
		const newPlane = 'monthly';
		const result = 19.99;

		render(
			<Card
				title='Basic'
				pricing={newPricing}
				storage={500}
				memory={3}
				users={2}
				theme='secundary'
				plane={newPlane}
			/>
		);

		expect(screen.getByText(result)).toBeTruthy();
	});
	test('Debe de devolver el valor precio multiplicado por 10 si el plan es anual', () => {
		const newPricing = 19.99;
		const newPlane = 'anually';
		const result = 199.99;

		render(
			<Card
				title='Basic'
				pricing={newPricing}
				storage={500}
				memory={3}
				users={2}
				theme='secundary'
				plane={newPlane}
			/>
		);

		expect(screen.getByText(result)).toBeTruthy();
	});
});
