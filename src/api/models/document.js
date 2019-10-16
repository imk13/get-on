const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// create a schema
let DocSchema = new Schema({
    patient_id: {type: String, required: true},
    name: { type: String, required: true },
    queries: {
      type : [
        {
          'question' : {
            type : ObjectId,
            ref : 'question'
          },
          'answer' : {
            type : String, default : ''
          }
        }
      ],
      default : [],
      required : false
    },
    metadata: {},
    is_active: {type: Boolean, required: true, default: true},
    created_by: {type: String, required: true},
    created_at: Date,
    updated_at: Date
});

// Before saving doc
DocSchema.pre('save', function(next) {
    var currentDate = new Date();
    //console.log(this);
    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});

// the schema is useless so far
// we need to create a model using it
let Document = mongoose.model('document', DocSchema);

// make this available to our mdeium urls in our applications
module.exports = Document;