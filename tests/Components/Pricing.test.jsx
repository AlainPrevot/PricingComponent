import { render, screen } from '@testing-library/react';
import { Pricing } from '../../src/Components/Pricing';

describe('Pruebas en Pricing', () => {
	test('Debe de hacer match con el snapshot', () => {
		const { container } = render(<Pricing value={12} />);

		expect(container).toMatchSnapshot();
	});
	test('Debe de mostrar las propiedades pasadas', () => {
		render(<Pricing value={12} />);

		expect(screen.getByText('$')).toBeTruthy();
		expect(screen.getByText(12)).toBeTruthy();
	});
});
