import { render, screen } from '@testing-library/react';
import { Title } from '../../src/Components/Title';

describe('Pruebas en Title', () => {
	test('Debe de hacer match con el snapshot', () => {
		const { container } = render(<Title title='PRUEBA' />);

		expect(container).toMatchSnapshot();
	});
	test('Debe de mostrar las propiedades pasadas', () => {
		render(<Title title='PRUEBA' />);

		expect(screen.getByText('PRUEBA')).toBeTruthy();
	});
});
