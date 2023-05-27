import Game from '@/components/Game';

export default function App() {
  return (
    <div className="w-screen flex items-center justify-center h-screen bg-purple-900 text-white">
      <Game rows={20} cols={20} />
    </div>
  );
}
