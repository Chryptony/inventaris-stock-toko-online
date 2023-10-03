const { contact} = require("../models");

class ContactController {
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
  static getStockById(req, res) {
    //
    const id = Number(req.params,id);
    contact.findByPk(id)
        .then((result)=> {
            res.json(result);
    })
    .catch((result) => {
            result
            ? res.render('SubmitPage.ejs')
            : res.redirect('SubmitPage.ejs');
        });
}
static getContactById(req, res) {
    //
    const id = Number(req.params,id);
    contact.findByPk(id)
        .then((result)=> {
            res.json(result);
    })
    .catch((result) => {
            result
            ? res.render('ContactUs.ejs')
            : res.redirect('ContactUs.ejs');
        });
}
    static submitPage(req,res){
        
        res.render('SubmitPage.ejs')

    }
    static submit(req,res) {
        //
        const { name, type, quantity} =req.body;
        contact.create({
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
        contact.destroy({
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
        contact.findByPk(id)
          .then((contact) => {
            res.render("editPage.ejs", { contact });
          })
          .catch((err) => res.json(err));
      }
    static edit(req, res) {
        //
        const id = +req.params.id;
        const { name, type, quantity } = req.body;
        contact.update(
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
              res.redirect('/contact')
              : res.json('{ message: `Id ${id} has not been edited` }');
          })
          .catch((err) => {
            res.json(err);
          });
    }
    static editQuantityPage(req, res) {
        const id = +req.params.id;
        contact.findByPk(id)
          .then((contact) => {
            res.render("editQuantityPage.ejs", { contact });
          })
          .catch((err) => res.json(err));
      }
    static editQuantity(req, res) {
        //
        const id = +req.params.id;
        const { quantity } = req.body;
        contact.update(
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

module.exports = ContactController;