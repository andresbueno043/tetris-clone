type Props = {
  onClick: () => void;
};

function Menu({ onClick }: Props) {
  return (
    <div>
      <button
        className="bg-white text-purple-950 px-4 py-2 rounded-lg border-purple-950 border-[2px] hover:bg-purple-600 hover:text-black transition-all duration-300 hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
        type="button"
        onClick={onClick}
      >
        {' '}
        Play Tetris{' '}
      </button>
    </div>
  );
}

export default Menu;
