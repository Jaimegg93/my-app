const { render, screen } = require('@testing-library/react');
const ExamenRecuperacion = require('./pelis');

test('hello world!', () => {
	render(<ExamenRecuperacion />);
	const linkElement = screen.getByText(/hello world/i);
	expect(linkElement).toBeInTheDocument();
});