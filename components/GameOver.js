import './GameOver.css';


const GameOver = ({ retry, score }) => {
  return (
    <div className="elementos_inicio">
        <h1>Fim de jogo!</h1>
        <h2>
          A sua pontação foi: {score}
        </h2>
      <button onClick={retry}>Resetar Jogo</button>
    </div>
  );
};

export default GameOver;