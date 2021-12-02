import React, { useState, useEffect } from 'react'
import "./score.css"
import { Navigate } from 'react-router-dom';


export default function Score() {
    const [matches, setMatches] = useState([
        {   home: "Norway", 
            away: "Sweden",
            homeScore: 0, 
            awayScore: 0,
            started: false,
            scores: []
        },
        {   home: "Spain", 
            away: "Portugal",
            homeScore: 0, 
            awayScore: 0,
            started: false,
            scores: []
        },
    ])

    const [results, setResults] = useState([
        {   home: "Germany", 
            away: "England",
            homeScore: 2, 
            awayScore: 1,
            started: false,
            scores: []
        },
    ])


    // useEffect(() => {
    //     // We are looking at a tournament with 4 countries, all going to face each other.
    //     // Permutation/combination of all countries using 
    // })

    function endOrStartMatch(index, startOrFinish) {
        let allMatches = [...matches]
        if (startOrFinish === "start") {
            allMatches[index].started = true
        }
        else {
            allMatches[index].started = false
            let currentMatch = allMatches[index]
        }
        setMatches(allMatches)
    }

    function addScore(index, side) {
        let currentMatch = [...matches]
        currentMatch[index][side+"Score"] += 1
        setMatches(currentMatch)
    }


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
                        { results && results.map((eachResult, idx) => 
                        <div className="score-main-results-scores-each">
                            <div className="results-each-section-title">
                                <div>Home</div>
                                <div>-</div>
                                <div>Away</div>
                            </div>
                            <div className="results-each-section-number">
                                <div>{eachResult.homeScore}</div>
                                <div>{eachResult.awayScore}</div>
                            </div>
                            <div className="results-each-section-country">
                                <div>{eachResult.home}</div>
                                <div>{eachResult.away}</div>
                            </div>
                        </div>
                        )
                        }
                        
                    </div>
                </div>
                <div className="score-main-matches">
                { matches && matches.map((eachMatch, index) => 
                    <div className="score-main-matches-each">
                        {!eachMatch.started && <div><button className="score-main-matches-each-button" onClick={() => endOrStartMatch(index, "start")}>Start</button></div> }
                        <div className="score-main-matches-each-title"><div>Home</div><div>Away</div></div>
                        <div className="score-main-matches-each-info"><div>{eachMatch.home}</div><div>{eachMatch.homeScore}</div><div>{eachMatch.awayScore}</div><div>{eachMatch.away}</div></div>
                        <div className="score-main-matches-each-functionality">
                            <button id="home" onClick={(event) => addScore(index, event.target.id)}>+1 Home</button>
                            <button id="away" onClick={(event) => addScore(index, event.target.id)}>+1 Away</button>
                        </div>
                        {eachMatch.started && <div><button className="score-main-matches-each-button">End</button></div> }
                    </div>
                    )
                }
                </div>
            </div>
        </div>
    )
}
