import React from "react";
import PropTypes from 'prop-types';

export class FeedbackCounter extends React.Component{
    static propTypes = {
        good: PropTypes.number
    }
        state = {
            good: 0,
            neutral: 0,
            bad: 0
    }
    handleIncrement = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good.value + 1
            }
        }
        
       
    )
}

    render() {
        return (
            <div>
                <h2>Please leave feedback</h2>
                <ul>
                    <li>
                        <button onClick={this.handleIncrement} type="button">Good
                        </button>
                    </li>
                    <li>
                        <button onClick={()=>{console.log("rkbr")}} type="button">Neutral
                        </button>
                    </li>
                    <li>
                        <button onClick={()=>{console.log("rkbr")}} type="button">Bad
                        </button>
                    </li>
                </ul>
                <h2>Statistics</h2>
                <ul>
                    <li>Good:{this.state.good}</li>
                    <li>Neutral:{this.state.neutral}</li>
                    <li>Bad:{this.state.bad}</li>
                </ul>
            </div>
        )
    }
    }
