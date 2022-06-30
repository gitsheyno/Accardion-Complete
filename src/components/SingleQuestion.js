import { useState } from "react"
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
const SingleQuestion = ({title,info}) => {
    const [clicked, setclicked] = useState(true)
    return (
        <li>
            <div>
                <h4>
                    {title}
                </h4>
                <p>{!clicked && info}</p>
            </div>
            <span>
                <button onClick={() => setclicked(!clicked)}>
                    {clicked ? <AiOutlinePlusCircle /> : <AiOutlineMinusCircle />}
                </button>
            </span>
        </li>
    )
}

export default SingleQuestion
