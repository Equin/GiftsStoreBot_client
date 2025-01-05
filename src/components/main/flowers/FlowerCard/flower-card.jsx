import "./flower-card.css"
import ModalWindowAdd from '../add-flower/Modal-add';
import FlowerDetails from '../FlowerDetails/flower-details.jsx';

function  FlowerCard ({plant, frequency}){

    return(
        <div className="card-container">
            <div className="card-img">
                <img src={process.env.REACT_APP_API_URL+plant.imagePath} alt="p" />
            </div>
            <div className="card-information">
                <div className="card-title">
                    <p>{plant.name}</p>
                </div>
                <div className="card-description">
                    <p>{plant.description}</p>
                </div>
                <div className="card-coll">
                    <div className="card-coll-1">
                        <div className="summer">
                            <div className="card-small-name color-text">літо</div>
                            <div className="card-small-description"> {plant.summerValue} {frequency?.find(item => item.key == plant.summerFreq)?.value}</div>
                        </div>
                    </div>
                    <div className="card-coll-2">
                        <div className="winter">
                            <div className="card-small-name color-text">зима</div>
                            <div className="card-small-description"> {plant.winterValue} {frequency?.find(item => item.key == plant.winterFreq)?.value}</div>
                        </div>
                    </div>
                    <div className="card-coll-3">

                    <ModalWindowAdd buttonClassName="card-button" buttonName="Детальніше"  addButtonKlassName="">
                         <FlowerDetails id={plant.id} />
                    </ModalWindowAdd>

                       {/*<div className="card-button"><button onClick={() => history("flower/" + plant.id)}>Детальніше</button></div> */} 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlowerCard;