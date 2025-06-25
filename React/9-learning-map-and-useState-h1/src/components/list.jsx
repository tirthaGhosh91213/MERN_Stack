const List =({list})=>{


  // if(!list || list.length===0){
  //   return <h2> NO students deta is found </h2>
  // }

 return (
  <>
  {/* {studentArr} */}

  {!list||list.length===0?<h2> NO students deta is found </h2>:<h2> Student are here  </h2>}
  {list && list.length>0 && 

<ol className="text-green-500 list-disc ml-10 m-20">
  {list.map(item=><li>{item}</li>)}
</ol>}


{/* <ol className="text-green-500 list-disc ml-10 m-20">
  {[<li>Tirtha </li>,<li>mrittika</li>,<li>pudu </li>,<li>dharos</li>,<li>goru </li>,<li>gopu </li>]}
</ol> */}
</>
 )
  

}
export default List ;