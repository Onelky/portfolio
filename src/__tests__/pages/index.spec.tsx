import { render, screen } from '@testing-library/react'
import Header from '../../pageComponents/Header/Header'
import '@testing-library/jest-dom/extend-expect';
import Arrows from "../../components/Arrows/Arrows";
import {name} from '../../constants/header';

test('Renders header section', () => {
        render(<Header />)
        const headerComponent = screen.getByRole('header');
        expect(headerComponent).toBeInTheDocument();
});
