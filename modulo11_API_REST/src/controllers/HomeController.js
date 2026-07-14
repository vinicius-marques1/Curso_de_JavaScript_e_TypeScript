class HomeController {
  index(req, res) {
    res.status(403).json({
      tudoCerto: true,
    });
  }
}

export default new HomeController();
