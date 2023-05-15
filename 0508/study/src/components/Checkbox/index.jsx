function Checkbox({ onChange }){
    const handleChecked = e => {
        onChange(e.target.Checked);
    }

    return(
        <input type="checkbox" onChange={handleChecked}/>
    )
}
export default Checkbox;