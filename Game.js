function TicTacToe(){
  this.players = [];
  this.started = false;
  this.startPlayer = 1;
  this.winner=false;

  this.createEmptyBoard = function(){
    this.board = [];
    var i=0;
    while(i < 9){
      this.board.push(null);
      i++;
    }
  }

  this.startGame = function(){
    this.createEmptyBoard();
    this.started = true;
  }

  this.addPlayer = function( name ){
    if(this.players.length === 2) return false;
    this.players.push(name);

    if(this.players.length === 2) this.startGame();

    return this.players.length;
  }

  this.getPlayerName = function( player ){
    return this.players[player-1];
  }

  this.isGameStarted = function(){
    return this.started;
  }

  this.next = function(){
    var moves = this.board.filter(function(pos){
      return pos !== null;
    }).length;
    if(moves === 0) return this.startPlayer;
    if(moves % 2 === 1) return 2;
    return 1;
  }

  this.play = function(player, position){
    if( this.board[position] !== null ) return false;
    this.board[position] = player;
    return true;
  }
  this.checkBoard=function(){


    for (var i=0; i<9; i++){
      if (this.board[i]==null)  return false;


    }
    return true;
  }
  this.winner =function(board,player){
    if(this.board[0]==1 && this.board[1]==1 && this.board[2]==1) return 1;
    if(this.board[1]==2 && this.board[4]==2 && this.board[7]==2) return 2;
    if(this.board[2]==2 && this.board[4]==2 && this.board[6]==2) return 2;
// Thier is no winner
  if(  JSON.stringify(this.board)==JSON.stringify([ 1, 2, 1, 1, 2, 2, 2, 1, 2 ]))
    return false;
    // thier is no winner and board is full
    if (this.winner == false && (this.checkBoard())) return false;


  }
}

module.exports = TicTacToe;
