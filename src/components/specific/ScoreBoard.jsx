const ScoreBoard = () => {
  return (
    <div className="bg-gray-500 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center mb-4">Scoreboard</h2>
      <div className="flex justify-between items-center">
        <div className="text-center">
          <h3 className="text-lg font-bold text-green-600">Correct</h3>
          <p className="text-2xl">5</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-red-600">Incorrect</h3>
          <p className="text-2xl">5</p>
        </div>
      </div>
      <img
        src="/trophCup.png"
        alt="Trophy"
        className="mt-4 mx-auto w-20"
      />
    </div>
  );
};

export default ScoreBoard;
