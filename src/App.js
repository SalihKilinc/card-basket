import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";

export const App = () => {
  const [product, setproduct] = useState([{
    id: 1,
    title: "Asus Anakart",
    image: "https://picsum.photos/id/0/5000/3333",
    info:"4.2 GHZ 3*USB 3.0",
    adet: 1

  }, 
  {
    id: 2,   title: "Ram",   image: "https://picsum.photos/id/103/2592/1936",   info:"256 GB KINGSTON",  adet: 1}, 
  
    {id: 3, title: "Ekran Karti",  image: "https://picsum.photos/id/129/4910/3252", info:"Nvdia Geoforce 1050",  adet: 1}, 
    
    { id: 4,  title: "Monitor",  image: "https://picsum.photos/id/121/1600/1067", info:"17",  adet: 1}
     
     ]);

     const [basket, setbasket] = useState([])

  return (
    <div className="App" >
      <h1>REACT SEPET UYGULAMASI</h1>
      <h2>LISTELENEN URUNLER</h2>

      <div className="urunler">
{
  product.map((item,index)=>
  
  {
    return(
    <Card 
    onClick={()=>{
      const arr=[...basket];
if(arr.findIndex((i)=>{
return item.id===i.id;
})===-1)
{
  arr.push(item);
  setbasket(arr);
}
else{
  arr.map((item1)=>{
if(item1.id===item.id)
{
  return (item.adet+=1)
}
setbasket(arr)
  })
}
     
      console.log(basket)
    }}
     key={index} 
     title={item.title} image={item.image} info={item.info}/>
   ) })
}


     
      </div>

  

    </div>
  )
}
export default App;

//if yapisi ile tiklandiginda ekleme yapma ozelligi verildi
//