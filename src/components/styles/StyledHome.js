import styled from 'styled-components'

export const StyledHome = styled.main`
    width:50vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: white;
    border: 1px solid blue;
    padding:2rem;
    margin: 0 auto;
    h2{
        font-size: 2rem;
        color:#555;
        margin-bottom: 20px;
        padding:1rem 0
    }    

    @media(max-width: 800px){
        h2{
            font-size: 1.4rem;
        }
        h4{
            font-size: 1.2rem;
        }
      
    
}
   
`
export const UL = styled.ul`
list-style-type: none;
li{
    background-color: rgb(240,240,240);
    padding: 1rem;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.7rem;
    span{
        svg{
            font-size: 2.4rem;
            color: gray;
            cursor: pointer;
            
        }
    }
    p{
        color:#666;
        font-size: 1.4rem;
        margin-top: 10px;
    }

    & > div{
        flex: 1 1 90%;
        
    }
    & > span{
        flex: 1 1 10%;
     
        text-align: right;
    }
}
`