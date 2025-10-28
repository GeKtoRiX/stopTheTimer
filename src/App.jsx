import Player from '@/components/Player';
import TimerChallenge from './components/TimerChallenge';

export default function App() {
  return (
    <>
      <Player />
      <div id='challenges'>
        <TimerChallenge title='easy' targetTime={1} />
        <TimerChallenge title='not Easy' targetTime={5} />
        <TimerChallenge title='Getting tough' targetTime={10} />
        <TimerChallenge title='Pros Only' targetTime={10} />
      </div>
    </>
  );
}
