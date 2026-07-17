class HomeController {
  async index(req, res) {
    res.json({
      msg: 'Rota Home',
    });
  }
}

export default new HomeController();
