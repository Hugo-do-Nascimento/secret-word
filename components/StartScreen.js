import "./StartScreen.css";
import logoSecreta from '../assets/logoSecret (1).svg';

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <img src={logoSecreta} alt="Logo do jogo" />
        <p>Clique no botão abaixo para omeçar a jogar</p>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};

export default StartScreen;