
export const usePlan = (value, plane) => {

    const multiplier = plane === 'monthly' ? value * 1 : (value + 0.0099) * 10

    const newPricing = parseFloat(multiplier.toString().substring(0,6))

  return {
    newPricing
  }
} 
