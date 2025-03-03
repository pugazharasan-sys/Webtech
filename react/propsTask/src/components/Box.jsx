

let Box =(props)=>{
    return(
        <div className="boxx">
            <img src={props.imageSrc} alt="imgg" />

            <div className="pro">
                <h2>Product Name: {props.productName}</h2>
                <h3>Product Price : {props.price}</h3>

            </div>
        </div>
    )
}

export default Box