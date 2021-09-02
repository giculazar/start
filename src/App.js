import React from 'react';
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';
import './App.css';
import styled from "styled-components";

export default function App() {

const StyleApp = styled.div `
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  }

  .app {
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    background: #478aef;
    color: #cadbf5;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Varela Round', sans-serif;
  }

  .info {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 50px;
  }

  .info h2 {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
  }

  .wins-losses {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-family: 'Varela Round', sans-serif;
    font-size: 16px;
    text-align: center;
    line-height: 1;
  }

  .wins,
  .losses {
    display: flex;
    align-items: center;
  }

  .wins .number,
  .losses .number {
    font-size: 52px;
    margin-right: 5px;
  }

  .wins {
    margin-right: 30px;
  }

  .wins .number {
    color: #5dc674;
  }

  .losses .number {
    color: #da516f;
  }

  .choices {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    grid-gap: 20px;
    font-family: 'Varela Round', sans-serif;
    font-size: 18px;
    color: #5f99f0;
  }

  .choices > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .vs {
    width: 100px;
    font-size: 100px;
    opacity: 0.25;
    transform: rotate(-0.1turn);
    pointer-events: none;
  }

  .choices button {
    cursor: pointer;
    font-size: 50px;
    margin-bottom: 20px;
    padding: 20px;
    background: #fff;
    outline: none;
    border: none;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    transition: 0.1s ease all;
  }

  .choices button:hover {
    transform: scale(1.07);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .choices .rock {
    background: #f7941a;
  }

  .choices .rock path {
    fill: #815116;
  }

  .choices .paper {
    background: #8dc351;
  }

  .choices .paper path {
    fill: #3f5e1b;
  }

  .choices .scissors {
    background: #7c79ea;
  }

  .choices .scissors path {
    fill: #2f2c8f;
  }

  .choices .computer-choice {
    background: #333;
    color: #bbb;
  }

  .choices .computer-choice path {
    fill: #bbb;
  }

  .game-state {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    line-height: 1.3;
    font-family: 'Varela Round', sans-serif;
  }

  .game-state.win > div {
    background: rgb(141, 195, 81);
    color: rgb(226, 243, 206);
  }
  .game-state.win svg path {
    fill: rgb(226, 243, 206);
  }

  .game-state.draw > div {
    background: rgb(0, 0, 0);
    color: rgb(88, 88, 88);
  }
  .game-state.draw svg path {
    fill: rgb(88, 88, 88);
  }

  .game-state.lose > div {
    background: rgb(218, 81, 111);
    color: rgb(240, 169, 184);
  }
  .game-state.lose svg path {
    fill: rgb(240, 169, 184);
  }

  .game-state > div {
    width: 60%;
    text-align: center;
    padding: 0 40px;
    border-radius: 10px;
    z-index: 1;
    color: #fff;
    font-size: 60px;
  }

  .game-state-content {
    display: flex;
    justify-content: center;
  }

  .game-state-content p {
    margin: 40px 15px 30px 0;
    display: flex;
    align-items: center;
  }

  .game-state-content svg {
    width: 100px;
  }

  .game-state button {
    margin-bottom: -5%;
    width: 100%;
    display: block;
    border: none;
    border-radius: 10px;
    padding: 25px;
    font-size: 30px;
    cursor: pointer;
    flex-shrink: 1;
    background: #fa65ff;
    color: #fdedfd;
  }

`

  return (
      <StyleApp>
    <div className="app">
      {/* information goes here */}
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>

        {/* wins vs losses stats */}
        <div className="wins-losses">
          <div className="wins">
            <span className="number">0</span>
            <span className="text">Wins</span>
          </div>

          <div className="losses">
            <span className="number">0</span>
            <span className="text">Losses</span>
          </div>
        </div>
      </div>

      {/* the popup to show win/loss/draw */}
      {/* <div className="game-state"></div> */}

      <div className="choices">
        {/* choices captions */}
        <div>You</div>
        <div />
        <div>Computer</div>

        {/* buttons for my choice */}
        <div>
          <button className="rock">
            <Rock />
          </button>
          <button className="paper">
            <Paper />
          </button>
          <button className="scissors">
            <Scissors />
          </button>
        </div>

        <div className="vs">vs</div>
        {/* show the computer's choice */}
        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>
    </div>
      </StyleApp>
  );
}
