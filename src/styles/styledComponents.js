import styled from 'styled-components';

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