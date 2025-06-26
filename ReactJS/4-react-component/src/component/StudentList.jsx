function StudentList(){
  const student=['Tirtha','Mrittika','pudu','pudur ma ']
  return <ol>
    {
    student.map((student,index)=>{
      return <li key={index} >{student}</li>
    })
  }
  </ol>
}

export default StudentList;