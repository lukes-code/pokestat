import {useState, useEffect} from 'react';
import Chart from "react-apexcharts";
import styled from 'styled-components';

const StyledP = styled.p`
  position: relative;
  top: -95px;
`;

function ProgressBar(props) {
  const [options, setOptions] = useState();
  const [series, setSeries] = useState();

    useEffect(() => {
        let percentCalc = (props.stat * 100) / 255;
        let percentValue = Math.round(percentCalc * 10) / 10;
        setOptions({
          options: {
            chart: {
                height: 10,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                  hollow: {
                      size: '50%',
                  }
                },
            },
            labels: [props.name],
            }
        });
        setSeries({ series: [percentValue] });
    });
        
    return (
      <div id="chart">
          <Chart options={options} series={series} type="radialBar" height={200} />
          <StyledP>{props.stat}/255</StyledP>
      </div>
    );
}

export default ProgressBar;