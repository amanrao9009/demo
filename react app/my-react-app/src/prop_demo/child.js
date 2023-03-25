const Child = (pro) => {
    return ( 
    <>
       <h4>First Name : {pro.First}</h4>
       <h4>Last Name : {pro.Last}</h4>
       <hr />

    </> 
    );
}

//2nd way with { }
// const Child = ({First , Last}) => {
//     return ( 
//     <>
//        <h4>First Name : {First}</h4>
//        <h4>Last Name : {Last}</h4>
//        <hr />

//     </> 
//     );
// }
 
export default Child;