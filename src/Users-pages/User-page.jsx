import Header from "../components/header/header";
import Menu from "../components/menu-user/menu";

function UserPage(){

    return(
        <div>
         <Header 
              hello="любитель кімнатних рослинок" 
              about="Цей веб-додаток допоможе тобі налаштувати правильний догляд за твоїми рослинами. 
                    Тут збережена вся важлива інформація, така як:"
          />

         <Menu />
        {/* <FlowerDetails/>*/}
      </div>
    )
}

export default UserPage;