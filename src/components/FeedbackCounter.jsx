import React, { Component } from "react";

class FeedbackCounter extends Component{
    constructor() {
        super()
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }
}