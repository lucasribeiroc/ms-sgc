const MovimentacaoToken = require("../models/MovimentacaoToken");

class TokensController {
  static async saldoParticipante(req, res) {
    try {
      const participanteId = req.user.id;;
      const movimentacoes = await MovimentacaoToken.find({
        participante: participanteId,
        status: "ativo",
      });

      let totalTokens = 0;
      movimentacoes.forEach((movimentacao) => {
        totalTokens += movimentacao.valor * movimentacao.tipoMovimentacao;
      });

      res.send({ saldo: totalTokens });
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  static async saldoTotal(req, res) {
    try {
      const movimentacoes = await MovimentacaoToken.find({ status: "ativo" });

      let saldoTotal = 0;
      movimentacoes.forEach((movimentacao) => {
        saldoTotal += movimentacao.valor * movimentacao.tipoMovimentacao;
      });

      res.send({ saldo: saldoTotal });
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}

module.exports = TokensController;
