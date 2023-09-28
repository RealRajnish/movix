import { useEffect } from "react"
import { fetchDataFromApi } from "./utils/api"
import { useDispatch, useSelector } from "react-redux"
import { getApiConfiguration } from "./store/homeSlice"





function App() {
  const dispatch = useDispatch()
  const url=useSelector((state)=>state.home.url)
  console.log(url)
 const apiTesting=()=>{
    fetchDataFromApi('/movie/popular').then((res)=>{
      console.log(res)
      dispatch(getApiConfiguration(res))
    })
  }
  useEffect(()=>{
    apiTesting()
  },[])
  
  return (
    <>
     <div className="App" style={{color:"whitesmoke"}}>hey buddy
     {url?.total_pages}
     </div>
    </>
  )
}

export default App
