import check from "../src/assets/images/icon-check.svg"

function Benefits({title}) {
    return ( 
        <div>
            <img src={check} alt="checkmark" />
            <p>{title}</p>
            
        </div>
     );
}

export default Benefits;