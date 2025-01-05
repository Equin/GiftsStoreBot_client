import "./filter.css";

function FilterShape(){
    return(
        <div className="filter-container">
            <div className="filter-coll">
                <div className="filter-coll-1">
                    <div className="filter-name"><p>Колір листя</p></div>
                </div>
                <div className="filter-coll-2">
                    <ul>
                    <li className="filter-type">Зелений</li>
                    <li className="filter-type">Салатовий</li>
                    <li className="filter-type">Помаранчовий</li>
                    <li className="filter-type">Темний</li>
                    <li className="filter-type">Зелений</li>
                    <li className="filter-type">Салатовий</li>
                    <li className="filter-type">Помаранчовий</li>
                    <li className="filter-type">Темний</li>
                    <li className="filter-type">Зелений</li>
                    <li className="filter-type">Салатовий</li>
                    <li className="filter-type">Зелений</li>
                    <li className="filter-type">Салатовий</li>
                    <li className="filter-type">Помаранчовий</li>
                    <li className="filter-type">Темний</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FilterShape;