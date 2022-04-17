import { render, screen } from '@testing-library/react'
import Arrows from '../../components/Arrows/Arrows'
import '@testing-library/jest-dom/extend-expect';

test('Renders three arrows', () => {
        render(<Arrows />)
        const component = screen.getByRole('arrows');
        expect(component).toBeInTheDocument();
});
//
// test('Renders three arrow elements', () => {
//     render(<Arrows />)
//     const name = screen.getByRole('name');
//     expect(name).toHaveTextContent('Onelky');
// })
