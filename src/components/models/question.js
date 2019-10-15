const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const QuerySchema = new Schema({
    question: {type: String, required: true},
    metadata: {},
    created_by: {type: String, required: true},
    is_active: {type: Boolean, required: true, default: true},
    is_deleted: {type: Boolean, required: true, default: false},
    created_at: Date,
    updated_at: Date
});
// Before saving doc
QuerySchema.pre('save', function(next) {
    var currentDate = new Date();
    //console.log(this);
    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});

let Question = mongoose.model('question', QuerySchema);
// make this available to our mdeium urls in our applications
module.exports = Question;