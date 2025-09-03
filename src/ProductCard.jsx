function ProductCard(props){
    return(
        <div>
            <h1>{props.titel}</h1>
            <h1>Price: {props.price}</h1>
            <h1>Status: {props.status ? "In Stock" : "Out Of Stock"}</h1>
        </div>
    )
}

export default ProductCard;