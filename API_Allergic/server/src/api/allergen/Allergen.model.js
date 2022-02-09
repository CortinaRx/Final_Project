const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AllergenSchema = new Schema({
    name: { type: String, required: true, trim: true },
    img: { type: String, required: true, trim: true },
    
    
}, { timestamp: true }
)

const Allergen = mongoose.model('allergen', AllergenSchema)
module.exports = Allergen