import joi from 'joi'

export const userModel = joi.object({
  username: joi.string()
    .alphanum()
    .min(3)
    .max(12)
    .required(),
  password: joi.string()
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
  confirm_password: joi.ref('password'),
  email: joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
})
  .with('password', 'confirm_password')
