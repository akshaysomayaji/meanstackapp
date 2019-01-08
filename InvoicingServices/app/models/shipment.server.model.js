var mongoose = require('mongoose'),
	crypto = require('crypto'),
	Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;
mongoose.Promise = global.Promise;

var ShipmentSchema = new Schema({
    txtConsigneeId: { type: String, required: true },
    txtConsignorId: { type: String, required: true },
    txtConsigneeName: { type: String, required: true },
    txtConsignorName: { type: String, required: true },
    txtConsigneeCode: { type: String, required: true },
    txtConsignorCode: { type: String, required: true },
    txtConsigneeAddress: { type: String, required: true },
    txtConsignorAddress: { type: String, required: true },
    txtConsigneeContactNumber: { type: String, required: true },
    txtConsignorContactNumber: { type: String, required: true },
    txtConsigneeEmailId: { type: String, required: true },
    txtConsignorEmailId: { type: String, required: true },
    txtDeliveryCustomerId: { type: String, required: true },
    txtFromCity: { type: String, required: true },
    txtToCity: { type: String, required: true },
    txtBookingBranchId: { type: String, required: true },
    txtDeliveryBranchId: { type: String, required: true },
    txtBilledTo: { type: String, required: true },
    txtConsigneeContactDetails: { type: String, required: true },
    txtProduct: { type: String, required: true },
    txtUFSReferenceType: { type: String, required: true },
    txtUFSReferenceNumber: { type: String, required: true },
    txtInsuredBy: { type: String, required: true },
    txtInsuranceName: { type: String, required: false, default: null },
    txtInsurancePolicyNumber: { type: String, required: false, default: null },
    txtInsurancePolicyDate: { type: Date, required: false, default: null },
    txtTypeofLoad: { type: String, required: true },
    txtPackageType: { type: String, required: true },
    isDangerousGoods: { type: Boolean, required: true, default: false },
    isTemparatureSensitiveCargo: { type: Boolean, required: true, default: false },
    isVolumetricsShipment: { type: Boolean, required: true, default: false },
    txtDescriptionOfGoods: { type: String, required: true },
    txtSpecialInstrucions: { type: String, required: false, default: null },
    txtLengthUOM: { type: String, required: true, default: "Inch" },
    txtWeightUOM: { type: String, required: true, default: "Kg" },
    intNumberPackages: { type: Number, required: true },
    fltNetWeight: { type: SchemaTypes.Double, required: true },
    fltGrossWeight: { type: SchemaTypes.Double, required: true },
    fltChargableWeight: { type: SchemaTypes.Double, required: true },
    txtInvoiceNumber: { type: String, required: true },
    dtInvoiceDate: { type: Date, required: true },
    fltInvoiceValue: { type: SchemaTypes.Double, required: true },
    txtVendorId: { type: String, required: true },
    dtEstimatedDeliveryDate: { type: Date, required: true },
    txtVendorReferenceNumber: { type: String, required: false },
    txtKWEReferenceNumber: { type: String, required: false },
    txtShipmentNumber: { type: String, required: true },
    txtVehicleNumber: { type: String, required: true },
    txtVehicleModel: { type: String, required: true },
    txtVehicleMake: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
    dtAddedOn: { type: Date, required: true, default: Date.now },
    txtAddedBy: { type: String, required: true }
}, { collection: "shipment_collection" });



var DraftedShipmentSchema = new Schema({
    txtConsigneeId: { type: String, required: false },
    txtConsignorId: { type: String, required: false },
    txtDeliveryCustomerId: { type: String, required: false },
    txtFromCity: { type: String, required: false },
    txtToCity: { type: String, required: false },
    txtBookingBranchId: { type: String, required: false },
    txtDeliveryBranchId: { type: String, required: false },
    txtBilledTo: { type: String, required: false },
    txtConsigneeContactDetails: { type: String, required: false },
    txtProduct: { type: String, required: false },
    txtUFSReferenceType: { type: String, required: false },
    txtUFSReferenceNumber: { type: String, required: false },
    txtInsuredBy: { type: String, required: false },
    txtInsuranceName: { type: String, required: false, default: null },
    txtInsurancePolicyNumber: { type: String, required: false, default: null },
    txtInsurancePolicyDate: { type: Date, required: false, default: null },
    txtTypeofLoad: { type: String, required: false },
    txtPackageType: { type: String, required: false },
    isDangerousGoods: { type: Boolean, required: false, default: false },
    isTemparatureSensitiveCargo: { type: Boolean, required: false, default: false },
    isVolumetricsShipment: { type: Boolean, required: false, default: false },
    txtDescriptionOfGoods: { type: String, required: false },
    txtSpecialInstrucions: { type: String, required: false, default: null },
    txtLengthUOM: { type: String, required: false},
    txtWeightUOM: { type: String, required: false},
    intNumberPackages: { type: Number, required: false },
    fltNetWeight: { type: SchemaTypes.Double, required: false },
    fltGrossWeight: { type: SchemaTypes.Double, required: false },
    fltChargableWeight: { type: SchemaTypes.Double, required: false },
    txtInvoiceNumber: { type: String, required: false },
    dtInvoiceDate: { type: Date, required: false },
    fltInvoiceValue: { type: SchemaTypes.Double, required: false },
    txtVendorId: { type: String, required: false },
    dtEstimatedDeliveryDate: { type: Date, required: false },
    txtVendorReferenceNumber: { type: String, required: false },
    txtKWEReferenceNumber: { type: String, required: false },
    txtShipmentNumber: { type: String, required: false },
    txtVehicleNumber: { type: String, required: false },
    txtVehicleModel: { type: String, required: false },
    txtVehicleMake: { type: String, required: false },
    isActive: { type: Boolean, required: false, default: true },
    dtAddedOn: { type: Date, required: false, default: Date.now },
    txtAddedBy: { type: String, required: true },
}, { collection: "Drafted_shipment_collection" });


var ShipmentStatusSchema = new Schema({
    txtShipmentId: { type: String, required: true },
    txtStatus: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
    dtAddedOn: { type: Date, required: true, default: Date.now },
    txtAddedBy: { type: String, required: true },
}, { collection: "shipment_status_collection" });


var ShipmentMilestoneSchema = new Schema({
    txtShipmentId: { type: String, required: true },
    txtMilestoneStatus: { type: String, required: true },
    dtOfDelivery: { type: Date, required: true, default: Date.now },
    isActive: { type: Boolean, required: true, default: true },
    ifException: [{
        txtMilestoneExceptionStatus: { type: String, required: false },
        txtComments: { type: String, required: false },
    }],
    dtAddedOn: { type: Date, required: true, default: Date.now },
    txtAddedBy: { type: String, required: true },
}, { collection: "shipment_milestonestatus_collection" });



var ShipmentEWayBillNumberSchema = new Schema({
    txtShipmentId: { type: String, required: true },
    txtEwayBillNumber: { type: String, required: true },
    txtComments: { type: String, required: false },
    isActive: { type: Boolean, required: true, default: true },
    dtAddedOn: { type: Date, required: true, default: Date.now },
    txtAddedBy: { type: String, required: true },
}, { collection: "shipment_EWayBillNumber_collection" });



var ShipmentPODSchema = new Schema({
    txtShipmentId: { type: String, required: true },
    txtPOD: { type: String, required: true },
    txtComments: { type: String, required: false },
    isActive: { type: Boolean, required: true, default: true },
    dtAddedOn: { type: Date, required: true, default: Date.now },
    txtAddedBy: { type: String, required: true },
}, { collection: "shipment_POD_collection" });


mongoose.model('ShipmentSchema', ShipmentSchema);
mongoose.model('DraftedShipmentSchema', DraftedShipmentSchema);
mongoose.model('ShipmentStatusSchema', ShipmentStatusSchema);
mongoose.model('ShipmentMilestoneSchema', ShipmentMilestoneSchema);
mongoose.model('ShipmentEWayBillNumberSchema', ShipmentEWayBillNumberSchema);
mongoose.model('ShipmentPODSchema', ShipmentPODSchema);