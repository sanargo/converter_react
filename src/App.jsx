import Card from "./components/Card";

import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="bg-slate-950 h-screen">
      <Card darkMode={darkMode} />
    </div>
  );
}

export default App;
