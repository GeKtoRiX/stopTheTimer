import { useState, useRef } from 'react';

export default function Player() {
  // Хук связывания элемента <input/>
  const playerName = useRef();
  // Хук отслеживания состояния имени игрока(null).
  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  // Функция Изменение состояния имени игрока(String).
  function handleClickSubmitted() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }
  return (
    <section id='player'>
      <h2>
        Welcome {!enteredPlayerName ? 'unknown entity' : enteredPlayerName}
      </h2>
      <p>
        <input ref={playerName} type='text' />
        <button onClick={handleClickSubmitted}>Set Name</button>
      </p>
    </section>
  );
}
