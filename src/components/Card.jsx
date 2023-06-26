function Card({ darkMode, inputValue, handleClick, length, volume, mass }) {
  return (
    <section className="w-80 bg-white font-inter mx-auto md:w-1/4">
      <div className="bg-violet-600 flex flex-col items-center px-5 py-6">
        <h1 className="text-white font-bold text-xl text-center">
          Metric/Imperial Unit Conversion
        </h1>
        <input
          type="number"
          name="unit"
          id="unit"
          className="bg-transparent p-2 border border-gray-400 rounded-md w-24 h-16 my-5 text-white font-bold text-5xl text-center "
          onChange={inputValue}
        />
        <button
          className="bg-white p-2 w-24 h-8 rounded-md flex justify-center items-center text-sm"
          onClick={handleClick}
        >
          Convert
        </button>
      </div>
      <div className={darkMode ? "dark" : ""}>
        <div className="bg-gray-200 flex flex-col items-center py-8 gap-5 dark:bg-slate-900">
          <div className="bg-white w-11/12 p-3 text-center dark:bg-slate-800">
            <h3 className="text-indigo-950 font-bold my-2 dark:text-violet-300">
              Length (Meter/Feet)
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{length}</p>
          </div>
          <div className="bg-white w-11/12 p-3 text-center dark:bg-slate-800">
            <h3 className="text-indigo-950 font-bold my-2 dark:text-violet-300">
              Volume (Liters/Gallons)
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{volume}</p>
          </div>
          <div className="bg-white w-11/12 p-3 text-center dark:bg-slate-800">
            <h3 className="text-indigo-950 font-bold my-2 dark:text-violet-300">
              Mass (Kilograms/Pounds)
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{mass}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
