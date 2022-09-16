import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks"

describe('preubas en useFetchGifs', () => { 
    test('should return the initial state', () => { 
        
        const { result}  = renderHook( () => useFetchGifs('Goku') );
        const { images, isLoading } = result.current
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
        
    }) 
    test('should return the array images and isLoading to equal false', async () => { 
        
        const { result}  = renderHook( () => useFetchGifs('Goku') );
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            // {
            //     timeout: 5000
            // }
        );
        const { images, isLoading } = result.current
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    }) 
 })