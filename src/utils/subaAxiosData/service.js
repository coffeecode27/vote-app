import axios from "axios";
import https from "https";
import { objData, mappingData } from "./objData.js";

const boundOfData = async () => {
  const a = await axios.get("https://vote.ramadhanarb.com:8888/api/verd/c1");
  return a.data.data;
};

const accumulationData = async (data) => {
  if (data.length === 1) {
    return mappingData(data);
  }
  const accumulatedData = objData(data);
  return accumulatedData;
};

const seperateWithOneArray = async (result) => {
  const transformedData = Object.entries(result[0]).map(([key, value]) => ({
    [key]: value,
  }));
  return transformedData;
};

const seperateObjIntoArrOfObj = async (result) => {
  const hasil = Object.keys(result).map((key) => ({ [key]: result[key] }));
  return hasil;
};

const sortData = async (hasil) => {
  const sortedData = hasil.sort((a, b) => {
    const valueA = Object.values(a)[0];
    const valueB = Object.values(b)[0];
    return valueB - valueA;
  });

  return sortedData;
};

const finalTopTenSuper = async (data) => {
  return data.slice(0, 10);
};

export {
  boundOfData,
  accumulationData,
  seperateWithOneArray,
  seperateObjIntoArrOfObj,
  sortData,
  finalTopTenSuper,
};
