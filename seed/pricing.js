import '../db'
import Price from '../models/Price'
console.log('dada')
(async function() {
  await Price.deleteMany()
  await Price.create([
    { name: 'standard',     maxSpaces: 10,          maxFriends: 500,         cost: 49 },
    { name: 'professional', maxSpaces: 50,          maxFriends: 2500,        cost: 169, isBestseller: true },
    { name: 'expert',                                                        cost: 456 },
  ])
  console.log('Pricing seeded successful')
}())