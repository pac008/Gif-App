import { render, screen } from "@testing-library/react"
import { GifGrid } from '../../src/components'
import { useFetchGifs } from "../../src/hooks"

jest.mock('../../src/hooks')

describe('test in GifGrid', () => { 
    const category = 'Goku'
    test('debe de mostrar el loading inicial', () => {

        useFetchGifs.mockReturnValue({images: [], isLoading: true})
        render(<GifGrid category={category} /> );
        expect(screen.getByText('Loading...')).toBeTruthy()
        expect(screen.getByText(category)).toBeTruthy()
    })  

    test('should display items when is loaded the images from useFetchGifs', () => { 
        const gifs = [
            {
            id: '12d',
            title: 'Goku',
            url: 'http://123'
            }
        ]
        useFetchGifs.mockReturnValue({images: gifs, isLoading: false})
        render(<GifGrid category={category} /> );

        expect(screen.getAllByRole('img').length).toBe(1)
        
     })
 })