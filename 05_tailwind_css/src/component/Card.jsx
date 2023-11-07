const Card = ({name,data}) => {
    // let userName = props.name
    // let userData = props.data
    return (
        <div class="w-[300px] rounded-md border">
            <div class="p-4">
                <h1 class="inline-flex items-center text-lg font-semibold">
                    {name} 
                </h1>
                <p className="mt-3 text-sm text-gray-600">
                    {data}
                </p>
                <button
                    type="button"
                    class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Read
                </button>
            </div>
        </div>
    )
}

export default Card