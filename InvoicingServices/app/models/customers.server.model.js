var mongoose = require('mongoose'),
	crypto = require('crypto'),
	Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var CustomerSchema = new Schema({
    customerName: { type: String, trim: true, required: true, unique: true },
    customerCode: { type: String, trim: true, required: true, unique: true },
    customerAddress: { type: String, trim: true, required: true },
    customerEmail: { type: String, trim: true, required: true },
    customerCity: { type: String, trim: true, required: true },
    customerState: { type: String, trim: true, required: true },
    customerCountry: { type: String, trim: true, required: true },
    CustomerPinCode: { type: String, trim: true, required: true, maxlength: 6 },
    customerGSTIN: { type: String, trim: true, required: true, maxlength: 15 },
    customerPICFirstName: { type: String, trim: true, required: true },
    customerPICLastName: { type: String, trim: true, required: true },
    customerPICContactNumber: { type: String, trim: true, required: true },
    customerPICContactMailId: { type: String, trim: true, required: true },
    customerKeyAccountManagerName: { type: String, trim: true, required: true },
    customerKeyAccountManagerCode: { type: String, trim: true, required: true },
    customerSalesPersonName: { type: String, trim: true, required: true },
    customerSalesPersonCode: { type: String, trim: true, required: true },
    flgActive: { type: Boolean, default: true },
    dtAddedOn: { type: Date, default: Date.now },
    createdBy: { type: String },

}, { collection: "CustomerSchema" });


mongoose.model('CustomerSchema', CustomerSchema);
