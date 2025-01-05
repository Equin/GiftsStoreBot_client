import Search from "./search";
import Title from "../../title";
import Filters from "./filters";
import "./find.css";
import FlowerCard from "../flowers/FlowerCard/flower-card";
import { useSelector, useDispatch } from "react-redux";
import Request from "./request";


function Find() {


    const { searchPlants, isLoading, page, frequency } = useSelector(state => state.plant)

    console.log("searchPlants SEARCH PAGE", searchPlants)

    return (
        <div className="container">
            <div className="find">
                <Title name="Знайди рослину" />
                <Search />

                {!(searchPlants && searchPlants != undefined && searchPlants.length > 0) &&
                    <Request />
                }

                <Filters />

                <div className="my-flowers-container">
                    <div className="cards">
                        {searchPlants && searchPlants != undefined && searchPlants.length > 0 &&
                            searchPlants.map((plant) => {
                                if (plant != null && plant.isEnabled)
                                    return <FlowerCard key={plant.id} plant={plant} frequency={frequency} />
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Find;