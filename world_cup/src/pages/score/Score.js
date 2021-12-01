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
            Score
        </div>
    )
}
