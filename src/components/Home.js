import { StyledHome, UL } from "./styles/StyledHome"
import data from '../data/data'
import { useState } from "react"
import SingleQuestion from "./SingleQuestion"


const Home = () => {
    const [questions, setQuestions] = useState(data)
    return (
        <StyledHome>
            <h2>Questions And Answers About Login</h2>
            <UL>
                {questions.map(item => (
                        <SingleQuestion key={item.id} {...item} />
                ))}
            </UL>
        </StyledHome>
    )
}

export default Home
