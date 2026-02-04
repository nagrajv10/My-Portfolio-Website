import React, { Component } from "react";

export default class DataAnalysisImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        id="data-analysis-svg"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="864.81"
        height="658.45"
        viewBox="0 0 864.81 658.45"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              stopColor={theme.imageHighlight}
              stopOpacity="0.8"
            />
            <stop
              offset="100%"
              stopColor={theme.imageHighlight}
              stopOpacity="0.3"
            />
          </linearGradient>
        </defs>
        <title>Data Analysis & Visualization</title>

        {/* Main Dashboard Screen */}
        <rect
          x="120"
          y="80"
          width="500"
          height="350"
          rx="15"
          ry="15"
          fill="#fff"
          stroke="#e0e0e0"
          strokeWidth="3"
        />

        {/* Dashboard Header */}
        <rect
          x="120"
          y="80"
          width="500"
          height="50"
          rx="15"
          ry="15"
          fill={theme.imageHighlight}
          opacity="0.2"
        />
        <text x="140" y="112" fontSize="20" fontWeight="bold" fill="#333">
          Analytics Dashboard
        </text>

        {/* Bar Chart */}
        <g transform="translate(150, 160)">
          <rect
            x="0"
            y="80"
            width="40"
            height="120"
            fill={theme.imageHighlight}
            opacity="0.7"
          />
          <rect
            x="50"
            y="40"
            width="40"
            height="160"
            fill={theme.imageHighlight}
            opacity="0.8"
          />
          <rect
            x="100"
            y="100"
            width="40"
            height="100"
            fill={theme.imageHighlight}
            opacity="0.6"
          />
          <rect
            x="150"
            y="20"
            width="40"
            height="180"
            fill={theme.imageHighlight}
            opacity="0.9"
          />

          {/* Chart Axis */}
          <line
            x1="0"
            y1="200"
            x2="200"
            y2="200"
            stroke="#333"
            strokeWidth="2"
          />
          <line x1="0" y1="0" x2="0" y2="200" stroke="#333" strokeWidth="2" />
        </g>

        {/* Line Chart */}
        <g transform="translate(400, 160)">
          <polyline
            points="0,150 30,120 60,140 90,80 120,100 150,40"
            fill="none"
            stroke={theme.imageHighlight}
            strokeWidth="3"
            opacity="0.8"
          />
          {/* Data points */}
          <circle cx="0" cy="150" r="5" fill={theme.imageHighlight} />
          <circle cx="30" cy="120" r="5" fill={theme.imageHighlight} />
          <circle cx="60" cy="140" r="5" fill={theme.imageHighlight} />
          <circle cx="90" cy="80" r="5" fill={theme.imageHighlight} />
          <circle cx="120" cy="100" r="5" fill={theme.imageHighlight} />
          <circle cx="150" cy="40" r="5" fill={theme.imageHighlight} />

          {/* Grid lines */}
          <line
            x1="0"
            y1="200"
            x2="150"
            y2="200"
            stroke="#e0e0e0"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="150"
            x2="150"
            y2="150"
            stroke="#e0e0e0"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="100"
            x2="150"
            y2="100"
            stroke="#e0e0e0"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="50"
            x2="150"
            y2="50"
            stroke="#e0e0e0"
            strokeWidth="1"
          />
        </g>

        {/* Pie Chart */}
        <g transform="translate(700, 200)">
          <circle
            cx="0"
            cy="0"
            r="80"
            fill={theme.imageHighlight}
            opacity="0.3"
          />
          <path
            d="M 0,0 L 0,-80 A 80,80 0 0,1 69.28,-40 Z"
            fill={theme.imageHighlight}
            opacity="0.7"
          />
          <path
            d="M 0,0 L 69.28,-40 A 80,80 0 0,1 40,69.28 Z"
            fill={theme.imageHighlight}
            opacity="0.9"
          />
          <path
            d="M 0,0 L 40,69.28 A 80,80 0 0,1 0,-80 Z"
            fill={theme.imageHighlight}
            opacity="0.5"
          />
        </g>

        {/* Data Table */}
        <g transform="translate(100, 460)">
          <rect
            x="0"
            y="0"
            width="600"
            height="150"
            rx="10"
            ry="10"
            fill="#fff"
            stroke="#e0e0e0"
            strokeWidth="2"
          />

          {/* Table Header */}
          <rect
            x="0"
            y="0"
            width="600"
            height="40"
            rx="10"
            ry="10"
            fill={theme.imageHighlight}
            opacity="0.2"
          />
          <line
            x1="0"
            y1="40"
            x2="600"
            y2="40"
            stroke="#e0e0e0"
            strokeWidth="2"
          />

          {/* Table Rows */}
          <line
            x1="0"
            y1="75"
            x2="600"
            y2="75"
            stroke="#e0e0e0"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="110"
            x2="600"
            y2="110"
            stroke="#e0e0e0"
            strokeWidth="1"
          />

          {/* Table Columns */}
          <line
            x1="150"
            y1="0"
            x2="150"
            y2="150"
            stroke="#e0e0e0"
            strokeWidth="1"
          />
          <line
            x1="300"
            y1="0"
            x2="300"
            y2="150"
            stroke="#e0e0e0"
            strokeWidth="1"
          />
          <line
            x1="450"
            y1="0"
            x2="450"
            y2="150"
            stroke="#e0e0e0"
            strokeWidth="1"
          />

          {/* Column Headers */}
          <text
            x="75"
            y="25"
            fontSize="14"
            fontWeight="bold"
            textAnchor="middle"
            fill="#333"
          >
            Date
          </text>
          <text
            x="225"
            y="25"
            fontSize="14"
            fontWeight="bold"
            textAnchor="middle"
            fill="#333"
          >
            Metric
          </text>
          <text
            x="375"
            y="25"
            fontSize="14"
            fontWeight="bold"
            textAnchor="middle"
            fill="#333"
          >
            Value
          </text>
          <text
            x="525"
            y="25"
            fontSize="14"
            fontWeight="bold"
            textAnchor="middle"
            fill="#333"
          >
            Change
          </text>
        </g>

        {/* Floating Data Points */}
        <circle
          cx="50"
          cy="100"
          r="8"
          fill={theme.imageHighlight}
          opacity="0.6"
        >
          <animate
            attributeName="cy"
            values="100;120;100"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="750"
          cy="450"
          r="6"
          fill={theme.imageHighlight}
          opacity="0.5"
        >
          <animate
            attributeName="cy"
            values="450;470;450"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="820"
          cy="120"
          r="7"
          fill={theme.imageHighlight}
          opacity="0.7"
        >
          <animate
            attributeName="cy"
            values="120;140;120"
            dur="3.5s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Icons for tools */}
        {/* Python Icon */}
        <g transform="translate(50, 500)">
          <circle
            cx="0"
            cy="0"
            r="25"
            fill={theme.imageHighlight}
            opacity="0.2"
          />
          <text
            x="0"
            y="8"
            fontSize="24"
            textAnchor="middle"
            fill={theme.imageHighlight}
          >
            🐍
          </text>
        </g>

        {/* Chart Icon */}
        <g transform="translate(800, 500)">
          <circle
            cx="0"
            cy="0"
            r="25"
            fill={theme.imageHighlight}
            opacity="0.2"
          />
          <text
            x="0"
            y="8"
            fontSize="24"
            textAnchor="middle"
            fill={theme.imageHighlight}
          >
            📊
          </text>
        </g>
      </svg>
    );
  }
}
