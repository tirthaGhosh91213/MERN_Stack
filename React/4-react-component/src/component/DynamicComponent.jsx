function DynamicComponent(){
  const name="Tirtha";
  const marks=[80,80,90,92,85];
  function calMarks(){
    let sum=0;
    for(let i=0;i<marks.length;i++){
      sum+=marks[i];
    }
    return sum/marks.length;
  }
  return <p>{name} score {calMarks()}% in the exam.</p>
}
export default DynamicComponent;