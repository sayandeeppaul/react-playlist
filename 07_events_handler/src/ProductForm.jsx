import { useState } from "react"

function ProductForm() {
const[title,setTitle]=useState('')
const[date,setDate]=useState('')

    function titleChangeHandler(event) {
        setTitle(event.target.value)
    }
    function dateChangeHandler(event) {
        setDate(event.target.value)
    }

    function showObjectHandler(event) {
    event.preventDefault()
    let obj={
        objTitle:title,
        objDate:date
    }
        console.log(obj)
        setTitle('')
        setDate('')
    }
    return (
        <div>
            <form>
                <div className="product">
                    <label htmlFor="">Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler}/>
                </div>
                <div className="product">
                    <label htmlFor="">Date</label>
                    <input type="date" min='2023-01-01' value={date} max='2023-12-12' onChange={dateChangeHandler} />
                </div>
                <div className="buttonClass">
                    <button onClick={showObjectHandler}>Add Product</button>
                </div>
            </form>
        </div>
    )
}
export default ProductForm