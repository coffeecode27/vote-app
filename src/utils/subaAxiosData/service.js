import axios from "axios";
import https from "https";
import ObjData from "./objData";

const boundOfData = async () => {
  try {
    const response = await axios.get(
      "https://vote.ramadhanarb.com:8888/api/verd/c1"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const accumulationData = async (data) => {
  const datas = data.data;
  const accumulatedData = ObjData(datas);
  return accumulatedData;
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
  console.log(sortedData, "DATA YANG SUDAH DI SORT");
  return sortedData;
};

const finalTopTenSuper = async (data) => {
  console.log(data, "SUBARASHI");
  return data.slice(0, 10);
};

export {
  boundOfData,
  accumulationData,
  seperateObjIntoArrOfObj,
  sortData,
  finalTopTenSuper,
};
