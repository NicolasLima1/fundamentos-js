const http = require("http");

const getTurma = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let resultado = "";

      res.on("data", (dados) => {
        // Evento que vai ser disparado quando os dados estiverem disponíveis
        resultado += dados;
      });

      res.on("end", () => {
        // Evento que vai ser disparado quando todos os dados estiverem disponíveis
        try {
          resolve(JSON.parse(resultado));
        } catch (e) {
          reject(e);
        }
      });
    });
  });
};

let obterAlunos = async () => {
    const turmaA = await getTurma('A');
    const turmaB = await getTurma('B');
    const turmaC = await getTurma('C');

    return [].concat(turmaA, turmaB, turmaC);
};


obterAlunos()
.then(alunos => alunos.map(a => a.nome))
.then(nomes => console.log(nomes));