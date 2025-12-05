import mongoose, { Schema } from "mongoose";

const IntradayEquitySchema = new Schema({
  exchange: {
    type: String,
    required: true,
  },
  brokerage: {
    type: {
      type: String,
      enum: ["minPercentOrFlat"],
      required: true,
    },
    percent: { type: Number , required: true },
    flat: { type: Number , required: true },
  },
  sttRate: { type: Number , required: true},
  txnRate: { type: Number , required: true},
  gstRate: { type : Number , required: true},
  sebiRate: { type: Number , required: true},
  stampRate: { type: Number , required: true},
  deliveryBrokerageZero: { type: Boolean , default: false}
});

// Export model (use existing model if already compiled)
export default mongoose.models.IntradayEquity || mongoose.model("IntradayEquity", IntradayEquitySchema);