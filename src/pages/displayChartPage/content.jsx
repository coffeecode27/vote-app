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
  const [fetchCounter, setFetchCounter] = useState(0);
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
    const fetchDataCaleg = async () => {
      try {
        const hasilToptenCaleg = await topTenCalegHandler();
        setDataTopTenCaleg(hasilToptenCaleg);
        console.log(dataTopTenCaleg);
        // Lakukan sesuatu dengan dataCa
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
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
          (item) => item?.kabupaten === "Aceh Besar"
        );

        setDataAcehBesar(AcehBesarData[0]?.pkb2);

        const AcehJayaData = data.filter(
          (item) => item?.kabupaten === "Aceh Jaya"
        );
        setDataAcehJaya(AcehJayaData[0]?.pkb2);

        const AcehSingkilData = data.filter(
          (item) => item?.kabupaten === "Aceh Singkil"
        );
        setDataAcehSingkil(AcehSingkilData[0]?.pkb2);

        const PidieData = data.filter((item) => item?.kabupaten === "Pidie");
        setDataPidie(PidieData[0]?.pkb2);

        const SubussalamData = data?.filter(
          (item) => item?.kabupaten === "Subussalam"
        );
        setDataSubussalam(SubussalamData[0]?.pkb2);

        const PidieJayaData = data.filter(
          (item) => item?.kabupaten === "Pidie Jaya"
        );
        setDataPidieJaya(PidieJayaData[0]?.pkb2);

        const SabangData = data.filter((item) => item?.kabupaten === "Sabang");
        setDataSabang(SabangData[0]?.pkb2);

        const GayoLuesData = data.filter(
          (item) => item?.kabupaten === "Gayo Lues"
        );
        setDataGayoLues(GayoLuesData[0]?.pkb2);

        const BandaAcehData = data.filter(
          (item) => item?.kabupaten === "Banda Aceh"
        );
        setDataBandaAceh(BandaAcehData[0]?.pkb2);

        const AcehBaratData = data.filter(
          (item) => item?.kabupaten === "Aceh Barat"
        );
        setDataAcehBarat(AcehBaratData[0]?.pkb2);

        const SimeulueData = data.filter(
          (item) => item?.kabupaten === "Simeulue"
        );
        setDataSimeulue(SimeulueData[0]?.pkb2);

        const AcehSelatanData = data.filter(
          (item) => item?.kabupaten === "Aceh Selatan"
        );
        setDataAcehSelatan(AcehSelatanData[0]?.pkb2);

        const AcehBaratDayaData = data.filter(
          (item) => item?.kabupaten === "Aceh Barat Daya"
        );
        setDataAcehBaratDaya(AcehBaratDayaData[0]?.pkb2);

        const NaganrayaData = data.filter(
          (item) => item?.kabupaten === "Nagan Raya"
        );
        setDataNaganRaya(NaganrayaData[0]?.pkb2);

        const AcehTenggaraData = data.filter(
          (item) => item?.kabupaten === "Aceh Tenggara"
        );
        setDataAcehTenggara(AcehTenggaraData[0]?.pkb2);

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

    fetchDataCaleg();
    getData();

    const intervalId = setInterval(() => {
      getData();
      fetchDataCaleg();
      setFetchCounter((prevCounter) => prevCounter + 1);
      console.log(`Fetching data ${fetchCounter}`);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [setData, fetchCounter]);

  // Nama Caleg
  const namaCaleg = {
    // Partai Kebangkitan Bangsa (PKB)
    pkb1: "Irmawan, Sos. MM",
    pkb2: "Muhammad Ramadhana Rusli Bintang, M.M",
    pkb3: "Mahdalena, S.Hut",
    pkb4: "Teuku Hamzah Husen, S.E., M.M",
    pkb5: "Mujlisal, S.Ag",
    pkb6: "drh Hasnidar",
    pkb7: "Tgk. H. Syarifuddin, M.A",

    // Partai Gerakan Indonesia Raya (Gerindra)
    gerindra1: "Fadhlullah",
    gerindra2: "Dra. Hj. ZULHAFAH",
    gerindra3: "Drs. HASANUDDIN DARJO, M.M.",
    gerindra4: "Ir. H. MAULISMAN HANAFIAH",
    gerindra5: "Ir. MUDDATSTSIR KAMIL",
    gerindra6: "ERLIN, S.E.",
    gerindra7: "ZAITUN MHD",

    // Partai Demokrasi Indonesia Perjuangan (PDI-P)
    pdip1: "Sofyan Dawood",
    pdip2: "Jamaluddin Idham, S.H., M.H",
    pdip3: "YUNIATI",
    pdip4: "RIFKI TAJUDDIN, S.E.",
    pdip5: "H. Ramli, MS",
    pdip6: "PUSPITA FIRDA OKTYANI",
    pdip7: "H. Dahlan Jamaluddin, S.I.P",

    // Partai Golongan Karya (Golkar)
    golkar1: "Teuku Muhammad Nurlif, S.E",
    golkar2: "H. M. SALIM FAKHRY, S.E., M.M.",
    golkar3: "HJ. SAMSIAR, S.E.",
    golkar4: "Drs. H. T. Zulkarnaini Ampon Bang",
    golkar5: "Dr. H. M. SALEH.P, S.Pd.I., M.Si.",
    golkar6: "NENI RUMIANTI DAULAY, S.E.",
    golkar7: "T. M. ALI TAR",

    // Partai NasDem
    nasdem1: "Dr. Teuku Taufiqulhadi, M.Si",
    nasdem2: "H. Muslim Ayub, S.H., M.M",
    nasdem3: "Hj. Dra. Mediati Hafni Hanum, S.H., M.Kn., CPM.",
    nasdem4: "TEUNGKU RAZUAN, S.H.",
    nasdem5: "T. Iskandar Daod, S.E., M.Si.",
    nasdem6: "Cut Sri Mainita",
    nasdem7: "Suprijal Yusuf, S.H.",

    // Partai Buruh
    buruh1: "Habibi Inseun",
    buruh2: "Mahadi Manik, S.Si., M.Si.",
    buruh3: "Rosmana Dewi",
    buruh4: "Sayed Masykur, S.T.",
    buruh5: "Zarlina",
    buruh6: "Hariyanto Latuheru",
    buruh7: "Siti Sundari",

    // Partai Gelombang
    gelora1: "AZMI FAJRI USMAN",
    gelora2: "TGK KHALIDI AL-DJADAMI",
    gelora3: "KASUMIYATI",
    gelora4: "NASRUDDIN AWL",
    gelora5: "EDY SUPENO",
    gelora6: "FANIA VIVI HIKMAWATI, S.E",
    gelora7: "MOHARRIADI",

    // Partai Keadilan Sejahtera (PKS)
    pks1: "Gufran",
    pks2: "Rafli Kande",
    pks3: "FRIESKA INDAH SARI, S.E.",
    pks4: "BUHARI SELIAN",
    pks5: "SAID MUSTAJAB, S.Sos.",
    pks6: "Ns. SINTA NELYSA, S.Kep.",
    pks7: "Sriwahyuni",

    // Partai Kebangkitan Nusantara (PKN)
    pkn1: "YUDI KURNIA",
    pkn2: "Amrinur Oktjaya",
    pkn3: "Hj Seri peraini",
    pkn4: "Yanti octavia",
    pkn5: "NELY INDRAWATI",
    pkn6: "NOLA NOLIA",

    // Partai Hati Nurani (Hanura)
    hanura1: "Prof. Dr. BACHTIAR ALY, M.A.",
    hanura2: "Dr. H. ASFIFUDDIN, S.H., M.H.",
    hanura3: "FITRIAH ISPANDI",
    hanura4: "AL AMIN, S.H.",
    hanura5: "INTAN KHAIRANI",
    hanura6: "SRI ARIANA NINGSIH",
    hanura7: "ADNAN YACOB, S.E.",

    // Partai Garda Republik Indonesia (Garda)
    garda1: "CHAIDIR FURRAZI NUR",
    garda2: "PUTRI CHOIRUN NISYA",
    garda3: "EGI KURNIA PUTRA",
    garda4: "BENING LARASATI",
    garda5: "T Iskandar S.T",
    garda6: "SETYANI LARASATI",

    // Partai Amanat Nasional (PAN)
    pan1: "H. Nazaruddin Dek Gam",
    pan2: "MOHD. ALFATAH, S.Ag.",
    pan3: "Ir. Hj. FERRY SORAYA, M.S.I.E",
    pan4: "Dewi marlina",
    pan5: "Muhclis zulkifli",
    pan6: "Gita Isna Yunita",
    pan7: "ZULFITRI ARIFIN",

    // Partai Bulan Bintang (PBB)
    pbb1: "H. ERLI HASIM, S.H., S.Ag., M.I.Kom.",
    pbb2: "Dr. TGK. H. MUHAMMAD YUS",
    pbb3: "NURATIAH HANIM, A.Md.Kep.",
    pbb4: "Salawati Dahlan M S, S.E.",
    pbb5: "HAMZAH, S.Sos.I.",
    pbb6: "Heri Ramunandar, S.H.",
    pbb7: "SALAMUN, S.E.",

    // Partai Demokrat
    demokrat1: "H. TEUKU RIEFKY HARSYA, B.Sc., M.T.",
    demokrat2: "H. T. IBRAHIM, S.T., M.M.",
    demokrat3: "NURHAYATI",
    demokrat4: "Khairullah",
    demokrat5: "Tgk. HARMEN NURIQMAR, S.S.",
    demokrat6: "RIZQA ZANIA",
    demokrat7: "Teuku Rassya Isslamay Pasya",

    // Partai Solidaritas Indonesia (PSI)
    psi1: "Qausar Harta Yudana",
    psi2: "AL-QUDRI, S.T.P.",
    psi3: "Ercut Nova Sari",
    psi4: "ARIEF MARTHA RAHADYAN",
    psi5: "Ismaidi",
    psi6: "Suci Nur Maizaroh",
    psi7: "Slamet Satyawati",

    // Partai Perindo
    perindo1: "Mayjen. TNI (Purn.) ABDUL HAFIL FUDDIN, S.H., S.I.P., M.H.",
    perindo2: "AZWAR RAMLI",
    perindo3: "Intan Monika",
    perindo4: "DENY ZULFIKAR",
    perindo5: "Abdon Siagian",
    perindo6: "Siwi asri mopri ratna",
    perindo7: "DWI AGUS SETIYORINI",

    // Partai Persatuan Pembangunan (PPP)
    ppp1: "AMRI M ALI",
    ppp2: "Illiza Sa'aduddin Djamal, S.E",
    ppp3: "HILMAN ISMAIL METAREUM, S.E.",
    ppp4: "H. ANSARI IDRUS SAMBO, S.H.",
    ppp5: "HARMANIAR",
    ppp6: "SAID SAIFUL AL MAHDALI",
    ppp7: "Cut rana wati",

    // Partai Ummat
    umat1: "H. JAMAI SUNI, S.E., M.M.",
    umat2: "H. ANAS BIDIN NYAK SYECH, S.Ag.",
    umat3: "Cut Evita",
    umat4: "Drs. USTAZ ARSYAD AHJON",
    umat5: "Drs. SAIFUDDIN SAMIN",
    umat6: "FARIDAH, S.E.",
    umat7: "EFFRIDANDA M., S.E.",
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
                max={100000}
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
                max={100000}
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
                max={100000}
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
                max={100000}
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
                max={100000}
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
                max={100000}
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
                max={100000}
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
                  max={80000}
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
                  max={80000}
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
                  max={80000}
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
                  max={80000}
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
                  max={80000}
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
                  max={80000}
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
                  max={80000}
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
                  max={80000}
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
                  max={80000}
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
                  max={80000}
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
                  max={80000}
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
                  max={80000}
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
                  max={80000}
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
                  max={80000}
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
                  max={80000}
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
        <div className="p-3 flex flex-col gap-y-2">
          <div className="font-bold text-gray-600 text-lg mb-2">
            10 Suara Caleg Terbanyak
          </div>
          <div className="grid grid-cols-1 gap-4">
            {dataTopTenCaleg.length > 0 && // Pengecekan apakah dataTopTenCaleg tidak kosong
              dataTopTenCaleg.map((caleg, index) => {
                const calegKey = Object.keys(caleg)[0];
                const calegValue = Object.values(caleg)[0];

                // Pengecekan jika nilai Caleg bukan 0
                if (calegValue !== 0) {
                  return (
                    <div key={index} className="grid grid-cols-3 gap-y-2">
                      <div className="font-bold text-base mb-1 align-middle text-right mr-3">
                        {namaCaleg[calegKey]}
                      </div>
                      <div className="col-span-2">
                        <ProgressBar
                          max={100000}
                          variant={calegKey === "pkb2" ? "success" : "primary"}
                          label={`${calegValue} Suara`}
                          style={{
                            fontStyle: "bold",
                            fontSize: "16px",
                            height: "20px",
                          }}
                        />
                      </div>
                    </div>
                  );
                }
                // Jika nilai Caleg adalah 0, maka jangan tampilkan
                return null;
              })}
            {/* Tampilkan pesan jika tidak ada data Caleg dengan nilai selain 0 */}
            {!dataTopTenCaleg.some(
              (caleg) => Object.values(caleg)[0] !== 0
            ) && <div className="text-gray-500">Tidak ada data Caleg.</div>}
          </div>
        </div>
      </div>

      <div className="border border-gray-300  shadow-md">
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
                  max={200000}
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
                  max={200000}
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
                  max={200000}
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
                  max={200000}
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
                  max={200000}
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
                  max={200000}
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
                  max={200000}
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
                  max={200000}
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
                  max={200000}
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
                  max={200000}
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
                  max={200000}
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
                  max={200000}
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
                  max={200000}
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
                  max={200000}
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
