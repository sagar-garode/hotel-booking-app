import express from 'express'
import Hotel from '../models/Hotel.js'

const router = express.Router()

router.post('/', async(req,res) => {
    try{
        const { name, city, starRating, address, image } = req.body
        const hotel = new Hotel({ name, city, starRating, address, image  })
        await hotel.save()
        res.status(201).json(hotel)
    } catch (e) {
        res.status(500).json('NOt Found')
    }
})

router.get('/', async(req,res) => {
    try{
        const hotels = await Hotel.find().populate('city')
        res.status(201).json(hotels)
    } catch (e) {
        res.status(500).json('Internal issue')
    }
})

router.get('/city/:cityId', async(req,res) => {
    try{
        const hotels = await Hotel.find({ city : req.params.cityId })
        res.status(201).json(hotels)
    } catch (e) {
        res.status(404).json('NOt Found')
    }
})

export default router;