import { fireEvent, render, screen } from "@testing-library/react"
import { GifApp } from "../src/GifApp"

describe('test in <GifApp />', () => { 
    test('onAddCategory not should repete the categories ', () => { 
        // render(<AddCategory onNewCategory={() => {}}/>);
        render(<GifApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: 'Goku'}})
        fireEvent.submit(form)
        fireEvent.input(input, { target: { value: 'Goku'}})
        fireEvent.submit(form)
        

        expect(screen.getAllByText('Goku').length).toBe(1);

     })
 })