import Card from "./components/Card";
import { IoIosCloudyNight } from "react-icons/io";
import { useState } from "react";

function App() {
  //Dark mode
  const [darkMode, setDarkMode] = useState(false);

  //Using the input value for the formulas
  const [value, setValue] = useState("");
  const [valueLength, setvalueLength] = useState("");
  const [valueVolume, setvalueVolume] = useState("");
  const [valueMass, setvalueMass] = useState("");

  //Constant units for the formulas
  const meterToFeet = 3.2808;
  const literToGallon = 0.26417;
  const kiloToPound = 2.204;

  //The result of the input value
  const handleInputValue = (e) => {
    setValue(e.target.value);
  };

  //Formulas and the text for the <p> tag
  const length = () => {
    const meterFeet = value * meterToFeet;
    const feetMeter = value / meterToFeet;
    const result = `${value} meters = ${meterFeet.toFixed(
      3
    )} feet | ${value} feet = ${feetMeter.toFixed(3)} meters`;
    return result;
  };
  const volume = () => {
    let literGalon = value * literToGallon;
    let galonLiter = value / literToGallon;
    let result = `${value} liters = ${literGalon.toFixed(
      3
    )} gallons | ${value} gallons = ${galonLiter.toFixed(3)} liters`;
    return result;
  };
  const mass = () => {
    let kiloPound = value * kiloToPound;
    let poundKilo = value / kiloToPound;
    let result = `${value} kilos = ${kiloPound.toFixed(
      3
    )} pounds | ${value} pounds = ${poundKilo.toFixed(3)} kilos`;
    return result;
  };

  //The action of the button
  const handleBtn = () => {
    setvalueLength(length());
    setvalueVolume(volume());
    setvalueMass(mass());
  };

  return (
    <div className="bg-slate-950 h-screen ">
      <header className="w-full flex justify-center py-5 mb-10 md:mb-32">
        <IoIosCloudyNight
          className="text-gray-50 text-5xl cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        />
      </header>
      <Card
        darkMode={darkMode}
        inputValue={handleInputValue}
        handleClick={handleBtn}
        length={valueLength}
        volume={valueVolume}
        mass={valueMass}
      />
    </div>
  );
}

export default App;
