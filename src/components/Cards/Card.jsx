import React, {useState} from "react";
import styled from "styled-components";
const FormControl=styled.div`
 

  & button{
   background-color: rgb(1, 1, 255);
   font-size: 20px;
   border-radius: 30px;
   border:3px solid;
   width: 120px;
   margin: 30px
}
  & button:hover{
   cursor: pointer;
   background-color: rgb(70, 249, 70);
}
& label{
   font-size: 20px;
   font-weigth:bold;
   color: ${props=>(props.isValid ?'': 'red') }
}
& input{
   font-size:20px;
   background:  ${props=>(props.isValid ?'green': 'red') } ;  
}
`


const Card=(props)=>{
   const [nameCar, setNameCar]=useState('');
   const [yearCar, setYearCar]=useState('')
  const [isValid, setIsValid]=useState(true)

   function addCars(event){
      if(event.target.value.trim().length>0){
         setIsValid(true);
      }
      setNameCar(event.target.value)
   }
   function addYears(event){
     if(event.target.value>0){
      setYearCar(true)
     }
      setYearCar(event.target.value)
   }
 function addSendHandler(event){
      event.preventDefault();
      if(nameCar.trim().length===0){
         setIsValid(false)         
         return;
      };
      if (yearCar.trim().length===0){
         setIsValid(false)
         return;
      }
      props.onSend(nameCar, yearCar)
   };
 return(
      <div>
         <form onSubmit={addSendHandler} action="" className="form-style">
         <FormControl isValid={isValid} >
            <label htmlFor="" className={`form-control ${isValid ?'' : 'invalid'}`} > Марка и  модель авто : </label>
            <input type="text" onChange={addCars } 
                   value={nameCar} className={`form-control ${isValid ?'' : 'invalid'}`} />
            
            <label htmlFor="" className={`form-control ${isValid ?'' : 'invalid'}`} > Год выпуска авто : </label>
            <input type="number" onChange={addYears }
               value={yearCar}  className={`form-control ${isValid ?'' : 'invalid'}`}/>
            <br/>
            <button type="submit" className="button"> П о и с к </button>
         </FormControl>

            {/*<label htmlFor="" className={`form-control ${isValid ?'' : 'invalid'}`} > Марка и  модель авто : </label>
            <input type="text" onChange={addCars } 
               value={nameCar} className={`form-control ${isValid ?'' : 'invalid'}`} />
            
            <label htmlFor="" className={`form-control ${isValid ?'' : 'invalid'}`} > Год выпуска авто : </label>
            <input type="number" onChange={addYears }
               value={yearCar}  className={`form-control ${isValid ?'' : 'invalid'}`}/>
            <br/>
            <button type="submit" className="button"> Поиск </button>*/}
         </form>
      </div>
   )
}

export default Card;