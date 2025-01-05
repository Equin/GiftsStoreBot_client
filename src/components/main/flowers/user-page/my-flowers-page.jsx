import FlowerCard from "../FlowerCard/flower-card";
import "./my-flowers-page.css"

import Title from "../../../title";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserPlants, getFrequency } from "../../../../actions/plant";

function MyFlowersPage(){

    const {plants, isLoading, page, frequency} = useSelector(state => state.plant)
    const {currentUser} = useSelector(state => state.user);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFrequency())
        dispatch(getUserPlants(currentUser.id, page))
    }, [dispatch, currentUser.id, page])

    if(isLoading){
        return <h1>Loading...</h1>
    }

    return (
       <div className="my-flowers-page">
            <Title name= {"Квіткарня " + currentUser?.fullname} />
            <div className="container ">
                <div className="my-flowers-container">
                    <div className="cards" >
                        { plants && plants!=undefined && plants.length>0 && 
                            plants.map((plant) => {
                               if(plant != null && plant.isEnabled)
                                     return <FlowerCard key={plant.id} plant={plant} frequency={frequency} />
                            })
                        }
                    </div>
                </div>     
            </div>

        </div>
    )
}

export default MyFlowersPage;