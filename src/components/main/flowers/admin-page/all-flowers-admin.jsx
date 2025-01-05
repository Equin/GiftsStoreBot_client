import React, { useState } from 'react';
import './all-flowers-admin.css';
import Title from '../../../title';
import ModalWindowAdd from '../add-flower/Modal-add';
import AddFlowerModal from '../add-flower/AddFlowerModal';
import FlowerCard from "../FlowerCard/flower-card";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFrequency, getPlants } from "../../../../actions/plant";

function AllFlowersAdmin() {

  const [modalOpen, setModalOpen] = useState(false);

  const {plants, isLoading, page, frequency} = useSelector(state => state.plant)
  const {currentUser} = useSelector(state => state.user);
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getFrequency())
      dispatch(getPlants(currentUser.id, page))
  }, [dispatch, currentUser.id, page])

  if(isLoading){
      return <h1>Loading...</h1>
  }

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    console.log("close callsed")
   // setModalOpen(false);
  };

  return (
    <div>
      <Title name="Усі створені рослини" />
      <div className="button-admin">
        <ModalWindowAdd buttonName="Додати нову рослину +"  buttonClassName="button-admin" >
          <AddFlowerModal key="flowerModalAdd" onClose={closeModal} />
        </ModalWindowAdd>
      
      </div>



      <div className="container ">
                <div className="my-flowers-container">
                    <div className="cards" >
                        { plants && plants!=undefined && plants.length>0 && 
                            plants.map((plant) => {
                               if(plant != null)
                                     return <FlowerCard key={plant.id} plant={plant} frequency={frequency} />
                            })
                        }
                    </div>
                </div>     
            </div>




    </div>
  );
}

export default AllFlowersAdmin;
