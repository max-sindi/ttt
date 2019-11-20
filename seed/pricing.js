import '../db'
import Price from '../models/Price'

(async function() {
  await Price.deleteMany();
  [
    { name: 'standard',     maxSpaces: 10,          maxFriends: 500,         cost: 49 },
    { name: 'professional', maxSpaces: 50,          maxFriends: 2500,        cost: 169, isBestseller: true },
    { name: 'expert',                                                        cost: 456 },
  ].map(async item => await Price.create(item));
  console.log('Pricing seeded successful')
}())