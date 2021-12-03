import React, { useState, useEffect } from "react";
import "./score.css";
import { Link } from "react-router-dom";

export default function Score() {
    // nested list of countries facing each other on World Cup
    const [countries] = useState([
        ["Mexico", "Canada"], 
        ["Spain", "Brazil"], 
        ["Germany", "France"], 
        ["Uruguay", "Italy"],
        ["Argentina", "Australia"]
    ])
    // state for creating matches, home and away team
    const [homeTeamName, setHomeTeamName] = useState("")
    const [awayTeamName, setAwayTeamName] = useState("")
    
    // Matches which has not yet finished.
    const [matches, setMatches] = useState([]);
    
    // Results of matches finished
    const [results, setResults] = useState([]);

    // Creates match objects on component open
    useEffect(() => {
        let createMatches = []
        for (let i = 0; i < countries.length; i++) {
            createMatches = [...createMatches, 
                {
                    home: countries[i][0],
                    away: countries[i][1],
                    homeScore: 0,
                    awayScore: 0,
                    totalScore: 0,
                    started: false,
                }
            ]
        }
        setMatches(createMatches)
    }, [countries])
    
    // I anticipated that the matches objects will come from an api, but I still made it possible to add matches on the website.
	// Could also make a seperate function for setting matches (setMatches) since we are using it multiple times.
	// We only use it twice for this project, and therefore left it like it is.
    function addCountries(event) {
		event.preventDefault();
        setMatches([...matches,
            {
                home: homeTeamName,
                away: awayTeamName,
                homeScore: 0,
                awayScore: 0,
                totalScore: 0,
                started: false
            }
        ])
        setHomeTeamName("")
        setAwayTeamName("")
    }

  // I made all the functionality in one function to make it easier to understand,
  // however, it would be better option to make seperate function for sorting and removing from state array.
  function endOrStartMatch(index, startOrFinish) {
    let allMatches = [...matches]; // copying all matches not yet finished
    // if start button is clicked, we change the state "started" on given index from parameter
    if (startOrFinish === "start") {
      allMatches[index].started = true;
    }
    // if end button is clicked, we (*):
    else {
      // * change state "started" to false for current match
      allMatches[index].started = false;
      // saving the current game
      let currentMatch = allMatches[index];
      // * deletes the current match from state "matches"
      allMatches.splice(index, 1);
      // * appending current match to front of results as sortResultsByTotalScore
      // * reverse sorting sortResultsByTotalScore based on totalScore
      const sortResultsByTotalScore = [currentMatch, ...results].sort((a, b) =>
        a.totalScore > b.totalScore ? -1 : 1
      );
      // updating state "results"
      setResults(sortResultsByTotalScore);
    }
    // updating state "matches" not yet finished
    setMatches(allMatches);
  }

  // addScore function to +1 or -1 to either "side" (parameter) and +1 or -1 to totalScore
  function addScore(index, side, addOrRemove) {
    let allMatches = [...matches];
    switch (addOrRemove) {
        case 'add':
            allMatches[index][side + "Score"] += 1
            allMatches[index].totalScore += 1
            break;
        case 'remove':
            if (allMatches[index][side + "Score"] !== 0) {
                allMatches[index][side + "Score"] -= 1
                allMatches[index].totalScore -= 1
            }
            break;
        default:
            break
    }
    setMatches(allMatches);
  }

  return (
    <div className="page-score">
      <header className="page-score-header">
        <Link to="/">World Cup Matches</Link>
        <form onSubmit={(event) => addCountries(event)}>
            <p>Add matches</p>
            <input type="text" required={true} id="home" value={homeTeamName} placeholder="Home Team" onChange={(event) => setHomeTeamName(event.target.value)}></input>
            <input type="text" required={true} id="away" value={awayTeamName} placeholder="Away Team" onChange={(event) => setAwayTeamName(event.target.value)}></input>
            <button type="submit">Create</button>
        </form>
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
                    onClick={(event) => addScore(index, event.target.id, "add")}
                  >
                    +1 Home
                  </button>
                  <button
                    id="away"
                    disabled={!eachMatch.started}
                    onClick={(event) => addScore(index, event.target.id, "add")}
                  >
                    +1 Away
                  </button>
                </div>
                <div className="score-main-matches-each-functionality">
                  <button
                    id="home"
                    disabled={!eachMatch.started}
                    onClick={(event) => addScore(index, event.target.id, "remove")}
                  >
                    -1 Home
                  </button>
                  <button
                    id="away"
                    disabled={!eachMatch.started}
                    onClick={(event) => addScore(index, event.target.id, "remove")}
                  >
                    -1 Away
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
