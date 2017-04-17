let main = function() {
	let raw_data = [{
		lend_range: [0, 9],
		count: 245
	}, {
		lend_range: [9, 12],
		count: 150
	}, {
		lend_range: [12, 16],
		count: 126
	}, {
		lend_range: [16, 18],
		count: 123
	}, {
		lend_range: [18, 22],
		count: 324
	}, {
		lend_range: [22, 26],
		count: 398
	}, {
		lend_range: [26, 30],
		count: 201
	}, {
		lend_range: [30, 32],
		count: 103
	}, {
		lend_range: [32, 36],
		count: 32
	}, {
		lend_range: [36, 40],
		count: 498
	}, {
		lend_range: [40, 45],
		count: 101
	}]

	for (var i = 0; i < raw_data.length; ++i) {
		raw_data[i].lend_range[0] = i * 4
		raw_data[i].lend_range[1] = (i + 1) * 4
	}

	let data1 = raw_data.map(function(ele) {
		return {
			x1: ele.lend_range[0],
			x2: ele.lend_range[1],
			y: ele.count
		}
	})

	let data2 = raw_data.map(function(ele) {
		return {
			x1: ele.lend_range[0],
			x2: ele.lend_range[1],
			y: ele.count - 100 < 0 ? 0 : ele.count - 100
		}
	})


	let barchart1 = d3.barchart()
		.width(250)
		.height(100)
		.margin({
			left: 50,
			right: 40
		})
		.yTickNum(3)
		.xTickNum(10)
		.xLabel('#Book')
		.yLabel('#Node')
		.bar_interval(0.5)
		.brush_trigger(function(d3_event,brushed_bar_selection){
			let range = d3_event.selection
			let brush_range = brushed_bar_selection.nodes()
				.reduce(function(list,bar){
					let datum = d3.select(bar).data()[0]
					list.push(datum.x1,datum.x2)
					return list
				},[])
			console.log(brush_range)
		})
	let barchart2 = d3.barchart()
		.width(250)
		.height(100)
		.margin({
			left: 50,
			right: 40
		})
		.draw_xAxis(false)
		.draw_yAxis(false)
		.enable_brush(false)
		.color('#ef8a62')
		.bar_interval(0.5)
	let svg = d3.select('body').append('svg')
	let g1 = svg.append('g')
		.data([data1])
		.call(barchart1)
		
	let g2 = svg.append('g')
		.data([data2])
		.call(barchart2)
		

	/*
	let barchart = d3.barchart()
		.width(250)
		.height(100)
		.margin({
			left: 50,
			right: 40
		})
		.yTickNum(3)
		.xTickNum(10)
		.xLabel('#Book')
		.yLabel('#Node')
		.draw_xAxis(false)
		.draw_yAxis(false)
		.brush_trigger(function(d3_event,brushed_bar_selection){
			let range = d3_event.selection
			let brush_range = brushed_bar_selection.nodes()
				.reduce(function(list,bar){
					let datum = d3.select(bar).data()[0]
					list.push(datum.x1,datum.x2)
					return list
				},[])
			console.log(brush_range)
		})
		.enable_brush(false)
	let svg = d3.select('body').append('svg')
		.data([data1])
		.call(barchart)
		*/
}
