// "use client";
// import React, { useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Equities from "./Equities";


// function BrokerageCalculator() {
//   const CHARGE_TABLE = {
//     equities: {
//       intraday:{
//         NSE: {
//           brokerage: {type: "minPercentOrFlat" , percent: 0.0003 , flat: 20},
//           stt: (i) => i.sell * i.qty * 0.00025 , 
//           txn: (i) => (i.buy + i.sell) * i.qty * 0.0000307,
//           gston: (i , ctx) => ctx.brokerage + ctx.txn,
//           gstRate: 0.18,
//           sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001,
//           stamp: (i) => i.buy * i.qty * 0.00003,
//           deliveryBrokerageZero: false,
//         },
//         BSE:{
//           brokerage: {type: "minPercentOrFlat" , percent: 0.0003 , flat: 20},
//           stt: (i) => i.sell * i.qty * 0.00025 , 
//           txn: (i) =>  (i.buy + i.sell) * i.qty * 0.0000375,
//           gston: (i , ctx) => ctx.brokerage + ctx.txn,
//           gstRate: 0.18,
//           sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001,
//           stamp: (i) => i.buy * i.qty * 0.00003,
//           deliveryBrokerageZero: false,
//         }
//       } , 
//       delivery: {
//         NSE:{
//           brokerage: {type: "Flat" , flat: 0} ,
//           stt: (i) => (i.sell + i.buy) * i.qty * 0.001 ,
//           txn: (i) => (i.sell + i.buy) * i.qty * 0.0000307 ,
//           gston: (i, ctx ) => ctx.brokerage + ctx.txn ,
//           gstRate: 0.18 ,
//           sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001,
//           stamp: (i) => i.buy * i.qty * 0.00015,
//           deliveryBrokerageZero: true,
//         },
//         BSE:{
//           brokerage: {type: "Flat" , flat: 0} ,
//           stt: (i) => (i.sell + i.buy) * i.qty * 0.001 ,
//           txn: (i) => (i.sell + i.buy) * i.qty * 0.0000375 ,
//           gston: (i, ctx ) => ctx.brokerage + ctx.txn ,
//           gstRate: 0.18 ,
//           sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001,
//           stamp: (i) => i.buy * i.qty * 0.00015,
//           deliveryBrokerageZero: true,
//         }
//       }
//     },
//     fo: {
//       futures: {
//         NSE:{
//           brokerage: {type: "minPercentOrFlat" , percent: 0.0003 , flat: 20},
//           stt: (i) => i.sell * i.qty * 0.0002 , 
//           txn: (i) => (i.buy + i.sell) * i.qty * 0.0000183,
//           gston: (i , ctx) => ctx.brokerage + ctx.txn,
//           gstRate: 0.18,
//           sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001,
//           stamp: (i) => i.buy * i.qty * 0.00002,
//           deliveryBrokerageZero: false,
//         },
//         BSE:{
//           brokerage: {type: "minPercentOrFlat" , percent: 0.0003 , flat: 20},
//           stt: (i) => i.sell * i.qty * 0.0002 , 
//           txn: (i) => (i.buy + i.sell) * i.qty * 0,
//           gston: (i , ctx) => ctx.brokerage + ctx.txn,
//           gstRate: 0.18,
//           sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001,
//           stamp: (i) => i.buy * i.qty * 0.00002,
//           deliveryBrokerageZero: false,
//         }
//       },
//       options:{
//         NSE:{
//           brokerage: {type: "Flat" ,  flat: 20},
//           stt: (i) => i.sell * i.qty * 0.0001 , 
//           txn: (i) => (i.buy + i.sell) * i.qty * 0.0000355,
//           gston: (i , ctx) => ctx.brokerage + ctx.txn,
//           gstRate: 0.18,
//           sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001,
//           stamp: (i) => i.buy * i.qty * 0.00002,
//           deliveryBrokerageZero: false,
//         },
//         BSE:{
//           brokerage: {type: "Flat" ,  flat: 20},
//           stt: (i) => i.sell * i.qty * 0.0001 , 
//           txn: (i) => (i.buy + i.sell) * i.qty * 0.0000325,
//           gston: (i , ctx) => ctx.brokerage + ctx.txn,
//           gstRate: 0.18,
//           sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001,
//           stamp: (i) => i.buy * i.qty * 0.00002,
//           deliveryBrokerageZero: false,
//         }
//       }
//     },
//     currency:{
//       futures:{
//         NSE:{
//           brokerage: {type: "minPercentOrFlat" , percent: 0.0003 , flat: 20},
//           stt: () => 0 , 
//           txn: (i) => (i.buy + i.sell) * i.qty * 0.000019,
//           gston: (i , ctx) => ctx.brokerage + ctx.txn,
//           gstRate: 0.18,
//           sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001,
//           stamp: (i) => i.buy * i.qty * 0.00002,
//         },
//         BSE:{
//           brokerage: {type: "minPercentOrFlat" , percent: 0.0003 , flat: 20},
//           stt: () => 0,
//           txn: (i) => (i.buy + i.sell) * i.qty * 0.0000045,
//           gston: (i , ctx) => ctx.brokerage + ctx.txn,
//           gstRate: 0.18,
//           sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001,
//           stamp: (i) => i.buy * i.qty * 0.00002,
//         }
//       },
//       options:{
//         NSE:{
//          brokerage: {type: "minPercentOrFlat" , percent: 0.0003 , flat: 20},
//           stt: () => 0 , 
//           txn: (i) => (i.buy + i.sell) * i.qty * 0.0005,
//           gston: (i , ctx) => ctx.brokerage + ctx.txn,
//           gstRate: 0.18,
//           sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001,
//           stamp: (i) => i.buy * i.qty * 0.00003, 
//         },
//         BSE:{
//           brokerage: {type: "minPercentOrFlat" , percent: 0.0003 , flat: 20},
//           stt: () => 0 , 
//           txn: (i) => (i.buy + i.sell) * i.qty * 0.00001,
//           gston: (i , ctx) => ctx.brokerage + ctx.txn,
//           gstRate: 0.18,
//           sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001,
//           stamp: (i) => i.buy * i.qty * 0.00003,
//         }
//       }
//     }
//     }
//   }
//   return (
//     <div>
      
//     </div>
//   );


// export default BrokerageCalculator;
