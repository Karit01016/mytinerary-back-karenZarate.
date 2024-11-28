import joi from "joi-oid";




const schema = joi.object({
    name: joi.string().required().messages({
        'string.base':'Name must be a string',
    }),
    photo: joi.string().required(),
    country: joi.string().required(),
    continent: joi.string().required(),
    description: joi.string().required(),
    currency: joi.number().required()
})
export default schema


