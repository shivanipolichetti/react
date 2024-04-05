import CustomCard from "../reactbootstrap/card";
import Spinner from "../spinners/spinner";


const FirstPage=()=>{
    return(
        <>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
       <CustomCard loaderVisible={true} name={"Albert"} description={"He was a German-born theoretical physicist who is widely held to be one of the greatest and most influential scientists of all time."} ImageUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/330px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg"}/>
      </div>
      <div className="col-sm-4">
       <CustomCard loaderVisible={false} name={"Thomson"} description={"He was a German-born theoretical physicist who is widely held to be one of the greatest and most influential scientists of all time."}ImageUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/330px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg"}/>
      </div>
      <div className="col-sm-4">
       <CustomCard loaderVisible={true} name={"Mathew"} description={"He was a German-born theoretical physicist who is widely held to be one of the greatest and most influential scientists of all time."}ImageUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/330px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg"}/>
      </div>
    </div>
  </div>
</>
    )
}
export default FirstPage;