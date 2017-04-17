# d3-barchart

D3 4.0 implementation of timeseries plugin that supports easy customization of barchart (histogram). 

The plugin is implemented as a closure that support method chaining.

## Installing

Dependency: D3-timeseries requires D3 4.x version as dependency

Installing: All the content of d3-timeseries plugin is in the folder libs/d3_barchart, including d3.barchart.js and d3.barchart.css

## Usage example
```js
let data = [{
	x1: 0,
    	x2: 36,
	y: 245
}, {
	x1: 36,
    	x2: 48,
	y: 150
}, {
    	x1: 48,
    	x2: 64,
	y: 126
}, {
    	x1: 64,
   	x2: 90,
	y: 123
}]

let barchart = d3.barchart()
	.width(250)
	.height(100)
    
let svg = d3.select('body').append('svg')
	.data([data])
	.call(barchart)
```

## Usage scenarios in our lab
### 1. Weibo Geo  
![image](http://note.youdao.com/yws/public/resource/79e994a9eae80352b49dda8385f14c83/xmlnote/8ACF803568E34CBF83CD45CCBCA75123/1003)

- mix line chart with bar chart

### 2. Trajectory Cleaning
![image](http://note.youdao.com/yws/public/resource/79e994a9eae80352b49dda8385f14c83/xmlnote/0D9799E4C2214B4FB568F6C982F9B37E/1008)

- mix parallel coordinates with bar chart
