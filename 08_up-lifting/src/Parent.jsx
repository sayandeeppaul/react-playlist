import Child from "./Child"

function Parent(props) {
    function b() {
        console.log("inside b")
        props.functionA()
    }
    return (
        <Child functionB={b} />
    )
}
export default Parent