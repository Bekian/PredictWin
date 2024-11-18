import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import './NFLSchedule.css';
import React from 'react';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

import React, { useState } from 'react';
import teamData from './teamData'; // Assuming you have a data file with team information

function NFLSchedule() {
    const completedGame = {
        homeTeam: {
            name: 'Eagles',
            score: 18,
            record: '7-2',
        },
        awayTeam: {
            name: 'Commanders',
            score: 18,
            record: '7-3',
        },
        winProbability: 73,
        finalResult: 'Eagles Win',
    };

    const upcomingGames = [
        {
            homeTeam: {
                name: 'Rams',
                record: '4-5',
            },
            awayTeam: {
                name: 'Patriots',
                record: '3-7',
            },
            winProbability: 64,
            time: 'Sun 1:00 PM',
        },
    ];

    const [currentTab, setCurrentTab] = useState('games');
    const [selectedGame, setSelectedGame] = useState(null);

    return (
        <div className="nfl-schedule">
            {/* Breaking News Marquee */}
            <div className="breaking-news">
                <p>Breaking News: Patrick Mahomes is on track for a record-breaking season!</p>
            </div>

            <header>
                <img src="nfl-logo.png" alt="NFL Logo" className="nfl-logo" />
                <nav>
                    <ul className="nav-links">
                        <li>
                            <button
                                id="games-link"
                                onClick={() => setCurrentTab('games')}
                                className={currentTab === 'games' ? 'active' : ''}
                            >
                                Games
                            </button>
                        </li>
                        <li>
                            <button
                                id="leaders-link"
                                onClick={() => setCurrentTab('leaders')}
                                className={currentTab === 'leaders' ? 'active' : ''}
                            >
                                Leaders
                            </button>
                        </li>
                    </ul>
                </nav>
                <span className="week-label">Week 11</span>
            </header>

            {/* Completed Game Section */}
            <section className="completed-game">
                <h2>Completed Game</h2>
                <div className="game-details">
                    <div className="team">
                        <img
                            src={teamData[completedGame.homeTeam.name].logo}
                            alt={teamData[completedGame.homeTeam.name].fullName}
                        />
                        <p>{teamData[completedGame.homeTeam.name].fullName} ({completedGame.homeTeam.record})</p>
                        <p className="score">{completedGame.homeTeam.score}</p>
                    </div>
                    <div className="vs">
                        <p>Vs</p>
                    </div>
                    <div className="team">
                        <img
                            src={teamData[completedGame.awayTeam.name].logo}
                            alt={teamData[completedGame.awayTeam.name].fullName}
                        />
                        <p>{teamData[completedGame.awayTeam.name].fullName} ({completedGame.awayTeam.record})</p>
                        <p className="score">{completedGame.awayTeam.score}</p>
                    </div>
                    <div className="win-probability">
                        <p>WIN PROBABILITY</p>
                        <p>{completedGame.winProbability}%</p>
                    </div>
                    <div className="final-result">
                        <p>FINAL: {completedGame.finalResult}</p>
                    </div>
                </div>
            </section>

            {/* Render Games Section or Leaders Section */}
            {currentTab === 'games' && (
                <section className="upcoming-games">
                    <h2>Upcoming Games</h2>
                    {upcomingGames.map((game, index) => (
                        <div className="game" key={index} onClick={() => setSelectedGame(game)}>
                            <div className="team">
                                <img
                                    src={teamData[game.homeTeam.name].logo}
                                    alt={teamData[game.homeTeam.name].fullName}
                                />
                                <p>{teamData[game.homeTeam.name].fullName} ({game.homeTeam.record})</p>
                            </div>
                            <div className="vs">
                                <p>Vs</p>
                            </div>
                            <div className="team">
                                <img
                                    src={teamData[game.awayTeam.name].logo}
                                    alt={teamData[game.awayTeam.name].fullName}
                                />
                                <p>{teamData[game.awayTeam.name].fullName} ({game.awayTeam.record})</p>
                            </div>
                            <div className="win-probability">
                                <p>WIN PROBABILITY</p>
                                <p>{game.winProbability}%</p>
                            </div>
                            <div className="game-time">
                                <p>{game.time}</p>
                            </div>
                        </div>
                    ))}
                </section>
            )}

            {currentTab === 'leaders' && (
                <section className="leaders">
                    <h2>League Leaders</h2>
                    {/* Add leader information here */}
                </section>
            )}

            {/* Selected Game Modal */}
            {selectedGame && (
                <div className="selected-game-modal">
                    <div className="modal-content">
                        <button className="close-modal" onClick={() => setSelectedGame(null)}>X</button>
                        <h3>Selected Game Details</h3>
                        <div className="team">
                            <img
                                src={teamData[selectedGame.homeTeam.name].logo}
                                alt={teamData[selectedGame.homeTeam.name].fullName}
                            />
                            <p>{teamData[selectedGame.homeTeam.name].fullName} ({selectedGame.homeTeam.record})</p>
                            <p className="score">{selectedGame.homeTeam.score}</p>
                        </div>
                        <div className="vs">
                            <p>Vs</p>
                        </div>
                        <div className="team">
                            <img
                                src={teamData[selectedGame.awayTeam.name].logo}
                                alt={teamData[selectedGame.awayTeam.name].fullName}
                            />
                            <p>{teamData[selectedGame.awayTeam.name].fullName} ({selectedGame.awayTeam.record})</p>
                            <p className="score">{selectedGame.awayTeam.score}</p>
                        </div>
                        <div className="win-probability">
                            <p>WIN PROBABILITY</p>
                            <p>{selectedGame.winProbability}%</p>
                        </div>
                        <div className="game-time">
                            <p>{selectedGame.time}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NFLSchedule;
