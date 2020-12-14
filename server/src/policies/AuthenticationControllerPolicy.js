const Joi = require('joi')

module.exports = {
  register(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email().error(new Error('You must provide a valid email address')),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      ).error(new Error('You must provide a valid password'))
    })

    const {error} = schema.validate(req.body)

    if(error){
      res.status(400).send({error: error.toString()})
    } else{
      next()
    }
  }
}
