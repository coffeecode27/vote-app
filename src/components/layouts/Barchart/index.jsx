import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRecoilValue } from "recoil";
import { pkb2, pkb1 } from "../../../state.js";
const BarChart = () => {
  const dataPkb1 = useRecoilValue(pkb1);
  const dataPkb2 = useRecoilValue(pkb2);
  const persenDuaDesimal = (dataPkb2 / 100000).toFixed(2) * 100;

  console.log(persenDuaDesimal);
  console.log(dataPkb1);
  const now = 80;
  return (
    <div className="px-10 py-3">
      <div className="flex- flex-col text-left mb-3">
        <div className="flex justify-between">
          <div className="font-bold text-3xl mb-1">
            Capaian target <br /> (100.000 Suara)
          </div>
          <div className="font-bold text-3xl mb-1">
            Jumlah Suara Pemilih Saat ini <br /> {dataPkb2} suara (
            {persenDuaDesimal}
            %)
          </div>
        </div>

        <div className="col-span-6">
          <ProgressBar
            animated
            max={100000}
            now={dataPkb2}
            style={{ height: "80px", fontSize: "40px", fontWeight: "bold" }}
            // label={`${persenDuaDesimal} % (${dataPkb2} Suara )`}
          />
        </div>
      </div>

      <div className="border border-gray-500 p-2 shadow-md">
        <div className="my-2">
          <div className="grid grid-cols-7 text-left mb-3">
            <div className="font-bold text-2xl mb-1">
              M. Ramadhana Rusli Bintang.M.M
            </div>
            <div className="col-span-6">
              <ProgressBar
                now={dataPkb2}
                style={{ height: "50px", fontSize: "30px", fontWeight: "bold" }}
                label={`${dataPkb2} Suara`}
                variant="success"
              />
            </div>
          </div>

          <div className="grid grid-cols-7 text-left mb-3">
            <div className="font-bold text-2xl mb-1">Irmawan, Sos.MM</div>
            <div className="col-span-6">
              <ProgressBar
                now={dataPkb1}
                style={{ height: "50px", fontSize: "30px", fontWeight: "bold" }}
                label={`${dataPkb1} Suara`}
                variant="danger"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
