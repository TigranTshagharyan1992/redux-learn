import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux"
import {addCash,getCash,removeCustomer,addCustomer} from "./toolkitSlice";
import {fetchCustomers} from "./api/getCustomers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.toolkitReducer.cash);
  const customers = useSelector(state => state.toolkitReducer.customers);
  const getCustomer = (name) => {
        const customer = {name:name, id: Date.now()}
        dispatch(addCustomer(customer));
  }

  return (
    <div className="App">
        <div style={{fontSize:"3rem"}}>{cash}</div>
        <div>
            <div>
                <button onClick={()=>dispatch(addCash(Number(prompt())))}>add to balance</button>
                <button onClick={()=>dispatch(getCash(Number(prompt())))}>take from balance</button>
            </div>
         <div>
             <button onClick={()=>getCustomer(prompt())}>add customer</button>
         </div>
            <div>
             <button onClick={()=>dispatch(fetchCustomers())}>add customers all</button>
         </div>

        </div>
        {customers.length > 0 ?
            <div>
                {customers.map((customer)=>{

                    return <div key={customer.id}>
                        <span>{customer.name}</span>
                        <span onClick={()=>dispatch(removeCustomer(customer.id))}>delete</span>
                    </div>
                })}
            </div> :
            <div style={{fontSize:"2rem",marginTop:20}}>
                There are no users
            </div>
        }
    </div>
  );
}

export default App;
