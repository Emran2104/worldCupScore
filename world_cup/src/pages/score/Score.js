import React, { useState, useEffect } from "react";
import "./score.css";
import { Navigate } from "react-router-dom";

export default function Score() {
  const [matches, setMatches] = useState([
    {
      home: "Mexico",
      away: "Canada",
      homeScore: 0,
      awayScore: 0,
      totalScore: 0,
      started: false,
    },
    {
      home: "Spain",
      away: "Brazil",
      homeScore: 0,
      awayScore: 0,
      totalScore: 0,
      started: false,
    },
    {
      home: "Germany",
      away: "France",
      homeScore: 0,
      awayScore: 0,
      totalScore: 0,
      started: false,
    },
    {
      home: "Uruguay",
      away: "Italy",
      homeScore: 0,
      awayScore: 0,
      totalScore: 0,
      started: false,
    },
    {
      home: "Argentina",
      away: "Australia",
      homeScore: 0,
      awayScore: 0,
      totalScore: 0,
      started: false,
    },
  ]);

  const [results, setResults] = useState([]);

  function endOrStartMatch(index, startOrFinish) {
    let allMatches = [...matches];
    if (startOrFinish === "start") {
      allMatches[index].started = true;
    } else {
      allMatches[index].started = false;
      let currentMatch = allMatches[index];
      allMatches.splice(index, 1);
      const sortResultsByTotalScore = [currentMatch, ...results].sort(
        (a, b) => a.totalScore > b.totalScore ? -1: 1
      );
      setResults(sortResultsByTotalScore);
    }
    setMatches(allMatches);
  }

  function addScore(index, side) {
    let allMatches = [...matches];
    allMatches[index][side + "Score"] += 1;
    allMatches[index].totalScore += 1;
    setMatches(allMatches);
  }

  return (
    <div className="page-score">
      <header className="page-score-header">
        <button onClick={<Navigate to="/" />}>World Cup Matches</button>
      </header>
      <div className="page-score-main">
        <div className="score-main-results">
          <div className="score-main-results-title">Results</div>
          <div className="score-main-results-scores">
            {results &&
              results.map((eachResult, idx) => (
                <div className="score-main-results-scores-each" key={idx}>
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
              ))}
          </div>
        </div>

        <div className="score-main-matches">
          {matches &&
            matches.map((eachMatch, index) => (
              <div className="score-main-matches-each" key={index}>
                {!eachMatch.started && (
                  <div>
                    <button
                      className="score-main-matches-each-button"
                      onClick={() => endOrStartMatch(index, "start")}
                    >
                      Start
                    </button>
                  </div>
                )}
                <div className="score-main-matches-each-title">
                  <div>Home</div>
                  <div>Away</div>
                </div>
                <div className="score-main-matches-each-info">
                  <div>{eachMatch.home}</div>
                  <div>{eachMatch.homeScore}</div>
                  <div>{eachMatch.awayScore}</div>
                  <div>{eachMatch.away}</div>
                </div>
                <div className="score-main-matches-each-functionality">
                  <button
                    id="home"
                    disabled={!eachMatch.started}
                    onClick={(event) => addScore(index, event.target.id)}
                  >
                    +1 Home
                  </button>
                  <button
                    id="away"
                    disabled={!eachMatch.started}
                    onClick={(event) => addScore(index, event.target.id)}
                  >
                    +1 Away
                  </button>
                </div>
                {eachMatch.started && (
                  <div>
                    <button
                      className="score-main-matches-each-button"
                      onClick={() => endOrStartMatch(index, "end")}
                    >
                      End
                    </button>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
