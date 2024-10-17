import Desktop from '../components/Desktop';
import Terminal from '../components/Terminal';
import Window from '../components/Window';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Desktop />
      <div className="absolute inset-0 p-8">
        <Window title="Terminal">
          <Terminal />
        </Window>
      </div>
    </div>
  );
}
