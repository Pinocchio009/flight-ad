const router = require('express').Router();
const controller = require('../controller/flightController')
router
      .get('/', controller.getAllFlights)
      .get('/:id', controller.getFLight)
      .post('/', controller.createFlight)
      .put('/:id', controller.updateFlight)
      .delete('/:id', controller.deleteFlight);





      module.exports = router;