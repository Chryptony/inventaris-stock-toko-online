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
    static getContact(req,res) {
      //
      contact.getContact()
          .then((contact) => {
              // res.json(contact);
              res.redirect('/contacts',)
          })
          .catch((err)=> {
              res.json(err);
          });
    }
    static getAboutUs(req,res) {
      //
      about.getAboutUs()
          .then((about) => {
              // res.json(about);
              res.redirect('/abouts',)
          })
          .catch((err)=> {
              res.json(err);
          });
    }
    static getSupport(req,res) {
      //
      support.getSupport()
          .then((support) => {
              // res.json(support);
              res.redirect('/supports',)
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
    .catch((result) => {
            result
            ? res.render('SubmitPage.ejs')
            : res.redirect('SubmitPage.ejs');
        });
    }
    static promptPage(req, res) {
      res.render("promptPage.ejs")
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
                result
                ? res.redirect('/stocks')
                : res.redirect('SubmitPage.ejs');
            })
            .catch((result) => {
                result
                ? res.render('SubmitPage.ejs')
                : res.redirect('SubmitPage.ejs');
            });
    }
    static cancel(req,res) {
        //
        res.render('Stock.ejs')
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
              : res.json('{ message: `Id ${id} has not been edited` }');
          })
          .catch((err) => {
            res.json(err);
          });
    }
    static editQuantityPage(req, res) {
        const id = +req.params.id;
        stock.findByPk(id)
          .then((stock) => {
            res.render("editQuantityPage.ejs", { stock });
          })
          .catch((err) => res.json(err));
      }
    static editQuantity(req, res) {
        //
        const id = +req.params.id;
        const { quantity } = req.body;
        stock.update(
          {
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
              : res.render('{ message: `Id ${id} has not been edited` }');
          })
          .catch((err) => {
            res.json(err);
          });
    }
}

module.exports = StockController;