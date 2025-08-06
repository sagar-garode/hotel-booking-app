import express from 'express'
import Room from '../models/Room.js'

const router = express.Router()

router.post('/', async(req,res) => {
    try{
        const room = new Room(req.body)
        await room.save()
        res.status(201).json(room)
    } catch (e) {
        res.status(500).json('Not Found',e)
    }
})

router.get('/:hotelId', async(req,res) => {
    try{
        const rooms = await Room.find().populate('hotel')
        res.status(201).json(rooms)
    } catch (e) {
        res.status(500).json('Internal issue')
    }
})

router.put('/:id', async(req,res) => {
    try{
        const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new : true })
        if (!room) return res.json('Room not found')
        res.status(201).json(user)
    } catch (e) {
        res.status(500).json('NOt Found')
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const room = await Room.findByIdAndDelete(req.params.id)
        if (!room) return res.json('Room not found')
        res.status(201).json('Room deleted')
    } catch (e) {
        res.status(500).json('Internal issue')
    }
})

export default router;