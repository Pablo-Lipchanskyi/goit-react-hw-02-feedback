import React from "react";
import PropTypes from 'prop-types';

export class FeedbackCounter extends React.Component{
    static propTypes = {
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number
    }
        state = {
            good: 0,
            neutral: 0,
            bad: 0
    }
    goodReview = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1
            }
        }
        
       
    )
    }
    neutralReview = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1
            }
        })
    }
    badReview = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Please leave feedback</h2>
                <ul>
                    <li>
                        <button onClick={this.goodReview} type="button">Good
                        </button>
                    </li>
                    <li>
                        <button onClick={this.neutralReview} type="button">Neutral
                        </button>
                    </li>
                    <li>
                        <button onClick={this.badReview} type="button">Bad
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
