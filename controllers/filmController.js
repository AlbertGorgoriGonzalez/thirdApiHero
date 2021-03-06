  
  const c = require('../config/constants');
  const filmService = require('../services/filmServices');
  
  module.exports = {
    selectById: async (req, res) => {
      const response = { status: c.status.serverError, msg: 'Internal server error' };
      try {
        const filmId = req.params.id;
        const resFromService = await filmService.selectById(filmId);
        if (resFromService.status) {
          if (resFromService.result) {
            response.status = c.status.ok;
            response.msg = 'Film found';
            response.body = resFromService.result;
          } else {
            response.status = c.status.notFound;
            response.msg = 'Film not found';
          }
        }
      } catch(err) {
        console.log('ERROR-filmController-selectById: ', err);
        response.error = err;
      }
      res.status(response.status).send(response);
    }
  };