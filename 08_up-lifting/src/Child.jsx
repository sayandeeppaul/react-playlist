function Child(props) {
    function c() {
        console.log("inside c")
        props.functionB()
    }
    c()
    return (
        <div>

        </div>
    )
}
export default Child