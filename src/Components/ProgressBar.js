import React, { Component } from "react";
import Chart from "react-apexcharts";
import styled from 'styled-components';

class ProgressBar extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [70],
        options: {
          chart: {
            height: 50,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '10%',
              }
            },
          },
          labels: ['Cricket'],
        }
      
      };
    }

    componentDidMount() {
        let percentCalc = (this.props.stat * 100) / 255;
        let percentValue = Math.round(percentCalc * 10) / 10;
        console.log(this.props.stat + ' times 100 is ' + (this.props.stat * 100) + ' and final is ' + percentValue);
        this.setState({
            series: [percentValue],
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
            labels: [this.props.name],
            }
        })
    }

  

    render() {
        const StyledP = styled.p`
        position: relative;
        top: -95px;
        `;
      return (
        <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="radialBar" height={200} />
            <StyledP>{this.props.stat}/255</StyledP>
        </div>
      );
    }
}

export default ProgressBar;