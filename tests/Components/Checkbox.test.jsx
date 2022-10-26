import { fireEvent, render, screen } from '@testing-library/react';
import { Checkbox } from '../../src/Components/Checkbox';

describe('Pruebas en Checkbox', () => {
	test('Debe de hacer match con el snapshot', () => {
		const { container } = render(<Checkbox onMode={() => {}} />);

		expect(container).toMatchSnapshot();
	});

	test('Debe de pulsarse el input 2 veces', () => {
		const handleClick = jest.fn();

		render(<Checkbox onMode={handleClick} />);

		const input = screen.getByRole('checkbox');

		fireEvent.click(input);

		fireEvent.click(input);

		expect(handleClick).toHaveBeenCalledTimes(2);
	});

	test('El valor del checkbox debe cambiar al ser pulsado', () => {
		render(<Checkbox onMode={() => {}} />);

		const input = screen.getByRole('checkbox');

		fireEvent.click(input);

		expect(input.checked).toBe(true);

		fireEvent.click(input);

		expect(input.checked).toBe(false);
	});
});
