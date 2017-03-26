import React from "react"
import Results from "../components/Results"
import { battle } from "../utils/githubHelpers"

const ResultsContainer = React.createClass({
  getInitialState: function() {
    return {
      scores: [],
      isLoading: true
    }
  },
  componentDidMount: function() {
    battle(this.props.location.state.playersInfo)
      .then(function(scores) {
        this.setState({
          scores: scores,
          isLoading: false
        })
      }.bind(this))
  },
  render: function() {
    return (
      <Results 
        isLoading={this.state.isLoading} 
        scores={this.state.scores} 
        playersInfo={this.props.location.state.playersInfo} />
    )
  }
})

export default ResultsContainer