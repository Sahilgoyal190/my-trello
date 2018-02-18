const BoardModel = require('./boards.entity');

const addNewBoard = function (newBoard, done) {
    const board = new BoardModel();
    board.id = newBoard.id;
    board.project_name = newBoard.project_name;
    board.description = newBoard.description;
    board.backlog = newBoard.backlog;
    board.doing = newBoard.doing;
    board.done = newBoard.done;
    board.lists = newBoard.lists;

    board.save(function (err, savedDoc) {
        if (err) {
            console.error("Error in adding new product, ERROR::", err);
            done(err);
        } else {
            done(null, savedDoc);
            return
        }
    });
}
const updateBoard = function (board_id, newBoard, done) {

    const update = {
        lists: newBoard.lists,
    }

    for(let i=0;i<newBoard.lists.length;i++){
        update[newBoard.lists[i].name] = newBoard.lists[i].taskList.length;
    }

    BoardModel.update({ id: board_id }, { $set: update }, function (err, updatedDoc) {
        if (err) {
            console.error("Error in updating board, ERROR::", err);
            done(err);
        } else {
            done(null, updatedDoc);
            return
        }
    });
}

const getAllBoards = function (done) {
    let query = {};
    let fieldOptions = null;
    let page = 1;
    let limit = 10;

    BoardModel
        .find(query)
        .select(fieldOptions)
        .exec((err, colln) => {
            if (err) {
                console.error('Error in finding products, ERROR::', err, ' queries for ', query);
                done(err);
                return;
            }
            done(null, colln);
        });
}

const getBoardByID = function (board_id, done) {
    const query = { "id": board_id };
    BoardModel
        .findOne(query)
        .exec((err, colln) => {
            if (err) {
                console.error('Error in finding products, ERROR::', err, ' queries for ', query);
                done(err);
                return;
            }
            done(null, colln);
        });
}

// const findProductByCode = function(productCode, done) {
//   // @TODO
//   let query = {"code": productCode}
//   ProductModel
//   .findOne(query)
//   .exec((err, res) => {
//       if (err) {
//           console.error('Error in finding products, ERROR::', err, ' queries for ', query);
//           done(err);
//           return;
//       }
//       done(null, res);
//   });
// }

// const submitNewReview = function(productCode, reviewObj, done) {
//   let query = { code: productCode };``
//   let modification = {
//     $push: {
//       reviews: {
//         rank: reviewObj.rank,
//         reviewer: reviewObj.reviewer,
//         comments: reviewObj.comments
//       }
//     }
//   };
//   let options = {
//     new: true, //return the updated document
//     upsert: false, //don't insert if not found
//   };

//   ProductModel.findOneAndUpdate(query, modification, options,
//     function(err, updatedDoc) {
//       if (err) {
//         console.error("Error in submitting review, ERROR::", err);
//         done(err)
//         return;
//       }
//       return done(null, updatedDoc);
//     });
// }

module.exports = {
    addNewBoard,
    getAllBoards,
    getBoardByID,
    updateBoard
    //   getProducts,
    //   submitNewReview,
    //   findProductByCode
}