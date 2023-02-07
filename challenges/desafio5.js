db.produtos.find({
  $or: [{ vendidos: 85 }, { curtidas: 36 }],
  },
  {
    _id: false,
    nome: true,
    curtidas: true,
    vendidos: true,
  });