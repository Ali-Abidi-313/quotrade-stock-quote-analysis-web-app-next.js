import mongoose from "mongoose";
const IntradayEquityIntial = [
  {
  exchange: "NSE",
  brokerage: {type:"minPercentOrFlat" , percent: 0.0003 , flat: 20},
  sttRate: 0.00025,
  txnRate: 0.0000307,
  gstRate: 0.18,
  sebiRate: 0.000001,
  stampRate: 0.00003,
  deliveryBrokerageZero: false,
  },
  
  {
  exchange: "BSE",
  brokerage: {type:"minPercentOrFlat" , percent: 0.0003 , flat: 20},
  sttRate: 0.00025,
  txnRate: 0.0000375,
  gstRate: 0.18,
  sebiRate: 0.000001,
  stampRate: 0.00003,
  deliveryBrokerageZero: false,
  }
  
];

export default IntradayEquityIntial;