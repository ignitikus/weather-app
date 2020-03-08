module.exports = {
   loginValidation: (req, res, next) => {
      if(req.isAuthenticated()) return res.redirect('/weather')
      next()
   },

   loginValidationFail: (req, res, next) => {
      if(!req.isAuthenticated()) return res.redirect('/403')
      next()
   },
} 