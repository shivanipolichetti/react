
import ListItems from "./listitems";


const List=()=>{
    const list=[{
        name:"apple",
        type:"fruit",
        id:1,
        isFruit:true

    },
{
    name:"mango",
    type:"fruit",
    id:2,
    isFruit:true

},{
    name:"tomato",
    type:"vegetable",
    id:3,
    isFruit:false
}]
    return(
        <div>
        <ol>
        {
            list.map((eachObject)=>{
                    return(
                        //<li>{eachObject.name}</li>
                        <ListItems item={eachObject.name}/>
                        
                    )
            })
        }
        </ol>

        </div>
    )
}

export default List;