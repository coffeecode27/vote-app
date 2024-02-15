import {
  boundOfData,
  accumulationData,
  seperateObjIntoArrOfObj,
  sortData,
  finalTopTenSuper,
  seperateWithOneArray,
} from "./service";

const topTenCalegHandler = async () => {
  try {
    const dataBound = await boundOfData();

    if (dataBound.length === 1) {
      const accData = await accumulationData(dataBound);
      const seperateData = await seperateWithOneArray(accData);
      const sorting = await sortData(seperateData);
      const result = await finalTopTenSuper(sorting);

      return result;
    }

    const accData = await accumulationData(dataBound);
    const seperateData = await seperateObjIntoArrOfObj(accData);
    const sorting = await sortData(seperateData);
    const result = await finalTopTenSuper(sorting);

    return result;
  } catch (error) {
    throw error;
  }
};

export default topTenCalegHandler;
