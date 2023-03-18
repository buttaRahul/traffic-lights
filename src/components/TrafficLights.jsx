import { styled } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"

// const TrafficLight = styled(Box)(
//     {
//         backgroundColor : 'grey',
//         width: '50px',
//         height: '50px',
//         borderRadius: '50%',
//         // no sir 50percent
//     }
// )
// cpnst mucpm  = ()=>{retruen ()}      (<></>)

// styled(Box)()
// styled(Box)(()=>({}))
const TrafficLightContainer = styled(Box)(

    {
        // left:'20px',
        margin: 'auto',
        marginTop:'100px',
        display: 'flex',
        gap: '50px',
        border: '2px solid brown',
        width:320,
        justifyContent: 'center',
        padding: '25px',
        backgroundColor:'black',
    }
)
const TrafficLight = styled(Box)(({color='#E1D9D1'})=>(
    {
        backgroundColor : color,
        width: '50px',
        height: '50px',
        border: "1px solid white",
        borderRadius: '50%'
    }
))
const config = {
    'red':{
        'duration':5000,
        'nextColor':"yellow"
    },
    'yellow':{
        'duration': 2000,
        'nextColor':'green'
    },
    'green':{
        'duration':5000,
        'nextColor':'red',
    },
}

const TrafficLights = () => {
  const [currentColor,setCurrentColor] = useState('red')
  useEffect(()=>{
    // const clr = config[currentColor]
    const {duration,nextColor} = config[currentColor]
    setTimeout(()=>{
        setCurrentColor(nextColor)

    },duration)
  },[currentColor])
  return (
        <TrafficLightContainer>
            {Object.keys(config).map((color,idx)=>{
                return (<TrafficLight key= {idx} color = {color === currentColor? currentColor: undefined }/>) 
            })}
        </TrafficLightContainer>
  )
}

export default TrafficLights

// yes sir