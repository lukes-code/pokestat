import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const StyledP = styled.p`
    color: #fff;
    font-size: 0.9rem;
    text-transform: Capitalize;
    margin: 5px 10px;
    font-weight: bold;
    padding: 2px 10px;
    flex: 1;
    min-width: 200px;
`;

const StyledHeadP = styled.p`
    color: #fff;
    font-weight: 500;
`;

const StyledSpan = styled.p`
    color: #333;
    font-size: 0.9rem;
    text-transform: Capitalize;
    margin: 5px 10px;
    background-color: #fff;
    font-weight: bold;
    border-radius: 999px;
    padding: 2px 10px;
`;

const StyledParentDiv = styled.div`
    margin-top: 50px;
    text-align: center;
`;

const StyledDiv = styled.div`
    max-width: 900px;
    margin: 15px auto;
    display: flex;
    flex-wrap: wrap;
`;

function BaseStats(props) {
    return(
        <StyledParentDiv>
            <StyledHeadP>Base Stats</StyledHeadP>
            <StyledDiv>
            {props.stats.map(stats => 
                <StyledP key={stats.stat.name}> 
                    <ProgressBar name={stats.stat.name} stat={stats.base_stat}/>
                </StyledP>
            )}
            </StyledDiv>
        </StyledParentDiv>
    );
}

export default BaseStats;