import { useState, useRef } from 'react';
import ResultModal from './ResultModal.jsx';

export default function TimerChallenge({ title, targetTime }) {
  // Хук связывания с таймером(setInterval()).
  const timer = useRef();
  // Хук связывания с диалоговым окном(<ResultModal/>).
  const dialog = useRef();
  // Хук отслеживания оставшегося времени, отведенного на задание(в миллисекундах).
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  // Отслеживание активности таймера.
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // Истечение времени на задание.
  if (timeRemaining <= 0) {
    // Деактивация таймера.
    clearInterval(timer.current);
    // Открытие диалогового окна.
    dialog.current.open();
  }

  // Функция начала работы таймера.
  function handleStart() {
    // Логирование оставшегося времени с шагом -10мс.
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }
  // Функция окончания работы таймера.
  function handleStop() {
    // Отключение таймера.
    clearInterval(timer.current);
    dialog.current.open();
  }
  // Функция сброса времени на задание.
  function handleReset() {
    // Восстановление таймера к изначальному значению.
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? 'Stop' : 'Start'} Challendge
        </button>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
