import Price from '../models/Price'

export const fetchPricingPlans = async (request, response) => {
  response.json( await Price.find() )
}