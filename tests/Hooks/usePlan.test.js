import { renderHook } from "@testing-library/react"
import { usePlan } from "../../src/Hooks/usePlan"

describe('Pruebas en usePlan', () => { 

    const valueTest = 100

    test('Debe de devolver el mismo valor', () => { 
        const {result} = renderHook(() => usePlan(valueTest, 'monthly'));

        console.log(result.current.newPricing)

        expect(result.current.newPricing).toEqual(100)
        expect(result.current.newPricing).toEqual(expect.any(Number))
    })
    test('Debe de devolver el valor multiplado por 10', () => { 
        
        const {result} = renderHook(() => usePlan(valueTest, 'anually'));
    
        console.log(result.current.newPricing)
    
        expect(result.current.newPricing).toEqual(1000)
        expect(result.current.newPricing).toEqual(expect.any(Number))
      })
 })