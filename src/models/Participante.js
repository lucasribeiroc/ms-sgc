const mongoose = require("mongoose");

const ParticipanteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  whatsapp: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  documento: {
    type: String,
    required: false,
  },
  chavePix: {
    type: String,
    required: false,
  },
  ativo: {
    type: Boolean,
    required: false,
  },
  dataInclusao: {
    type: Date,
    default: Date.now,
  },
  dataAlteracao: {
    type: Date,
    default: Date.now,
  },
});
const Participante = mongoose.model("Participante", ParticipanteSchema, "participantes");

module.exports = Participante;