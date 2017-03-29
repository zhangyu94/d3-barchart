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

	let data = raw_data.map(function(ele) {
		return {
			x1: ele.lend_range[0],
			x2: ele.lend_range[1],
			y: ele.count
		}
	})

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
	let svg = d3.select("body").append("svg")
		.data([data])
		.call(barchart)
}
