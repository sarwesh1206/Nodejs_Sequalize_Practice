const companyController = require('../controllers/company');

module.exports = (test) => {
    test.get('/api',(req,res) => {
        res.status(200).send("Welcome to the api");
    })

    test.post('/api/company',companyController.create);
}