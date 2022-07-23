const Flight = require('../model/flightModel');


exports.getAllFlights = async (req, res) => {
    try {
        let flights = await Flight.find()
        if(flights.length === 0)
        return res.status(404).json({
            success: false,
            message: 'no flights found'
        })
        res.status(200).json({
            success: true,
            message: 'flight found',
            flights,
            count: flights.length,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
}

exports.getFLight = async (req, res) => {
    try {
        let id = {_id: req.params.id};
        let flight = await Flight.findOne(id);
        if(!flight) return res.status(404).json({
            success: false,
            message: 'flight not found'
        })
        res.status(200).json({
            success: true,
            message: 'flight found',
            flight,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'internal server error',
            error: error.message,
        })
    }
}

exports.createFlight = async (req, res) => {
    try {
        let flight = await req.body;
        let created = await Flight.create(flight);
        if (!created) 
        return res.status(400).json({
            success: false,
            message: 'flight no gree book'
    })
    return res.status(201).json({
        success: true,
        message: 'flight created',
        flight: created,
    })
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: 'internal server error',
            error: error.message
        })
    }
}
 
exports.updateFlight = async (req, res) => {
   try {
    let id = { _id: req.params.id}
    let flight = await req.body;
    let update = await Flight.findOneAndUpdate(id,flight, {new: true});
    if(!update) return res.status(400).json ({
        success: false,
        message: 'we no see flight',
    })
    return res.status(200).json({
        success: true,
        message: 'flight updated',
        flight: update,
    })
   } catch (error) {
    req.status(500).json({
        success: false,
        message: 'internal server error',
        error: error.message,
    })
   }
}

exports.deleteFlight = async (req, res) => {
    try {
        let id = { _id: req.params.id}
        let deleted = await Flight.findOneAndDelete(id);
        if(!deleted)
        return res.status(400).json({
            success: false,
            message: 'flight not deleted',
        });
        return res.status(200).json({
            success: true,
            message: 'flight deleted successfully'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'internal server error',
            error: error.message
        })
    }
}