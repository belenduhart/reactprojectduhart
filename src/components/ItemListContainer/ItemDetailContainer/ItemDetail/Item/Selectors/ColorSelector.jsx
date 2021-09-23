const ColorSelector = () =>{
        //Obtencion colores para el selector
        // const ColorSelector = ({producto}) =>{
        //     return(
        //         <>
        //         {producto.forEach(producto =>
        //         <option value="{producto.color.name}">{producto.color.name}</option>)}
        //         </>
        //     )
        // }
    return(
        <>
        <div className="sizeSelector"> 
            Color :
            <select className="colorselector" name="Colores">
                <option value="ejemplo"> Ejemplo </option>
                {/* <ColorSelector/> */}
            </select>
        </div>
        </>
    )
}

export default ColorSelector;