const router = require('express').Router();
const BoardCtrl = require('./boards.controller');

/**
 * Effective URL is POST /products/
 *
 * This API adds a new product to the catalog
 */
router.post('/', function(req, res) {
  try {
    const newBoard = req.body;
    BoardCtrl.addNewBoard(newBoard, function(err, result) {
      if (err) {
        console.error('Error in adding new product, ERROR::', err);
        // res.status(400).send(err);
        res.status(400).send({ error: 'Something went wrong, please check and tray again..!' });
        return;
      }
      res.status(201).send(result);
      return;
    })
  } catch (err) {
    console.error('Unexpected error in adding new product, ERROR::', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});


router.post('/:board_id', function(req, res) {
  try {
    const newBoard = req.body;
    const board_id = req.params.board_id;
    BoardCtrl.updateBoard(board_id, newBoard, function(err, result) {
      if (err) {
        console.error('Error in adding new product, ERROR::', err);
        // res.status(400).send(err);
        res.status(400).send({ error: 'Something went wrong, please check and tray again..!' });
        return;
      }
      res.status(201).send(result);
      return;
    })
  } catch (err) {
    console.error('Unexpected error in adding new product, ERROR::', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});

/**
 * Effective URL is GET /products/
 *
 * This API finds product(s) in the catalog
 */
router.get('/', function(req, res) {
  try {
    BoardCtrl.getAllBoards(function(err, result) {
      if (err) {
        console.error('Error in GET of products, ERROR::', err);
        res.status(400).send({error: 'Something went wrong, please try later..!'});
        return;
      }
      res.send(result);
      return;
    })
  } catch (err) {
    console.error('Unexpected error in GET of products, ERROR::', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});


router.get('/:board_id', function(req, res) {
    const board_id = req.params.board_id
  try {
    BoardCtrl.getBoardByID(board_id,function(err, result) {
      if (err) {
        console.error('Error in GET of products, ERROR::', err);
        res.status(400).send({error: 'Something went wrong, please try later..!'});
        return;
      }
      res.send(result);
      return;
    })
  } catch (err) {
    console.error('Unexpected error in GET of products, ERROR::', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});



module.exports = router;