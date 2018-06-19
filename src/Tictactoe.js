import React, { Component } from "react";
class Tictactoe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer:"X",
      board: ["+", "+", "+","+", "+", "+","+", "+", "+"]
    }
  }
  handleClick(btnIndex) {
    var currBoard = this.state.board;
    var currentPlayer =this.state.currentPlayer;
    currBoard[btnIndex]=currentPlayer;
    if(currentPlayer==="X")
    {currentPlayer="O";}
    else{
      currentPlayer="X";
    }
    this.setState({
      currentPlayer:currentPlayer,
      board:currBoard
    })
    this.analyze()
  }
  analyze(){
    var b=this.state.board;
    if(b[0]===b[1] && b[1]===b[2] && b[0]!="+")
    {
      alert(b[0]+"has won")
    }
    else if (b[3] === b[4] && b[4] === b[5] && b[3] != "+") {
      alert(b[3] + "has won")
    }
    else if (b[6] === b[7] && b[7] === b[8] && b[6] != "+") {
      alert(b[6] + "has won")
    }
    else if (b[0] === b[3] && b[3] === b[6] && b[0] != "+") {
      alert(b[0] + "has won")
    }
    else if (b[1] === b[4] && b[4] === b[7] && b[1] != "+") {
      alert(b[1] + "has won")
    }
    else if (b[2] === b[5] && b[5] === b[8] && b[2] != "+") {
      alert(b[2] + "has won")
    }

    else if (b[0] === b[4] && b[4] === b[8] && b[0] != "+") {
      alert(b[0] + "has won")
    }

    else if (b[2] === b[4] && b[4] === b[6] && b[2] != "+") {
      alert(b[2] + "has won")
    }
    else if (b[0] != "+" && b[1] != "+" && b[2] != "+" && b[3] != "+" 
    && b[4] != "+" && b[5] != "+" && b[6] != "+" && b[7] != "+" && b[8] != "+")
    {
      alert("match tie")
    }
  }
  render() {
    return (
      <div>
        <h1>TIC TAC TOE</h1>
        {
          this.state.board.map((v,i) => {
            return(
              <span key={i}>
              {i%3==0? <br/>:null}
            <button onClick={() => { this.handleClick(i) }}>{v}</button>
            </span>
            );
          })
        }
      </div>

    );

  }
}
export default Tictactoe;