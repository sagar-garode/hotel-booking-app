import express from 'express'
import City from '../models/City.js'

const router = express.Router();

router.post('/', async(req,res) => {
    try {
        const { name } = req.body;
        const city = new City({ name });
        await city.save();
        res.status(201).json(city) 
    } catch (err) {
        res.status(400).json(err)
    }
})

router.get('/', async(req,res) => {
    try {
        const cities = await City.find();
        res.status(200).json(cities) 
    } catch (err) {
        res.status(500).json('Internal Server Issue')
    }
})

export default router;