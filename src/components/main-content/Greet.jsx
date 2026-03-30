import React, { useState } from 'react'

const Greet = () => {

  const [naam, setNaam] = useState(() => localStorage.getItem("userName") || "");
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputVal.trim();
    if (name) {
      localStorage.setItem("userName", name);
      setNaam(name);
    }
  };

  // If no name saved yet, show a name entry screen
  if (!naam) {
    return (
      <div className='mt-20 sm:mt-40 mb-10 p-6 flex flex-col items-center gap-6'>
        <p className='text-[#c4c7c5] text-4xl sm:text-6xl title'>What's your name?</p>
        <form onSubmit={handleSubmit} className='flex gap-3'>
          <input
            autoFocus
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Enter your name..."
            className='px-5 py-3 rounded-full bg-[#f0f4f9] text-black text-lg outline-none border-none w-64'
          />
          <button
            type="submit"
            className='px-6 py-3 rounded-full bg-[#1c78e5] text-white text-lg cursor-pointer hover:bg-[#1560c0] transition-colors'
          >
            Let's go
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className='mt-20 sm:mt-40 mb-10 text-[#c4c7c5] text-4xl sm:text-7xl p-6'>
      <p className='text-4xl sm:text-6xl title'>Hi, {naam} 👋</p>
      <p>Where should we start?</p>
    </div>
  )
}

export default Greet