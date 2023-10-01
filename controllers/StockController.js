const { stock} = require("../models");

class StockController {
    static getStock(req,res) {
        //
        stock.findAll()
            .then((stock) => {
                // res.json(stock);
                res.render('stock.ejs', {stock})
            })
            .catch((err)=> {
                res.json(err);
            });
    }
    static getHome(req,res) {
        //
        home.getHome()
            .then((home) => {
                // res.json(home);
                res.redirect('/home')
            })
            .catch((err)=> {
                res.json(err);
            });
    }
    static getStockById(req, res) {
        //
        const id = Number(req.params,id);
        stock.findByPk(id)
            .then((result)=> {
                res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
    }

    static submitPage(req,res){
        
        res.render('SubmitPage.ejs')

    }
    static submit(req,res) {
        //
        const { name, type, quantity} =req.body;
        stock.create({
            name,
            type,
            quantity,
        })
            .then((result) => {
                // res.json(result);
                res.redirect('/stocks');
            })
            .catch((err) => {
                res.json(err);
            });
    }
    static remove(req, res) {
        //
        const id = +req.params.id;
        console.log(id)
        stock.destroy({
            where:{id},
        })
        .then((result) => {
            result
                ? res.redirect('/stocks')
                : res.json({ message: `Id ${id} cannot be deleted`});
        })
        .catch((err) => {
            res.json(err);
        });
    }
    static editPage(req, res) {
        const id = +req.params.id;
        stock.findByPk(id)
          .then((stock) => {
            res.render("editPage.ejs", { stock });
          })
          .catch((err) => res.json(err));
      }
    static edit(req, res) {
        //
        const id = +req.params.id;
        const { name, type, quantity } = req.body;
        stock.update(
          {
            name,
            type,
            quantity,
          },
          {
            where: { id },
          }
        )
          .then((result) => {
            result[0]
              ? 
              // res.json({ message: `Id ${id} has been edited` })
              res.redirect('/stocks')
              : res.json({ message: `Id ${id} has not been edited` });
          })
          .catch((err) => {
            res.json(err);
          });
    }
}

module.exports = StockController;