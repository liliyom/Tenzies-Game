import React from "react";
import Box from "./components/box";

const App = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#06141c] via-[#062432] to-[#0a3a4a] flex flex-col items-center px-4 py-10">

      <div className="text-center mb-8">

        <div className="inline-block mb-3 px-4 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-bold tracking-[0.3em]">
          🎮 MINI DICE GAME
        </div>

        <h1 className="text-5xl sm:text-6xl font-black tracking-widest text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
          TENZIES
        </h1>

        <div className="w-24 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-cyan-400 to-green-400"></div>

        <p className="mt-5 max-w-md mx-auto text-sm sm:text-base text-gray-300 leading-relaxed">
          Roll until all the dice are the same.
          <span className="block">
            Click a die to freeze its value between rolls.
          </span>
        </p>

      </div>
    
      <Box />

      <p className="mt-6 text-xs text-gray-500 tracking-wider">
        ROLL • FREEZE • MATCH • WIN
      </p>

    </div>
  );
};

export default App;