import React from 'react'
import "./score.css"
import { Navigate } from 'react-router-dom';


export default function Score() {
    

    return (
        <div className="page-score">
            <header className="page-score-header">
                <button onClick={<Navigate to="/"/>}>
                    World Cup Matches
                </button>
            </header>
            <div className="page-score-main">
                <div className="score-main-results">
                    <div className="score-main-results-title">Results</div>
                    <div className="score-main-results-scores">
                        <div className="score-main-results-scores-each">
                            <div className="results-each-section-title">
                                <div>Home</div>
                                <div>-</div>
                                <div>Away</div>
                            </div>
                            <div className="results-each-section-number">
                                <div>1</div>
                                <div>2</div>
                            </div>
                            <div className="results-each-section-country">
                                <div>Norway</div>
                                <div>Sweden</div>
                            </div>
                            <div className="results-each-section-history">
                                <div>History</div>
                                <div className="results-each-section-country-history"> 
                                    <div>11:35</div> <div>Goal</div> <div>Norway</div> 
                                </div>
                                <div className="results-each-section-country-history"> 
                                    <div>30:16</div> <div>Goal</div> <div>Sweden</div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="score-main-matches">
                    <div className="score-main-matches-each">
                        <div><button className="score-main-matches-each-button">Start</button></div>
                        <div className="score-main-matches-each-time"><div>Time</div><div>13:54</div></div>
                        <div className="score-main-matches-each-title"><div>Home</div><div>Away</div></div>
                        <div className="score-main-matches-each-info"><div>Norway</div><div>0</div><div>0</div><div>Sweden</div></div>
                        <div className="score-main-matches-each-functionality">
                            <button>+1 Home</button>
                            <button>+1 Away</button>
                        </div>
                        <div><button className="score-main-matches-each-button">End</button></div>
                    </div>
                    <div className="score-main-matches-each">
                        <div><button className="score-main-matches-each-button">Start</button></div>
                        <div className="score-main-matches-each-time"><div>Time</div><div>13:54</div></div>
                        <div className="score-main-matches-each-title"><div>Home</div><div>Away</div></div>
                        <div className="score-main-matches-each-info"><div>Norway</div><div>0</div><div>0</div><div>Sweden</div></div>
                        <div className="score-main-matches-each-functionality">
                            <button>+1 Home</button>
                            <button>+1 Away</button>
                        </div>
                        <div><button className="score-main-matches-each-button">End</button></div>
                    </div>
                    <div className="score-main-matches-each">
                        <div><button className="score-main-matches-each-button">Start</button></div>
                        <div className="score-main-matches-each-time"><div>Time</div><div>13:54</div></div>
                        <div className="score-main-matches-each-title"><div>Home</div><div>Away</div></div>
                        <div className="score-main-matches-each-info"><div>Norway</div><div>0</div><div>0</div><div>Sweden</div></div>
                        <div className="score-main-matches-each-functionality">
                            <button>+1 Home</button>
                            <button>+1 Away</button>
                        </div>
                        <div><button className="score-main-matches-each-button">End</button></div>
                    </div>
                    <div className="score-main-matches-each">
                        <div><button className="score-main-matches-each-button">Start</button></div>
                        <div className="score-main-matches-each-time"><div>Time</div><div>13:54</div></div>
                        <div className="score-main-matches-each-title"><div>Home</div><div>Away</div></div>
                        <div className="score-main-matches-each-info"><div>Norway</div><div>0</div><div>0</div><div>Sweden</div></div>
                        <div className="score-main-matches-each-functionality">
                            <button>+1 Home</button>
                            <button>+1 Away</button>
                        </div>
                        <div><button className="score-main-matches-each-button">End</button></div>
                    </div>
                    <div className="score-main-matches-each">
                        <div><button className="score-main-matches-each-button">Start</button></div>
                        <div className="score-main-matches-each-time"><div>Time</div><div>13:54</div></div>
                        <div className="score-main-matches-each-title"><div>Home</div><div>Away</div></div>
                        <div className="score-main-matches-each-info"><div>Norway</div><div>0</div><div>0</div><div>Sweden</div></div>
                        <div className="score-main-matches-each-functionality">
                            <button>+1 Home</button>
                            <button>+1 Away</button>
                        </div>
                        <div><button className="score-main-matches-each-button">End</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
