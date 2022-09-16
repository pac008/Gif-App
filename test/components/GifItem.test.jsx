import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Test in GifItem', () => { 
    const title = 'test';
    const url = 'http://localhost/123';
    test('Snapshop del componente', () => {
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })
    
    test('Debe de mostrar la imagen con la url y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />)
        //screen debug()
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)
        const { src, alt } = screen.getByRole('img');
        expect(alt).toBe(title);
        expect(src).toBe(url);
    })

    test('debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
 })