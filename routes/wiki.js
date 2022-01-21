const express = require('express');
const router = express.Router();
const {addPage} = require('../views')
const {Page} = require('../models')

// function titleToSlug(title)
// {
//   title.replace(/\s+/g, '_').replace(/\W/g, '');
// }
router.get('/', async(req, res, next) => {
  try {
    res.send('wiki');
  } catch (error) {next(error)}
});

router.post('/', async(req, res, next) => {
  const {title, content} = req.body;
  try {
    const page = await Page.create({
      title : title,
      content : content,
      slug : title.replace(/\s+/g, '_').replace(/\W/g, '')
    })

    res.redirect('/');

  } catch (error) {next(error)}
});

router.get('/add/', async(req, res, next) => {
  try {
    res.send(addPage());
  } catch (error) {next(error)}
});

module.exports = router;
