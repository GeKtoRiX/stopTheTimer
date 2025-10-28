import { useState } from 'react';

export default function Player() {
  // Хук отслеживания состояния имени игрока(String).
  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  function handlePlayerName(event) {
    setSubmitted(false);
    // Отслеживания и изменение строки имени пользователя.
    setEnteredPlayerName(event.target.value);
  }
  // Хук отслеживания состояния нажатия кнопки Submitted(False).
  const [submitted, setSubmitted] = useState(false);
  function hadnleClickSubmitted() {
    // Отслеживание и изменение состоянки кнопки Submitted(Set Name).
    setSubmitted(true);
  }
  return (
    <section id='player'>
      <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input
          type='text'
          value={enteredPlayerName}
          onChange={handlePlayerName}
        />
        <button onClick={hadnleClickSubmitted}>Set Name</button>
      </p>
    </section>
  );
}
