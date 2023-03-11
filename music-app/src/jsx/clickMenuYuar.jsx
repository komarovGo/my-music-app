
function RenderClickMenuYuar (){
   
    return(
        <div className="click-menu-year">
            <input className="input-menu-year" type="radio" name="year" id="new" value="Более новые"/>
            <label className="label-menu-year" htmlFor="new">Более новые</label>
            <input className="input-menu-year" type="radio" name="year" id="old" value="Более старые"/>
            <label className="label-menu-year" htmlFor="old">Более старые</label>
        </div>
    )
}


export default RenderClickMenuYuar;