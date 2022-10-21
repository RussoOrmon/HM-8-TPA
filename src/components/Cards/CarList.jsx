import styled from "styled-components"


 const ListStyle=styled.div `
 & li {
   width:300px;
   background: yellow;
   margin:20px auto;
   color: blue;
   font-size:20px;
   text-align:center;
   list-style:none;
 }
 & button{
   background: grey;
   margin-left:20px
 }
 `

const CarList=(props)=>{
 

   return (
      <ListStyle className="list-style">
           {props.carList.map((item) =>(
         <li key={item.id}> 
            {item.name} {item.year} 
            <button onClick={props.onDeleteCar(item.id)}> D e l e t e </button>
         </li>
))}
      </ListStyle>
   )
}
export default CarList;