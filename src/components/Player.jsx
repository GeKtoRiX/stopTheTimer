import { useState, useRef } from 'react';

export default function Player() {
  // Ссылка useRef на <input/> имени игрока.
  const playerName = useRef();
  // Хук отслеживания состояния имени игрока(String).
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // Функция Изменение состояния имени игрока(String).
  function handleClickSubmitted() {
    setEnteredPlayerName(playerName.current.value);
  }
  return (
    <section id='player'>
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type='text' />
        <button onClick={handleClickSubmitted}>Set Name</button>
      </p>
    </section>
  );
}
