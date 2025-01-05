import Header from "../components/header/header";
import AllFlowersAdmin from "../components/main/flowers/admin-page/all-flowers-admin";

function AdminPage(){
    return(
        <div>
       <Header 
            hello="Адміністратор"
            about="Нижче ти можеш переглянути усі інсуючі рослини та додати нові. 
            Також не забувай додавати важливу інформацію про:"
       />
        <AllFlowersAdmin/>

      </div>
    )
}

export default AdminPage;