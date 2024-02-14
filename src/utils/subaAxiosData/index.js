// topTenCalegHandler.js

import {
  boundOfData,
  accumulationData,
  seperateObjIntoArrOfObj,
  sortData,
  finalTopTenSuper,
} from "./service";

const topTenCalegHandler = async () => {
  try {
    const dataBound = await boundOfData();
    const accData = await accumulationData(dataBound);
    const seperateData = await seperateObjIntoArrOfObj(accData);
    const sorting = await sortData(seperateData);
    const result = await finalTopTenSuper(sorting);
    console.log(result, "DATA FINAL");
    return result;
  } catch (error) {
    throw error;
  }
};

export default topTenCalegHandler;
