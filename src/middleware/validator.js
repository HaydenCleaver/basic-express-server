'use strict';

module.exports = (req, res, next) => {
  let { name } = req.query;

  try {
    if (name){
      next();
    }

  } catch(err){
    next(err.message);
  }
};
