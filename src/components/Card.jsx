function Card({ darkMode }) {
  return (
    <section className="w-80 bg-white font-inter md:w-96 ">
      <div className="bg-indigo-600 flex flex-col items-center px-5 py-6">
        <h1 className="text-white font-bold text-xl text-center">
          Metric/Imperial Unit Conversion
        </h1>
        <input
          type="number"
          name="unit"
          id="unit"
          className="bg-transparent p-2 border border-white rounded-md w-20 h-14 my-5"
        />
        <button className="bg-white p-2 w-fit h-8 rounded-md flex justify-center items-center">
          Convert
        </button>
      </div>
      <div className={darkMode ? "dark" : ""}>
        <div className="bg-gray-50 dark:bg-slate-900">
          <div className="bg-white">
            <h3></h3>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
