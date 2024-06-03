import Header from './components/Header';

import './App.css';
import AddForm from './components/AddForm';
import Item from './components/Item';
import { useState , useEffect} from "react" 


function App() {

  const [tasks,setTasks] = useState(JSON.parse(localStorage.getItem("taskLocal"))||[])
  const [title,setTitle] = useState("")
  const[editId,setEditId] = useState(null);
  const [theme,setTheme] = useState("light");

  // //format 1 
  // useEffect(()=>{
  //   console.log("Call use Fx in APp componnet");
  // })

  // //format 2 
  // useEffect(()=>{
  //   console.log("Call use Fx in APp componnet");
  // },[])

  //format 3 
  useEffect(()=>{
    localStorage.setItem("taskLocal",JSON.stringify(tasks))
  },[tasks]) // aim to state tasks



  function deleteTask(id){
    const result = tasks.filter(item=> item.id !== id)
    console.log(result)
    setTasks(result)
  }

  function saveTask(e) {
    e.preventDefault(); 
    console.log("Save Data ");
    if(!title){
      alert(
        "Plelase inter"
      )
    }else if(editId){
        const updateTaks = tasks.map((item) => {
          if(item.id === editId){
            return{...item,title:title}
          }
          return item ; 
        })
        setTasks(updateTaks)
        setEditId(null)
        setTitle("")
    }else{
      // submit
      const newTask={
        id: Math.floor(Math.random() * 10000),
        title:title
      }
      setTasks([...tasks,newTask])
      setTitle("")

    }
  }
  function editTask(id){
   
    setEditId(id)
    const editTask = tasks.find((item) => item.id === id )

    console.log(editTask);
    setTitle(editTask.title)
  }

  return (
    <div className={"App " + theme}>
      <Header theme={theme} setTheme = {setTheme}/>
      <div className='container'>
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask} editId={editId}/>
        <section>
          {tasks.map((data) => (
            <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask} />
          ))
          }
        </section>
      </div>
    </div>
  );
}

export default App;
