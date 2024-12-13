
function ItemListContainer(props) {
    const { greeting } = props;
    return (
        <div style={{backgroundColor:"black"}}>
            <h1 style={{color: "white", fontSize: "30px", display:"flex", justifyContent: "center", alignItems:"center"}}>Vestite siempre con estilo en {greeting}</h1>
        </div>
    )
}

export default ItemListContainer;
