import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Arrows from "../../components/Arrows/Arrows";
import CoverName from "../../components/CoverName/CoverName";

test('Header has a name component', () => {
    render(<CoverName />)
    const coverNameComponent = screen.getByRole('coverName');
    expect(coverNameComponent).toBeInTheDocument();
});

test('Renders arrows container', () => {
    render(<Arrows />)
    const arrowsComponent = screen.getByRole('arrows');
    expect(arrowsComponent).toBeInTheDocument();
});
