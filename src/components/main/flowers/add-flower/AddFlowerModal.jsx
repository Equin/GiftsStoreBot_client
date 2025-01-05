import React, { useEffect, useState } from 'react';
import "./AddFlowerMadal.css"
import { useDispatch, useSelector } from 'react-redux';
import { getCharacteristics, getPlant, getFrequency, create, getPlantCharacteristicsByID } from '../../../../actions/plant';
import Dropdown from '../../../utils/input/dropdown';
import Input from '../../../utils/input/Input';
import ReactDOM from 'react-dom';
import { setPlant } from '../../../../reducers/plantReducer';





function AddFlowerModal(params) {

    const { currentPlant, characteristics, frequency, isLoading, page } = useSelector(state => state.plant)
    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch()
    const requestUserID = params?.userID ?? null;
    const requestID = params?.requestID ?? null;

    useEffect(() => {
        dispatch(getCharacteristics())
        dispatch(getFrequency())

        if (params.id != null && params.id != undefined) {
            dispatch(getPlant(currentUser.id, params.id)).then(() => {
                dispatch(getPlantCharacteristicsByID(params.id))
            }
            )
        }

        return () => {
            console.log("unmount")
             dispatch(setPlant({}))
           };

    }, [dispatch, currentUser.id])

    const [text, setText] = useState(currentPlant?.description ?? '');
    const [wintetFreq, setWinterFreq] = useState(currentPlant?.winterFreq ?? '')
    const [wintetValue, setWinterValue] = useState(currentPlant?.winterValue ?? '')
    const [summerFreq, setSummerFreq] = useState(currentPlant?.summerFreq ?? '')
    const [summerValue, setSummerValue] = useState(currentPlant?.summerValue ?? '')
    const [humidity, setHumidityValue] = useState(currentPlant?.humidity ?? '')
    const [light, setLightValue] = useState(currentPlant?.light ?? '')
    const [temperature, setTemperatureValue] = useState(currentPlant?.temperature ?? '')
    const [name, setNameValue] = useState(currentPlant?.name ?? params?.newPlantName ?? '')
    const [ch, setCharacteristics] = useState({})
    const [photoPath, setPhotoPath] = useState(currentPlant?.imagePath??null);

    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        setSelectedPhoto(file);
    };

    const handleClearPhoto = () => {
        setPhotoPath(null);
        setSelectedPhoto(null);
      };

    const handleCharacteristics = (event) => {
        const { id, vlueID } = event;
        setCharacteristics({ ...ch, [id]: vlueID });
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleRemove = () => {
        params?.onClose()
       
      };

    const updatePlant = (id) => {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('name', name);
        formData.append('description', text);
        formData.append('img', selectedPhoto);
        formData.append('winter', JSON.stringify({ frequency: wintetFreq, amount: wintetValue }));
        formData.append('summer', JSON.stringify({ frequency: summerFreq, amount: summerValue }));
        formData.append('humidity', humidity);
        formData.append('temperature', temperature);
        formData.append('light', light);
        formData.append('characteristics', JSON.stringify({ characteristics: ch }));
        dispatch(create(formData)).then(()=> {
           // handleRemove()
        })
    };

    const addPlant = () => {
        const formData = new FormData();
        formData.append('name', name);

        if (requestUserID != null && requestUserID != undefined) {
            formData.append('userID', requestUserID);
        }

        if (requestID != null && requestID != undefined) {
            formData.append('requestID', requestID);
        }

        formData.append('description', text);
        formData.append('img', selectedPhoto);
        formData.append('winter', JSON.stringify({ frequency: wintetFreq, amount: wintetValue }));
        formData.append('summer', JSON.stringify({ frequency: summerFreq, amount: summerValue }));
        formData.append('humidity', humidity);
        formData.append('temperature', temperature);
        formData.append('light', light);
        formData.append('characteristics', JSON.stringify({ characteristics: ch }));
        dispatch(create(formData)).then(()=> {
          //  handleRemove()
        })
    };


    return (
        <div className="add-flower-details">

           {/*  <div className="add-photo-coll1">
                <div className="add-flower-details-img add-photo">
                    {!selectedPhoto && (
                        <label htmlFor="photoInput"><div className='text1'>Додайте фото рослини+</div>
                            <input id="photoInput" type="file" onChange={handlePhotoChange} />
                        </label>
                    )}
                    {selectedPhoto && <img src={URL.createObjectURL(selectedPhoto)} alt="Selected" />}
                </div>
            </div>

*/}
            <div className="add-photo-coll1">
                <div className="add-flower-details-img add-photo">
                    {!selectedPhoto && !photoPath && (
                        <label htmlFor="photoInput">
                            <div className="text1">Додайте фото рослини+</div>
                            <input id="photoInput" type="file" onChange={handlePhotoChange} />
                        </label>
                    )}
                    {selectedPhoto && (
                        <>
                            <div className="photo-preview">
                                <img src={URL.createObjectURL(selectedPhoto)} alt="Selected" />
                                <button className='button-style' onClick={handleClearPhoto}>Clear</button>
                            </div>
                        </>
                    )}
                    {photoPath && (
                        <>
                            <div className="photo-preview">
                                <img src={process.env.REACT_APP_API_URL + photoPath} alt="Selected" />
                                <button className='button-style' onClick={handleClearPhoto}>Clear</button>
                            </div>
                        </>
                    )}
                </div>
            </div>


            <div className="add-flower-details-coll-2">

                {<div className="add-arrow" onClick={()=> {handleRemove()}}>
                    <img className="icon" src="/arrow.png"></img>
                    Повернутись до усіх рослин
                    </div> }

                <div className="add-flowers-details-name">
                    <Input inpClass='add-name' type='name' value={name} setValue={setNameValue} placeholder='Введіть назву рослини' />
                </div>

                <div className="add-flowers-details-description">
                    <textarea type="text" value={text ?? ""} onChange={handleChange} placeholder='Введіть всю необхідну детальну інформацію про рослину
              Наприклад: Фікус каучуковий - це виживуча рослина, яка може рости в різних умовах. Він вимагає яскравого, але розсіяного світла, але не переносить прямого сонячного проміння. Також потребує регулярного поливу, але не терпить залиття коренів. Він також може рости у півтіні та допускає легке пересаджування.
              Фікус каучуковий також відомий як ефективний очисник повітря, оскільки він здатний поглинати різні шкідливі речовини, такі як формальдегід, бензол та толуол.
              Загалом, фікус каучуковий є прекрасним вибором для будь-якої кімнати, оскільки він не тільки додає затишку та краси в інтерєрі, але й є дуже корисною для здоровя.
              '/>
                </div>

                <div className="add-details-with-icons">

                    <div className="add-summer">
                        <div className="add-card-small-name color-text">Полив літом</div>
                        <div className="add-card-small-description-1">
                            <Input type='text' placeholder='1' value={summerValue} setValue={setSummerValue} />
                            <Dropdown placeholder='Виберіть частоту' selectedOption={summerFreq} options={frequency} setValue={setSummerFreq} />
                        </div>
                    </div>

                    <div className="add-winter">
                        <div className="add-card-small-name color-text">Полив зимою</div>
                        <div className="add-card-small-description-1">
                            <Input type='text' placeholder='1' value={wintetValue} setValue={setWinterValue} />
                            <Dropdown placeholder='Виберіть частоту' selectedOption={wintetFreq} options={frequency} setValue={setWinterFreq} />
                        </div>
                    </div>
                </div>

                <div className="add-details-with-icons">

                    <div className="add-winter">
                        <div className="add-card-small-name color-text">Вологість</div>
                        <div className="add-card-small-description-2">
                            <Input type='text' placeholder='50% - 60%' value={humidity} setValue={setHumidityValue} />
                        </div>
                    </div>

                    <div className="add-winter">
                        <div className="add-card-small-name color-text">Температура</div>
                        <div className="add-card-small-description-2">
                            <Input type='text' placeholder='21°C' value={temperature} setValue={setTemperatureValue} />
                        </div>
                    </div>

                    <div className="add-winter">
                        <div className="add-card-small-name color-text">Освітлення</div>
                        <div className="add-card-small-description-2">
                            <Input type='text' placeholder='Яскраве' value={light} setValue={setLightValue} />
                        </div>
                    </div>
                </div>

                <div className="add-filters-details ">
                    {
                        characteristics.map((characteristic) => {

                            // console.log(characteristic)

                            return <>
                                <div className="add-winter">
                                    <div className="add-card-small-name color-text">{characteristic.name}</div>
                                    <Dropdown placeholder={characteristic.placeholder} stableID={characteristic.id} options={characteristic.values} setComplexValue={handleCharacteristics} />
                                </div>
                            </>
                        })
                    }
                </div>

                <div className="add-add-button">
                    {currentPlant?.id ? (
                        <button onClick={() => { updatePlant(currentPlant?.id) }}>Обновити дані про рослину</button>
                    ) : (
                        <button onClick={() => { addPlant() }}>Додати до квіткарні</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AddFlowerModal;