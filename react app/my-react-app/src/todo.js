import "./todo.css"
import { useState } from "react";

const TodoList = () => {

    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);


    const addItem = () => {
       
        const val = {
            id: Math.floor(Math.random() * 1000),
            task: newItem,
        }

        setItems([...items, val]);
        console.log(items)
    }

 const remove =(id)=>{
    console.log(id)

    const newA = items.filter((item)=>(item.id != id))
     setItems(newA)
 }

    return (<>



        <div className="main">
            <div className="addbar">
                <input type="text" placeholder="enter task " onChange={e => setNewItem(()=>e.target.value)} />
                <button onClick={()=>addItem()}>Add</button>
            </div>

            <ul className="list">

                {
                    items.map((item,i )=> {

                        return (
                            
                            <div>

                                <li key={item.id}>{item.task}</li>
                                

                                <button onClick={()=>remove(item.id)}>x</button>
                               

                          </div>

                        )



                    })
                }



            </ul>
        </div>

    </>);
}

export default TodoList;