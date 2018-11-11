import React, { Component } from 'react';

import { round } from 'lodash';

import './ProgressBar.css';

const mainStrokeColor = '#1890ff';
const mainBgColor = '#f5f5f5';
export default class ProgressBar extends Component {
  getStepBGColor() {
    const { steps } = this.props;
    //step is the percentage
    const { strokeColors } = this.props;
    let bgcolors = [];
    let color = {};

    for (let i = 0; i < steps.length; i++) {
      if (strokeColors && strokeColors.length > 0 && strokeColors.length > i) {
        color = strokeColors[i];
      } else {
        color = mainStrokeColor;
      }
      bgcolors.push({ color, percentage: round(steps[i]) });
    }
    if (strokeColors.length > steps.length) {
      for (let i = steps.length; i < strokeColors.length; i++) {
        bgcolors.push({ color: strokeColors[i], percentage: 100 });
      }
    }
    return `linear-gradient(to right, ${bgcolors.reduce((prev, bgcolor) => {
      if (prev) {
        return prev + `, ${bgcolor.color} ${bgcolor.percentage}%`;
      } else {
        return `${bgcolor.color} ${bgcolor.percentage}%`;
      }
    }, null)})`;
  }

  render() {
    const { steps, percentage } = this.props;
    return (
      <div className="ProgressBar">
        <div className="stepsContainer">
          <div className="step step_last" style={{ background: this.getStepBGColor() }} />
          <div className="stepsContainerBg" style={{ background: `${mainBgColor}`, zIndex: `${steps.length + 2}`, width: `${100 - percentage}%` }} />
        </div>
      </div>
    );
  }
}
