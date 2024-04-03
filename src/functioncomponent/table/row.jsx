



export const Row=(prop)=>{
    const{data,extra}=prop;
    return(
        <>
        <td>{data[0]}</td>
            <td>{data[1]}</td>
            <td>{data[2]}</td>
            <td>{extra}</td>
            </>
    )
}