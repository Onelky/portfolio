import { render, screen } from '@testing-library/react'
import CoverName from '../../components/CoverName/CoverName'
import '@testing-library/jest-dom/extend-expect';

test('Renders coverName component', () => {
        render(<CoverName />)
        const component = screen.getByRole('coverName');
        expect(component).toBeInTheDocument();
});

test('Contains name', () => {
    render(<CoverName />)
    const component = screen.getByRole('coverName');
    expect(component).toHaveTextContent('Onelky');
})
