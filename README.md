# d3-barchart

D3 4.0 implementation of timeseries plugin that supports easy customization of barchart (histogram). 

The plugin is implemented as a closure that support method chaining.

## Installing

Dependency: D3-timeseries requires D3 4.x version as dependency

Installing: All the content of d3-timeseries plugin is in the folder libs/d3_barchart, including d3.barchart.js and d3.barchart.css

## Usage example
let data = [{
		x1: 0,
    x2: 9,
		y: 245
	}, {
    x1: 9,
    x2: 122,
		y: 150
	}, {
    x1: 12,
    x2: 16,
		y: 126
		lend_range: [12, 16],
		count: 126
	}, {
    x1: 16,
    x2: 18,
		y: 123
	}]

let barchart1 = d3.barchart()
		.width(250)
		.height(100)
    
let svg = d3.select('body').append('svg')
		.data([data])
		.call(barchart1)
