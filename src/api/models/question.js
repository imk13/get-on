const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const QueSchema = new Schema({
    question: {type: String, required: true},
    metadata: {},
    is_active: {type: Boolean, required: true, default: true},
    created_by: {type: String, required: true},
    created_at: Date,
    updated_at: Date
});
// Before saving doc
QueSchema.pre('save', function(next) {
    var currentDate = new Date();
    //console.log(this);
    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});

let Question = mongoose.model('question', QueSchema);
// make this available to our mdeium urls in our applications
module.exports = Question;