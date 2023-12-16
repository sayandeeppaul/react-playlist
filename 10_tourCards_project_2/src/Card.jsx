import { useState } from "react"

function Card({ id, name, info, image, price , removeTour}) {
    const [readmore, setReadmore] = useState(false)
    function readmoreHandler() {
        setReadmore(!readmore)
    }
    const description = readmore ? info : `${info.substring(0, 200)}...`
    return (
        <div className="card">
            <img src={image} alt="" />
            <div className="tour-details">
                <h4>{price}</h4>
                <h4>{name}</h4>
            </div>
            <div className="tour-desc">
                {description}
                <span onClick={readmoreHandler}>
                    {
                        readmore ? `show less` : `read more`
                    }
                </span>
            </div>
            <div className="button">
                <button onClick={()=>removeTour(id)}>Not Interested</button>
            </div>
        </div>
    )
}

export default Card
