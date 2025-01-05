import FilterGroup from "./filter-color";

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacteristics, getPlant, getFrequency, create, getSearchPlants } from '../../../actions/plant';


function Filters() {


    const { characteristics, page } = useSelector(state => state.plant)
    const { currentUser } = useSelector(state => state.user);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCharacteristics())

    }, [dispatch, currentUser.id])

    const [selected, setSelected] = useState({})
    const [visibleFilters, setVisibleFilters] = useState(false)

    const handleSelect = (e) => {
        
        selected[e.stableID] = e.selectedItems.map((item) => {
            return item.chValueID
        })
        
        setSelected(selected)
        console.log("selected", selected)

        dispatch(getSearchPlants(page, null, selected))
    }

    const handleShowFilters=()=>{
        setVisibleFilters(!visibleFilters)

        if(!visibleFilters) {
            setSelected({})
        }

    }

    return (
        <div>
            <div className="filter-container">
                <div className="filter-description">
                    <p onClick={()=> {handleShowFilters()}}>Не знаєте назву рослини?<span className="color-text">Знайдіть ії по характеристикам</span></p>
                </div>
            </div>

            {
                visibleFilters && characteristics && characteristics.length > 0 &&
                characteristics.map((characteristic) => {
                    return <FilterGroup stableID = {characteristic.id} onSelect={(e)=> {handleSelect(e)}} key={characteristic.id} title={characteristic.name} items={characteristic.values} />
                })

            }

        </div>
    )
}

export default Filters;