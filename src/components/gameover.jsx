export default function Gameover({winner, onResetGame}) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} Won!</p>}
            {!winner && <p>It's a Draw</p>}
            <p><button onClick={onResetGame}>Rematch!</button></p>
            {/* <button onClick={onResetGame}>Start new game</button> */}
        </div>
    )
}