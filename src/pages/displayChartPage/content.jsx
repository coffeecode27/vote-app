import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useRecoilState } from "recoil";
import topTenCalegHandler from "../../utils/subaAxiosData/index.js";

import {
  recoilVote,
  pkb1,
  pkb2,
  pkb3,
  pkb4,
  pkb5,
  pkb6,
  pkb7,
  AcehBesar,
  AcehJaya,
  AcehSingkil,
  Pidie,
  Subussalam,
  PidieJaya,
  Sabang,
  GayoLues,
  BandaAceh,
  AcehBarat,
  Simeulue,
  AcehSelatan,
  AcehBaratDaya,
  NaganRaya,
  AcehTenggara,
  pkb,
  pdip,
  pks,
  hanura,
  pbb,
  perindo,
  partaiUmmat,
  gerindra,
  golkar,
  pkn,
  pan,
  psi,
  ppp,
  demokrat,
} from "../../state";
import "bootstrap/dist/css/bootstrap.min.css";
import "./content.css";
const Content = () => {
  const [fetchCounter, setFetchCounter] = useState(1);
  const [dataTopTenCaleg, setDataTopTenCaleg] = useState([]);
  // state untuk caleg semua caleg PKB
  const [data, setData] = useRecoilState(recoilVote);
  const [DataPkb1, setDataPkb1] = useRecoilState(pkb1);
  const [DataPkb2, setDataPkb2] = useRecoilState(pkb2);
  const [DataPkb3, setDataPkb3] = useRecoilState(pkb3);
  const [DataPkb4, setDataPkb4] = useRecoilState(pkb4);
  const [DataPkb5, setDataPkb5] = useRecoilState(pkb5);
  const [DataPkb6, setDataPkb6] = useRecoilState(pkb6);
  const [DataPkb7, setDataPkb7] = useRecoilState(pkb7);

  // State untuk caleg  Ramadhana Rusli Bintang, M.M ditiap kabupaten
  const [DataAcehBesar, setDataAcehBesar] = useRecoilState(AcehBesar);
  const [DataAcehJaya, setDataAcehJaya] = useRecoilState(AcehJaya);
  const [DataAcehSingkil, setDataAcehSingkil] = useRecoilState(AcehSingkil);
  const [DataPidie, setDataPidie] = useRecoilState(Pidie);
  const [DataSubussalam, setDataSubussalam] = useRecoilState(Subussalam);
  const [DataPidieJaya, setDataPidieJaya] = useRecoilState(PidieJaya);
  const [DataSabang, setDataSabang] = useRecoilState(Sabang);
  const [DataGayoLues, setDataGayoLues] = useRecoilState(GayoLues);
  const [DataBandaAceh, setDataBandaAceh] = useRecoilState(BandaAceh);
  const [DataAcehBarat, setDataAcehBarat] = useRecoilState(AcehBarat);
  const [DataSimeulue, setDataSimeulue] = useRecoilState(Simeulue);
  const [DataAcehSelatan, setDataAcehSelatan] = useRecoilState(AcehSelatan);
  const [DataAcehBaratDaya, setDataAcehBaratDaya] =
    useRecoilState(AcehBaratDaya);
  const [DataNaganRaya, setDataNaganRaya] = useRecoilState(NaganRaya);
  const [DataAcehTenggara, setDataAcehTenggara] = useRecoilState(AcehTenggara);

  // state untuk partai
  const [DataPkb, setDataPkb] = useRecoilState(pkb);
  const [DataPdip, setDataPdip] = useRecoilState(pdip);
  const [DataPks, setDataPks] = useRecoilState(pks);
  const [DataHanura, setDataHanura] = useRecoilState(hanura);
  const [DataPbb, setDataPbb] = useRecoilState(pbb);
  const [DataPerindo, setDataPerindo] = useRecoilState(perindo);
  const [DataPartaiUmmat, setDataPartaiUmmat] = useRecoilState(partaiUmmat);
  const [DataGerindra, setDataGerindra] = useRecoilState(gerindra);
  const [DataGolkar, setDataGolkar] = useRecoilState(golkar);
  const [DataPkn, setDataPkn] = useRecoilState(pkn);
  const [DataPan, setDataPan] = useRecoilState(pan);
  const [DataPsi, setDataPsi] = useRecoilState(psi);
  const [DataPpp, setDataPpp] = useRecoilState(ppp);
  const [DataDemokrat, setDataDemokrat] = useRecoilState(demokrat);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hasilToptenCaleg = await topTenCalegHandler();
        setDataTopTenCaleg(hasilToptenCaleg);
        console.log(dataTopTenCaleg);
        // Lakukan sesuatu dengan dataCa
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // console.log(`top ten caleg ${topTenCalegHandler()}`);
    const getData = async () => {
      try {
        const response = await fetch(
          "https://vote.ramadhanarb.com:8888/api/verd/c1"
        );
        const { data } = await response.json();
        setData(data);
        console.log(data);
        // Calculate total all of pkb caleg
        const totalPkb1 = data.reduce(
          (total, obj) => total + (obj.pkb1 || 0),
          0
        );
        setDataPkb1(totalPkb1);

        const totalPkb2 = data.reduce(
          (total, obj) => total + (obj.pkb2 || 0),
          0
        );
        setDataPkb2(totalPkb2);

        const totalPkb3 = data.reduce(
          (total, obj) => total + (obj.pkb3 || 0),
          0
        );
        setDataPkb3(totalPkb3);

        const totalPkb4 = data.reduce(
          (total, obj) => total + (obj.pkb4 || 0),
          0
        );
        setDataPkb4(totalPkb4);

        const totalPkb5 = data.reduce(
          (total, obj) => total + (obj.pkb5 || 0),
          0
        );
        setDataPkb5(totalPkb5);

        const totalPkb6 = data.reduce(
          (total, obj) => total + (obj.pkb6 || 0),
          0
        );
        setDataPkb6(totalPkb6);

        const totalPkb7 = data.reduce(
          (total, obj) => total + (obj.pkb7 || 0),
          0
        );
        setDataPkb7(totalPkb7);
        // Batas setDataPKB

        const AcehBesarData = data.filter(
          (item) => item.kabupaten === "Aceh Besar"
        );

        setDataAcehBesar(AcehBesarData[0].pkb2);

        const AcehJayaData = data.filter(
          (item) => item.kabupaten === "Aceh Jaya"
        );
        setDataAcehJaya(AcehJayaData[0].pkb2);

        const AcehSingkilData = data.filter(
          (item) => item.kabupaten === "Aceh Singkil"
        );
        setDataAcehSingkil(AcehSingkilData[0].pkb2);

        const PidieData = data.filter((item) => item.kabupaten === "Pidie");
        setDataPidie(PidieData[0].pkb2);

        const SubussalamData = data.filter(
          (item) => item.kabupaten === "Subussalam"
        );
        setDataSubussalam(SubussalamData[0].pkb2);

        const PidieJayaData = data.filter(
          (item) => item.kabupaten === "Pidie Jaya"
        );
        setDataPidieJaya(PidieJayaData[0].pkb2);

        const SabangData = data.filter((item) => item.kabupaten === "Sabang");
        setDataSabang(SabangData[0].pkb2);

        const GayoLuesData = data.filter(
          (item) => item.kabupaten === "Gayo Lues"
        );
        setDataGayoLues(GayoLuesData[0].pkb2);

        const BandaAcehData = data.filter(
          (item) => item.kabupaten === "Banda Aceh"
        );
        setDataBandaAceh(BandaAcehData[0].pkb2);

        const AcehBaratData = data.filter(
          (item) => item.kabupaten === "Aceh Barat"
        );
        setDataAcehBarat(AcehBaratData[0].pkb2);

        const SimeulueData = data.filter(
          (item) => item.kabupaten === "Simeulue"
        );
        setDataSimeulue(SimeulueData[0].pkb2);

        const AcehSelatanData = data.filter(
          (item) => item.kabupaten === "Aceh Selatan"
        );
        setDataAcehSelatan(AcehSelatanData[0].pkb2);

        const AcehBaratDayaData = data.filter(
          (item) => item.kabupaten === "Aceh Barat Daya"
        );
        setDataAcehBaratDaya(AcehBaratDayaData[0].pkb2);

        const NaganrayaData = data.filter(
          (item) => item.kabupaten === "Nagan Raya"
        );
        setDataNaganRaya(NaganrayaData[0].pkb2);

        const AcehTenggaraData = data.filter(
          (item) => item.kabupaten === "Aceh Tenggara"
        );
        setDataAcehTenggara(AcehTenggaraData[0].pkb2);

        // ================ batas state total kabupaten pak madan ========================

        const totalPkb = data.reduce((total, obj) => total + (obj.pkb || 0), 0);
        setDataPkb(totalPkb);

        const totalPdip = data.reduce(
          (total, obj) => total + (obj.pdip || 0),
          0
        );
        setDataPdip(totalPdip);

        const totalDemokrat = data.reduce(
          (total, obj) => total + (obj.demokrat || 0),
          0
        );
        setDataDemokrat(totalDemokrat);

        const totalPks = data.reduce((total, obj) => total + (obj.pks || 0), 0);
        setDataPks(totalPks);

        const totalHanura = data.reduce(
          (total, obj) => total + (obj.hanura || 0),
          0
        );
        setDataHanura(totalHanura);

        const totalPbb = data.reduce((total, obj) => total + (obj.pbb || 0), 0);
        setDataPbb(totalPbb);

        const totalPerindo = data.reduce(
          (total, obj) => total + (obj.perindo || 0),
          0
        );
        setDataPerindo(totalPerindo);

        const totalPartaiUmmat = data.reduce(
          (total, obj) => total + (obj.umat || 0),
          0
        );
        setDataPartaiUmmat(totalPartaiUmmat);

        const totalGerindra = data.reduce(
          (total, obj) => total + (obj.gerindra || 0),
          0
        );
        setDataGerindra(totalGerindra);

        const totalGolkar = data.reduce(
          (total, obj) => total + (obj.golkar || 0),
          0
        );
        setDataGolkar(totalGolkar);

        const totalPkn = data.reduce((total, obj) => total + (obj.pkn || 0), 0);
        setDataPkn(totalPkn);

        const totalPan = data.reduce((total, obj) => total + (obj.pan || 0), 0);
        setDataPan(totalPan);

        const totalPsi = data.reduce((total, obj) => total + (obj.psi || 0), 0);
        setDataPsi(totalPsi);

        const totalPpp = data.reduce((total, obj) => total + (obj.ppp || 0), 0);
        setDataPpp(totalPpp);

        // Top Ten Data Caleg
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const intervalId = setInterval(() => {
      getData();
      console.log(`Fetching data ${fetchCounter}`);
      setFetchCounter((prevCounter) => prevCounter + 1);
    }, 20000); // 60000 milidetik = 1 menit
  }, [setData]);

  // Nama Caleg
  const namaCaleg = {
    pkb1: "Irmawan, Sos.MM",
    pkb2: "M Ramadhana Rusli Bintang, M.M",
    pkb3: "Mahdalena, S.Hut",
    pkb4: "Teuku Hamzah Husen, S.E., M.M",
    pkb5: "Mujlizal, S.Ag",
    pkb6: "Suharni Bustami, S.Pd",
    pkb7: "Tgk. H. Syarifuddin, M.A",
    gerindra1: "Fadhlullah",
    pdip1: "Sofyan Dawood",
    pdip2: "Jamaluddin Idham, S.H., M.H",
    pdip5: "H. Ramli, MS",
    pdip7: "H. Dahlan Jamaluddin, S.I.P",
    golkar1: "Teuku Muhammad Nurlif, S.E",
    golkar4: "Drs. H. T. Zulkarnaini Ampon Bang",
    nasdem1: "Dr. Teuku Taufiqulhadi, M.Si",
    nasdem2: "H. Muslim Ayub, S.H., M.M",
    pks1: "Gufran",
    pks2: "Rafli Kande",
    pan5: "H. Nazaruddin Dek Gam",
    demokrat1: "H. Teuku Riefki Harsya, B.Sc., M.T",
    demokrat2: "H. T. Ibrahim, S.T., M.M",
    demokrat3: "Teuku Rassya Isslamay Pasya",
    ppp1: "Illiza Sa'aduddin Djamal, S.E",
  };

  return (
    <div className="grid grid-cols-2 grid-rows-1  gap-2">
      <div className="border border-gray-300 shadow-md">
        <div className="p-3 flex flex-col gap-y-5 ">
          <div className="font-bold text-gray-600 text-lg mb-2">
            Dapil 1 Partai PKB
          </div>

          <div className="grid grid-cols-3">
            <div className="font-bold text-base mb-1 align-middle text-right mr-3">
              Irmawan, Sos.MM
            </div>
            <div className="col-span-2">
              <ProgressBar
                now={DataPkb1}
                variant="primary"
                label={`${DataPkb1} Suara`}
                style={{ fontStyle: "bold", fontSize: "16px", height: "20px" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="font-bold text-base mb-1 text-right mr-3">
              M. Ramadhana Rusli Bintang, M.M
            </div>
            <div className="col-span-2">
              <ProgressBar
                now={DataPkb2}
                variant="success"
                label={`${DataPkb2} Suara`}
                style={{ fontStyle: "bold", fontSize: "16px", height: "20px" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="font-bold text-base mb-1 text-right mr-3">
              Mahdalena, S.Hut
            </div>
            <div className="col-span-2">
              <ProgressBar
                now={DataPkb3}
                variant="primary"
                label={`${DataPkb3} Suara`}
                style={{ fontStyle: "bold", fontSize: "16px", height: "20px" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="font-bold text-base mb-1 text-right mr-3">
              Teuku Hamzah Husen, S.E., M.M
            </div>
            <div className="col-span-2">
              <ProgressBar
                now={DataPkb4}
                variant="primary"
                label={`${DataPkb4} Suara`}
                style={{ fontStyle: "bold", fontSize: "16px", height: "20px" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="font-bold text-base mb-1 text-right mr-3">
              Mujlizal, S.Ag.
            </div>
            <div className="col-span-2">
              <ProgressBar
                now={DataPkb5}
                variant="primary"
                label={`${DataPkb5} Suara`}
                style={{ fontStyle: "bold", fontSize: "16px", height: "20px" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="font-bold text-base mb-1 text-right mr-3">
              Suharni Bustami, S.Pd
            </div>
            <div className="col-span-2">
              <ProgressBar
                now={DataPkb6}
                variant="primary"
                label={`${DataPkb6} Suara`}
                style={{ fontStyle: "bold", fontSize: "16px", height: "20px" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="font-bold text-base mb-1 text-right mr-3">
              Tgk. H. Syarifuddin,M.A
            </div>
            <div className="col-span-2">
              <ProgressBar
                now={DataPkb7}
                variant="primary"
                label={`${DataPkb7} Suara`}
                style={{ fontStyle: "bold", fontSize: "16px", height: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 shadow-md">
        <div className="p-3 flex flex-col gap-y-2 ">
          <div className="font-bold text-gray-600 text-lg mb-2">
            Total Suara Kab / Kota (M. Ramadhana Rusli Bintang, M.M)
          </div>

          <div className="grid grid-cols-2 gap-y-5">
            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 align-middle text-right mr-3">
                Aceh Besar
              </div>
              <div className="col-span-2">
                <ProgressBar
                  variant="primary"
                  now={DataAcehBesar}
                  label={`${DataAcehBesar} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                Banda Aceh
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataBandaAceh}
                  variant="success"
                  label={`${DataBandaAceh} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                Aceh Jaya
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataAcehJaya}
                  variant="primary"
                  label={`${DataAcehJaya} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                Aceh Barat
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataAcehBarat}
                  variant="primary"
                  label={`${DataAcehBarat} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                Aceh Singkil
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataAcehSingkil}
                  variant="primary"
                  label={`${DataAcehSingkil} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                Simeulue
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataSimeulue}
                  variant="primary"
                  label={`${DataSimeulue} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                Pidie
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataPidie}
                  variant="primary"
                  label={`${DataPidie} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                Aceh Selatan
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataAcehSelatan}
                  variant="primary"
                  label={`${DataAcehSelatan} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                Subussalam
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataSubussalam}
                  variant="primary"
                  label={`${DataSubussalam} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                Aceh Barat Daya
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataAcehBaratDaya}
                  variant="primary"
                  label={`${DataAcehBaratDaya} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                Pidie Jaya
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataPidieJaya}
                  variant="primary"
                  label={`${DataPidieJaya} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                Nagan Raya
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataNaganRaya}
                  variant="primary"
                  label={`${DataNaganRaya} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                Sabang
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataSabang}
                  variant="primary"
                  label={`${DataSabang} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                Aceh Tenggara
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataAcehTenggara}
                  variant="primary"
                  label={`${DataAcehTenggara} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                Gayo Lues
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataGayoLues}
                  variant="primary"
                  label={`${DataGayoLues} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 shadow-md">
        <div className="p-3 flex flex-col gap-y-2 ">
          <div className="font-bold text-gray-600 text-lg mb-2">
            10 Suara Caleg Terbanyak
          </div>
          <div className="grid grid-cols-1 gap-4">
            {dataTopTenCaleg.map((caleg, index) => (
              <div key={index} className="grid grid-cols-3 gap-y-2">
                <div className="font-bold text-base mb-1 align-middle text-right mr-3">
                  {namaCaleg[Object.keys(caleg)[0]]}
                </div>
                <div className="col-span-2">
                  <ProgressBar
                    variant={
                      Object.keys(caleg)[0] === "pkb2" ? "success" : "primary"
                    }
                    label={`${Object.values(caleg)[0]} Suara`}
                    style={{
                      fontStyle: "bold",
                      fontSize: "16px",
                      height: "20px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border border-gray-300 shadow-md">
        <div className="p-3 flex flex-col gap-y-2 ">
          <div className="font-bold text-gray-600 text-lg mb-2">
            Hasil Suara Partai
          </div>
          <div className="grid grid-cols-2 gap-y-5">
            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 align-middle text-right mr-3">
                PKB
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataPkb}
                  variant="primary"
                  label={`${DataPkb} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                GERINDRA
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataGerindra}
                  variant="primary"
                  label={`${DataGerindra} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                PDIP
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataPdip}
                  variant="primary"
                  label={`${DataPdip} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                GOLKAR
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataGolkar}
                  variant="primary"
                  label={`${DataGolkar} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                DEMOKRAT
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataDemokrat}
                  variant="primary"
                  label={`${DataDemokrat} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                PKS
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataPks}
                  variant="primary"
                  label={`${DataPks} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                PKN
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataPkn}
                  variant="primary"
                  label={`${DataPkn} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                HANURA
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataHanura}
                  variant="primary"
                  label={`${DataHanura} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                PAN
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataPan}
                  variant="primary"
                  label={`${DataPan} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                PBB
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataPbb}
                  variant="primary"
                  label={`${DataPbb} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                PSI
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataPsi}
                  variant="primary"
                  label={`${DataPsi} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                Perindo
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataPerindo}
                  variant="primary"
                  label={`${DataPerindo} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                PPP
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataPpp}
                  variant="primary"
                  label={`${DataPpp} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="font-bold text-base mb-1 text-right mr-3">
                Partai Ummat
              </div>
              <div className="col-span-2">
                <ProgressBar
                  now={DataPartaiUmmat}
                  variant="primary"
                  label={`${DataPartaiUmmat} Suara`}
                  style={{
                    fontStyle: "bold",
                    fontSize: "16px",
                    height: "20px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
