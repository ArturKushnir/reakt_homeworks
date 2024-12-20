import Joi from "joi";

const carValidators = Joi.object({
    brand:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        'string.pattern.base':'мінімум 1 максимум 20 літер',
        'string.requred':'це поле є обов\'язковим'
    }),
    price:Joi.number().min(0).max(9999999).required().messages({
        'string.pattern.base':'мінімум 0грн максимум 9999999грн',
        'string.requred':'це поле є обов\'язковим'
    }),
    year:Joi.number().min(1980).max(new Date().getFullYear()).required().messages({
        'string.pattern.base':`мінімум 1980 рік максимум ${new Date().getFullYear()} рік`,
        'string.requred':'це поле є обов\'язковим'
    })
})

export {carValidators}