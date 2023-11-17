import Parent from "./Parent"

function GrandParent() {
    function a() {
        console.log("inside a")
    }
    return (
        <Parent functionA={a} />
    )
}
export default GrandParent