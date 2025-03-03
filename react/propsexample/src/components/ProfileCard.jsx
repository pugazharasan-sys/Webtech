

let ProfileCard = (props)=>{

    console.log(props);

    // props.productName = "tab"   //we can only read them we can't change them

    let {productName, price} = props
    return(
        
        <div class='card'>
            <h1>I am ProfileCard</h1>

            {/* <h2> product name is : {props.productName}</h2> */}
            <h2> product name is : {productName}</h2>
            

            {/* <h2> product price is : {props.price}</h2> */}
            <h2> product price is : {price}</h2>



        </div>
    )
}

export default ProfileCard