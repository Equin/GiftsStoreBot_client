import { useParams } from "react-router-dom";
import "./flower-details.css"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTouser, getFrequency, getPlant, getPlantCharacteristicsByID, setEnabled, deletePlant } from "../../../../actions/plant";
import { useNavigate } from "react-router-dom";
import ModalWindowAdd from '../add-flower/Modal-add';
import AddFlowerModal from '../add-flower/AddFlowerModal';
import { setPlant } from '../../../../reducers/plantReducer';


function FlowerDetails(params) {

    const history = useNavigate();

    const id = useParams().id??params.id;


    const { currentPlant, isLoading, page, frequency } = useSelector(state => state.plant)
    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch()

    console.log("currentPlant", currentPlant)

    useEffect(() => {
        dispatch(getFrequency())
        dispatch(getPlant(currentUser.id, id)).then(() => {
            dispatch(getPlantCharacteristicsByID(id))
        })

        return () => {
           console.log("unmount")
            dispatch(setPlant({}))
          };
        
    }, [dispatch, currentUser.id])

    const deleteAndRedirect = () => {
        dispatch(deletePlant(currentPlant.id)).then(() => {
            if(params?.onClose) {
                params?.onClose()
            } else {
                history(-1)
            }
        })
    }

    const handleRemove = () => {
        if(params?.onClose) {
            params?.onClose()
        } else {
            history(-1)
        }
      };


    const renderButton = () => {
        if (currentUser.isAdmin) {
            return (
                <div >
                    <button className="add-button" onClick={() => { deleteAndRedirect() }} >Видалити</button>


                    <ModalWindowAdd buttonName="Редагувати" >
                         <AddFlowerModal id={id} />
                    </ModalWindowAdd>

                    {currentPlant?.isEnabled && <button onClick={() => { dispatch(setEnabled(currentPlant?.id, false)) }} className="add-button">Сховати</button>}
                    {!currentPlant?.isEnabled && <button onClick={() => { dispatch(setEnabled(currentPlant?.id, true)) }} className="add-button">Відновити</button>}

                </div>
            )
        } else {
            return (
                <div >
                    {currentPlant?.isMine == false && <button className="add-button" onClick={() => { dispatch(addTouser(currentPlant?.id, currentUser.id, true)) }}>Додати до моєї квіткарні</button>}
                    {currentPlant?.isMine == true && <button className="add-button" onClick={() => { dispatch(addTouser(currentPlant?.id, currentUser.id, false)) }}>Прибрати з моєї квіткарні</button>}
                </div>
            )
        }
    };

    return (
        <div className="flower-details">
            <div className="flower-details-coll-1">
                <div className="flower-details-img">
                    <img src={process.env.REACT_APP_API_URL + currentPlant?.imagePath??""} />
                </div>
            </div>
            <div className="flower-details-coll-2">
                <div className="arrow" onClick={()=> {handleRemove()}}>
                    <img className="icon" src="/arrow.png"></img>
                    Повернутись до квіткарні
                </div>
                <div className="flowers-details-name">{currentPlant?.name}</div>
                <div className="flowers-details-description"><pre>{currentPlant?.description}</pre></div>
                {
                    /*
                     <div className="flower-details-small-description">рослина-дерево, що належить до роду Фікус і сімейства Морокові. Вона є одним з найпопулярніших видів фікуса завдяки своїм яскравим листям та легкому догляду.</div>
                <div className="flower-details-small-description">Фікус каучуковий потребує регулярного поливу, розпилювання води на листя, вологість повітря близько 50-60%, температура комфортна для людини (18-24°C), але не менше 13°C, а освітлення потрібне яскраве, але не допускається пряме сонячне світло.</div>
                
                    
                    */

                }
                <div className="details-with-icons">
                    <div className="summer">
                        <div className="card-small-name color-text">літо</div>
                        <div className="card-small-description">
                            <img src="/water.png" />
                            {currentPlant?.summerValue} {frequency.find(item => item.key == currentPlant?.winterFreq)?.value}
                        </div>
                    </div>
                    <div className="winter">
                        <div className="card-small-name color-text">зима</div>
                        <div className="card-small-description">
                            <img src="/water.png" />
                            {currentPlant?.winterValue} {frequency.find(item => item.key == currentPlant?.winterFreq)?.value}
                        </div>
                    </div>
                    <div className="winter">
                        <div className="card-small-name color-text">вологість</div>
                        <div className="card-small-description">{currentPlant?.humidity}%</div>
                    </div>
                    <div className="winter">
                        <div className="card-small-name color-text">температура</div>
                        <div className="card-small-description">{currentPlant?.temperature}°C</div>
                    </div>
                    <div className="winter">
                        <div className="card-small-name color-text">освітлення</div>
                        <div className="card-small-description">{currentPlant?.light}</div>
                    </div>
                </div>
                <div className="filters-details ">
                    <ul>
                        {
                            currentPlant?.characteristics?.map((item, index) => {
                                return (
                                    <li className="filter-type" key={index}>{item.name + " : " + item.values[0].value}</li>
                                )
                            }
                            )
                        }
                    </ul>
                </div>
                {renderButton()}
            </div>
        </div>
    )
}

export default FlowerDetails;