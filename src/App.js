import { initJuno } from "@junobuild/core";
import { useEffect } from "react";
import { Auth } from "./Auth";


function App() {

  useEffect(() => {
    (async () => {
      await initJuno({
        satelliteId: "ruc7a-fiaaa-aaaal-ab4ha-cai",
      });
   
    })();
  }, []);

  return (
    <Auth />    
  );
}

export default App;
