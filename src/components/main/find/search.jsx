import "./search.css";
import Input from "../../utils/input/Input";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFrequency, getSearchPlants } from "../../../actions/plant";
import { useState } from "react";


function Search(){


  
  const {searchPlants, isLoading, page, searchText} = useSelector(state => state.plant)
  const {currentUser} = useSelector(state => state.user);
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  //dispatch, page

  useEffect(() => {
      dispatch(getFrequency())
      dispatch(getSearchPlants(page, search, {}))
  }, [])


    return(
        
       {/* <div class="search-box">
        <input type="text" name="" class="search-txt" placeholder="Type to search"/>
        <a class="search-btn" href="#">
        <i class="fa fa-search" aria-hidden="true"></i>
        </a>
        </div>*/},
        <div className="search">
          <div className="search-container">
          <Input inpClass="search-input" value={search} setValue={setSearch} type="text" placeholder="Напиши назву рослини..." />
          <button onClick={()=> {dispatch(getSearchPlants(page, search, {}))}} className="search-button">Пошук</button>
         </div>
      </div>
    )
}

export default Search;