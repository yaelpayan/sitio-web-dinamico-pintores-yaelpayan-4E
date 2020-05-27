const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname+ '/views/partials/');

app.use(express.static(__dirname + '/public'));

app.get('/',(req, res)=>{
    res.render('index',{
        autor:'Yael Payan Rey 4.-E',
        year: new Date().getFullYear(),
        title: 'Inicio'
    });
});

app.get('/vince',(req, res)=>{
    res.render('vince',{
        autor:'Yael Payan Rey 4.-E',
        year: new Date().getFullYear(),
        title: 'Vincent van Gogh'
    });
});

app.get('/leo',(req, res)=>{
    res.render('leonardo',{
        autor:'Yael Payan Rey 4.-E',
        year: new Date().getFullYear(),
        title: 'Leonardo da Vinci'
    });
});

app.get('/dali',(req, res)=>{
    res.render('dali',{
        autor:'Yael Payan Rey 4.-E',
        year: new Date().getFullYear(),
        title: 'Salvador Dalí'
    });
});

app.get('/picasso',(req, res)=>{
    res.render('picasso',{
        autor:'Yael Payan Rey 4.-E',
        year: new Date().getFullYear(),
        title: 'Pablo Picasso'
    });
});

app.listen(3000, ()=>{
    console.log("escuchando al puerto 3000")
});