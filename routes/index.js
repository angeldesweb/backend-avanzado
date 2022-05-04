const { Router } = require('express');

const api = require('./api');
const adv = require('./adv');

const fs = require('fs');
const path = require('path');

const readme = fs.readFileSync(path.join(__dirname, '../README.md'),{encoding:'utf8'});
const leeme = fs.readFileSync(path.join(__dirname, '../LEEME.md'),{encoding:'utf8'});

const router = Router();

router.use('/api',api);
router.use('/anuncios',adv);

router.get('/', async (req,res) => {
  try {
    //const filename = path.join(__dirname, '../README.md'); 
    return res.render('index',{readme,leeme});
  } catch (error) {
    return res.render('error',{error,message:'Error del servidor'});
  }
});

router.get('/tags',(req,res) => {
  const tags = [
    {id:1,name:'work'},
    {id:2,name:'mobile'},
    {id:3,name:'lifestyle'},
    {id:4,name:'motor'}]
    res.render('tags',{tags})
})

module.exports = router;