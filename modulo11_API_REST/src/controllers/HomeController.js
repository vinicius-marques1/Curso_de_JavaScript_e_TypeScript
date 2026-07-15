import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Elieni',
      sobrenome: 'marques',
      email: 'elieni@email.com',
      idade: 140,
      peso: 80,
      altura: 1.70,
    });
    res.status(403).json(novoAluno);
  }
}

export default new HomeController();
