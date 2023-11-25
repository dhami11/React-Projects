const Person=(props)=>{
    let msg 
    if (msg)
    return (
       <div>
        <h3> </h3>
            <p onClick={props.clicked}>Hi! my name is {props.name} and I'm {props.age} years old</p>
          
        </div>
    );
    
}
export default Person;