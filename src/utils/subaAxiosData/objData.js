const ObjData = (data) => {
  const accumulatedData = data.reduce((acc, curr) => {
    return {
      pkb1: acc.pkb1 + curr.pkb1,
      pkb2: acc.pkb2 + curr.pkb2,
      pkb3: acc.pkb3 + curr.pkb3,
      pkb4: acc.pkb4 + curr.pkb4,
      pkb5: acc.pkb5 + curr.pkb5,
      pkb6: acc.pkb6 + curr.pkb6,
      pkb7: acc.pkb7 + curr.pkb7,
      gerindra1: acc.gerindra1 + curr.gerindra1,
      pdip1: acc.pdip1 + curr.pdip1,
      pdip2: acc.pdip2 + curr.pdip2,
      pdip5: acc.pdip5 + curr.pdip5,
      pdip7: acc.pdip7 + curr.pdip7,
      golkar1: acc.golkar1 + curr.golkar1,
      golkar4: acc.golkar4 + curr.golkar4,
      nasdem1: acc.nasdem1 + curr.nasdem1,
      nasdem2: acc.nasdem2 + curr.nasdem2,
      pks1: acc.pks1 + curr.pks1,
      pks2: acc.pks2 + curr.pks2,
      pks2: acc.pks2 + curr.pks2,
      pan5: acc.pan5 + curr.pan5,
      demokrat1: acc.demokrat1 + curr.demokrat1,
      demokrat2: acc.demokrat2 + curr.demokrat2,
      demokrat3: acc.demokrat3 + curr.demokrat3,
      ppp2: acc.ppp2 + curr.ppp2,
    };
  });
  return accumulatedData;
};

export default ObjData;
