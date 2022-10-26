import { render, screen } from '@testing-library/react';
import { Description } from '../../src/Components/Description';

describe('Pruebas en Description', () => {
	const storageTest = 10;
	const usersTest = 20;
	const memoryTest = 30;

	test('Debe de hacer match con el snapshot', () => {
		const { container } = render(
			<Description
				storage={storageTest}
				users={usersTest}
				memory={memoryTest}
			/>
		);
		expect(container).toMatchSnapshot();
	});

	test('Debe de mostrar las propiedades pasadas', () => {
		render(
			<Description
				storage={storageTest}
				users={usersTest}
				memory={memoryTest}
			/>
		);

		expect(screen.getByText(`${storageTest} GB Storage`)).toBeTruthy();
		expect(screen.getByText(`${usersTest} Users Allowed`)).toBeTruthy();
		expect(screen.getByText(`Send up to ${memoryTest} GB`)).toBeTruthy();
	});

	test('La unidad del storage debe ser GB al pasar un numero mayor de 2 digitos', () => {
		render(<Description storage={500} users={usersTest} memory={memoryTest} />);

		expect(screen.getByText('500 GB Storage')).toBeTruthy();
	});

	test('La unidad del storage debe ser TB al pasar un numero de 1 digito', () => {
		render(<Description storage={3} users={usersTest} memory={memoryTest} />);

		expect(screen.getByText('3 TB Storage')).toBeTruthy();
	});
});
