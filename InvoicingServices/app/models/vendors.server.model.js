var mongoose = require('mongoose'),
	crypto = require('crypto'),
	Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var VendorSchema = new Schema({
    vendorName: { type: String, trim: true, required: true, unique: true },
    vendorCode: { type: String, trim: true, required: true, unique: true },
    vendorAddress: { type: String, trim: true, required: true },
    vendorEmail: { type: String, trim: true, required: true },
    vendorCity: { type: String, trim: true, required: true },
    vendorState: { type: String, trim: true, required: true },
    vendorCountry: { type: String, trim: true, required: true },
    vendorPinCode: { type: String, trim: true, required: true, maxlength: 6 },
    vendorGSTIN: { type: String, trim: true, required: true, maxlength: 15 },
    vendorContactNumber: { type: String, trim: true, required: true },
    flgActive: { type: Boolean, default: true },
    dtAddedOn: { type: Date, default: Date.now },
    createdBy: { type: String },

}, { collection: "vendorSchema" });


mongoose.model('VendorSchema', VendorSchema);