import { useState } from "react";
import "./App.css";
import Card from "./components/Cards/Card";
import CarList from "./components/Cards/CarList";

function App() {
   const [carList, setCarList]=useState([]);

   function transfer(name,year){
      
      setCarList((prevList)=>{
         return[...prevList,
         {name:name,
          year:year,
          id: Math.random().toString(),
         },
        ];
      })
   }
   function deleteCar(id){
      return()=>{
         const updatedCars=carList.filter((item)=> item.id !==id)
         setCarList (updatedCars)
      }
   }
  return (
    <div className="App">
      <Card onSend={transfer} />
      <CarList carList={carList} onDeleteCar={deleteCar}  />
    </div>
  );
}
export default App;