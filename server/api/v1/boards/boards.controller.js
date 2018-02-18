const boardsService = require('./boards.services');

const addNewBoard = function (newBoard, done) {
    boardsService.addNewBoard(newBoard, done);
}

const updateBoard = function (board_id,newBoard, done) {
    boardsService.updateBoard(board_id,newBoard, done);
}

const getAllBoards = function (done) {
    boardsService.getAllBoards(done);
}

const getBoardByID = function (board_id, done) {
    boardsService.getBoardByID(board_id, done);
}

module.exports = {
    addNewBoard,
    getAllBoards,
    getBoardByID,
    updateBoard
}