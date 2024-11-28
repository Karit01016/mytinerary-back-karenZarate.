import joi from "joi-oid";

const schema = joi.object({
    name: joi.string().required() .messages({
        'any.required': 'NAME_REQUIRED', //
        'string.empty': 'NAME_REQUIRED',// string vacio
        'string.min': 'NAME_TOO_SHORT',
        'string.max': 'NAME_TOO_LARGE',

    }),
    email: joi.string().required().email({
        minDomainSegments: 2
    })
        .messages({
            "any.required": "Email is required", // dato requerido
            "string.empty": "Email is required",
            "string.email": "Invalid email format",
        }),
    password: joi.string().required().alphanum().min(6).max(12)
    .messages({
        'any.required': 'Password is required',
        "string.min": "Password must be at least 6 characters long",
        "string.max": "Password must be at most 10 characters long",
       

    }),
    photo: joi.string().required()
        .uri()
        .messages({
            'any.required': 'IMG_REQUIRED',
            'string.empty': 'IMG_REQUIRED',
            'string.uri': 'INVALID_URL'

        }),
    role: joi.string().required().min(2).max(5).messages({
        'any.required': 'ROLE_REQUIRED',
        'string.empty': 'ROLE_REQUIRED',
    
    }),
    city: joi.string().required()
    .messages({
        'any.required': 'CITY_REQUIRED PLEASE ',
        'string.empty': 'PLEASE TRY AGAIN  ', // string vacio
}),
country: joi.string().required()
    .messages({
    'any.required': 'COUNTRY_REQUIRED',
    'string.empty': 'COUNTRY_REQUIRED',
}),
    online: joi.boolean().required()
    .messages({
        'any.required': 'ONLINE_REQUIRED PLEASE ',
        'string.empty': 'PLEASE TRY AGAIN  ', // string vacio
}),
})

export default schema
