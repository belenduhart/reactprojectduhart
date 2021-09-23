const SizeSelector = () =>{
    return (
        <>
        <div className="sizeSelector">
            Talle:
            <select className="sizeselector" name="Talle">
                <option value="none" selected> -- </option>
                <option value="s"> S </option>
                <option value="m"> M </option>
                <option value="l"> L </option>
                <option value="xl"> XL </option>
            </select>
        </div>
        </>
    )
}

export default SizeSelector;