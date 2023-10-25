const route = require("express").Router();

route.get("/", (req,res)=> {
    // res.json({
    //     message: "Home Page",
    // });

    res.render('home.ejs')
});
route.get("/contacts", (req,res)=> {
    // res.json({
    //     message: "Kontak Kami",
    // });

    res.render('ContactUs.ejs')
});
route.get("/abouts", (req,res)=> {
    // res.json({
    //     message: "Tentang Kami",
    // });

    res.render('AboutUs.ejs')
});
route.get("/supports", (req,res)=> {
    // res.json({
    //     message: "Tentang Kami",
    // });

    res.render('Support.ejs')
});
route.get("/prompts", (req,res)=> {
    // res.json({
    //     message: "Kontak Kami",
    // });

    res.render('PromptPage.ejs')
});
const stockRoutes = require("./stock");
route.use("/stocks",stockRoutes);
// stocknya harus pakai s di kata stock ("/stocks") . kalau gak pakai s jadinya error

module.exports = route;