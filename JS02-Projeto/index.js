//Correto

const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./database/database");

const app = express();

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

const Article = require("./articles/Articles");
const Category = require("./categories/Category");

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(bodyParser.json());

connection
    .authenticate()
    .then(()=>{
        console.log("Conexão feita com sucesso");
    }).catch(()=>{
        console.log(error);
    });

app.use(express.static('public'));

app.use("/", categoriesController);
app.use("/", articlesController);

<<<<<<< HEAD

app.get("/", (req, res)=>{
    Article.findAll().then(articles => {
        res.render("index", { articles: articles });
        });
    });
=======
app.get("/", (req, res)=>{
        Article.findAll().then(articles =>{
            res.render("index", { articles: articles});
        });
});
>>>>>>> b0188d206c27b052bfa7768858918825873a69a7

app.listen(8080, () =>{
    console.log("RODANDO"); 
});

<<<<<<< HEAD

=======
>>>>>>> b0188d206c27b052bfa7768858918825873a69a7
