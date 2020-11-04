import styled from 'styled-components';
import img from "../assets/world.png"
import usImg from "../assets/us.png";
export const StatGrid = styled.div`
@media (max-width: 315px){
    display: flex;
    flex-direction: column;
}
@media (min-width:316px) and (max-width: 1000px){
    display: flex;
    flex-direction: column;
}
@media (min-width: 1001px){
    display: flex;
    flex-direction: row;
    padding: 5px;
    content-align: center;
justify-content: center;
align-content: center;

}
`

export const ChipGrid = styled.div`
diplay: flex;
flex-direction: row;
content-align: center;
justify-content: center;
align-content: center;
margin: 5px;
`

export const WorldDiv =  styled.div`
@media (max-width: 415px){
    background-image: url(${img});
    background-size: cover;
    content-align: center;
    justify-content: center;
    align-content: center;
    text-align: center;
    width: 90%;
    height: auto;
}
@media (min-width:416px) and (max-width: 1000px){
    background-image: url(${img});
    background-size: cover;
    text-align: center;
    width: 800px;
    height: 600px;
    margin-left:auto;
}
@media (min-width:1001px) {
    background-image: url(${img});
    background-size: 1200px 900px;
    content-align: center;
    justify-content: center;
    align-content: center;
    text-align: center;
    width: 1200px;
    height: 900px;
    margin-left:20%;
}
`
export const USDiv = styled.div`
background-image: url(${usImg});
width: 500px;
height: 500px;
`

export const DataPoint = styled.div`
font-family: 'Roboto Mono';
margin: 10px;
font-size: 1.2em;
text-align: center;
`

export const SelectForm = styled.div`
display: flex;
flex-direction: row;
margin-left: 45%;
padding: 10px;
`

export const ChartHolder = styled.div`
margin-left: 10%;
margin-top:10px;
margin-bottom: 10px`

export const CenterDiv = styled.div`
content-align: center;
justify-content: center;
align-content: center;
text-align: center;
margin: 10px;
`


