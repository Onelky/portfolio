import { render, screen } from '@testing-library/react'
import App from '../../pages/index'
import '@testing-library/jest-dom/extend-expect';

test('Renders header section', () => {
        render(<App />)
        const headerComponent = screen.getByRole('header');
        expect(headerComponent).toBeInTheDocument();
});
