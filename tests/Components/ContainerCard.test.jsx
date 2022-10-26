import { render, screen } from '@testing-library/react';
import { ContainerCard } from '../../src/Components';
import { Data } from '../../src/Data/Data';

describe('Pruebas en el ContainerCard', () => {
	test('Debe de hacer match con el snapshot', () => {
		const { container } = render(<ContainerCard plan='monthly' />);

		expect(container).toMatchSnapshot();
	});

	test('Debe de mostrar un boton por cada Card', () => {
		render(<ContainerCard plan='monthly' />);

		expect(screen.getAllByRole('button').length).toBe(3); //Me aseguro que el botton de la card se dibuje las 3 veces que son necesarias
	});
});
