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
}
`

export const ChipGrid = styled.div`
diplay: flex;
flex-direction: row;
`

export const WorldDiv =  styled.div`
@media (max-width: 415px){
background-image: url(${img});
background-size: cover;
text-align: center;
width: 400px;
height: 300px;
}
@media (min-width:416px) and (max-width: 1000px){
    background-image: url(${img});
    background-size: cover;
    text-align: center;
    width: 800px;
    height: 600px;
}
@media (min-width:1001px) {
    background-image: url(${img});
    background-size: 1200px 900px;

    text-align: center;
    width: 1200px;
    height: 900px;
}
`
export const USDiv = styled.div`
background-image: url(${usImg});
width: 500px;
height: 500px;
`

