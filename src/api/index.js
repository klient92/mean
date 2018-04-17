'use strict';

var todos = require('../../mock/todo.json')
var express = require('express');

var router = express.Router();

router.get('/todos', function(req, res){
	res.json({todos:todos});
});


module.exports = router;