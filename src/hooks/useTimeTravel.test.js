import { render, fireEvent, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min'
import App from '../App.jsx'

it('renders the expected output per user events', () => {
    render(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    )

    const undoButton = screen.getByText(/undo/i);
    const redoButton = screen.getByText(/redo/i);
    const dateInput = screen.getByLabelText(/date/i);


    fireEvent.change(dateInput, {target: {value: '2022-01-01'}});
    // This works. Uncomment the screen.debug() below, run test, and check console. You'll see the correct value in the display component(section > p). This won't get caught up on the value in the dateInput because it's not text on the screen.
    // screen.debug();
    screen.getByText('01-01-2022');
    fireEvent.change(dateInput, {target: {value: '2022-02-22'}});
    screen.getByText('02-22-2022');
    fireEvent.change(dateInput, {target: {value: '2022-03-14'}});
    screen.getByText('03-14-2022');

    fireEvent.click(undoButton);
    screen.getByText('02-22-2022');
    fireEvent.click(undoButton);
    screen.getByText('01-01-2022');

    fireEvent.click(redoButton);
    screen.getByText('02-22-2022');

    fireEvent.change(dateInput, {target: {value: '2022-04-04'}});
    screen.getByText('04-04-2022');

    fireEvent.click(undoButton);
    screen.getByText('02-22-2022');
    fireEvent.click(undoButton);
    screen.getByText('01-01-2022');

    fireEvent.click(redoButton);
    screen.getByText('02-22-2022');
    fireEvent.click(redoButton);
    screen.getByText('04-04-2022');
    fireEvent.click(redoButton);
    screen.getByText('03-14-2022');
})