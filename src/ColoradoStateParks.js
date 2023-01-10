import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde"
import {trees, wildlife, elevation} from "./parks/RockyMountain"

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  console.log(trees)
  wildlife()
  elevation()

  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <MesaVerde />
      <MesaVerde />
      <MesaVerde />
    </div>
  )
}

export default ColoradoStateParks