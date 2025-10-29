import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  // Результат пользователя.
  const userLost = remainingTime <= 0;
  // Форматирование результата: 0.00
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  // Очки по результатам пользователя.
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  // Хук получения локального доступа к <dialog>
  const dialog = useRef();
  // Хук получения доступа к дочернему элементу родителем.
  useImperativeHandle(ref, () => {
    return {
      // Открытие диалогового окна.
      open() {
        dialog.current.showModal();
      },
    };
  });
  // Телепортирование элемента в div('modal')
  return createPortal(
    <dialog ref={dialog} className='result-modal'>
      {userLost && <h2>You LOST</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> seconds
      </p>
      <p>
        You stopped the timer with{' '}
        <strong>{formattedRemainingTime} seconds left</strong>!
      </p>
      <form method='dialog' onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
