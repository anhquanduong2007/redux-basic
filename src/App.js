import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {getData,addData,editData,getID} from "./actions";
function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.dataReducer);
  const [todo, setTodo] = React.useState("");
  const [status, setStatus] = React.useState(false);
  
  const handleChange = (e) => {
    setTodo(e.target.value);
  }
  const handleSelectChange = (e) => {
    setStatus(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
   
    const dataDoc = {
      name: todo,
      status
    }
    if(data.id.length !== 0){
      dispatch(editData(data.id[0].id,dataDoc));
    }else{
      dispatch(addData(dataDoc));
    }
    setTodo("");
    setStatus(false);
   
  }
  React.useEffect(()=> {
    dispatch(getData());
  },[dispatch]);
  React.useEffect(() => {
    if(data.id && data.id.length !== 0){
      setTodo(data.id[0].name);
      setStatus(data.id[0].status)
    }
  },[data.id]);
  console.log(data);
  return (
    <div className="App">
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "50px" }}
        onSubmit={handleSubmit}
      >
        <div>
          <input onChange={handleChange} value={todo} />
          <select onChange={handleSelectChange} value={status}>
            <option value={true}>Hoàn thành</option>
            <option value={false}>Chưa hoàn thành</option>
          </select>
          <button type="submit">{data.id.length===0 ? "Add" : "Edit"}</button>
        </div>
      </form>
      <ul>
        {
          data.data && data.data.map((item) => {
            return (<li key = {item.id}>
              <div>{item.name}</div>
              <div>{String(item.status)}</div>
              <button>Xóa</button>
              <button onClick = {() => {
                dispatch(getID(item.id))
              }}>Edit</button>
            </li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;
