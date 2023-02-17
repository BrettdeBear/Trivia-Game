function PointsDisplay({points}) {

    

    return (
        <div className="pointsDisplay">
            <h2>Score</h2>
            <p className={points < 0 ? "negativePoints" : "positivePoints"}>${points}</p>
        </div>
    )
}

export default PointsDisplay;