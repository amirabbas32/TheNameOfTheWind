const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema(
  {
    _id: {
      type: "Number",
    },
    product_id: {
      type: "Number",
    },
    order_id: {
      type: "Number",
    },
    transport_id: {
      type: "String",
    },
    iranian_transaction_party_id: {
      type: "Number",
    },
    abroad_transaction_party_id: {
      type: "Number",
    },
    brand_name: {
      type: "Mixed",
    },
    item_name: {
      type: "String",
    },
    box_number: {
      type: "String",
    },
    box_quantity: {
      type: "String",
    },
    item_quantity_per_box: {
      type: "Number",
    },
    total_quantity: {
      type: "Number",
    },
    weight_per_peice_kg: {
      type: "Number",
    },
    dimentions_cbm: {
      type: "String",
    },
    expire_date: {
      type: "Date",
    },
    photo: {
      type: "String",
    },
    description: {
      type: "String",
    },
  },
  { collection: "products" },
);

module.exports = mongoose.model("Data", dataSchema);
