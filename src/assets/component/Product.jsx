function Product ({image, title}) {
    return(
        <div>
            <h2>Product</h2>
            <div className="product-card">
                <img src={image} alt={title} className="product-img" />
                <span>{title}</span>
            </div>
        </div>
    )
}
export default Product