var axisColor = "#333333";
var axisGridlineColor = "#d8d8d8";
var barEffect = {
	background : {
		border : {
			top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
		},
		drawingEffect : "normal",
	},
	legend : {
		drawingEffect : "normal",
		title : { visible : true },
	},
	tooltip : {
		drawingEffect : "normal"
	},
	xAxis : {
		title : {
			visible : true,
		},
		axisline : { visible : false, },
		gridline : {
			type : "line",
			color : axisGridlineColor,
			showLastLine : true,
		},
		color : axisColor,
	},
	yAxis : {
		title : {
			visible : true,
		},
		gridline : {
			color : axisGridlineColor,
		},
		color : axisColor,
	},
	xAxis2 : {
		title : {
			visible : true,
		},
		axisline : { visible : false, },
		gridline : {
			color : axisGridlineColor,
		},
		color : axisColor,
	},
	plotArea : {
		drawingEffect : "normal",
	},
};

var dualbarEffect = {
		background : {
			border : {
				top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
			},
			drawingEffect : "normal",
		},
		legend : {
			drawingEffect : "normal",
			title : { visible : true },
		},
		tooltip : {
			drawingEffect : "normal"
		},
		xAxis : {
			title : {
				visible : true,
				applyAxislineColor : true,
			},
			axisline : { visible : false, },
			gridline : {
				type : "line",
				color : axisGridlineColor,
				showLastLine : true,
			},
			color : axisColor,
		},
		yAxis : {
			title : {
				visible : true,
			},
			gridline : {
				color : axisGridlineColor,
			},
			color : axisColor,
		},
		xAxis2 : {
			title : {
				visible : true,
				applyAxislineColor : true,
			},
			axisline : { visible : false, },
			gridline : {
				color : axisGridlineColor,
			},
			color : axisColor,
		},
		plotArea : {
			drawingEffect : "normal",
		},
	};

var verticalbarEffect = {
	background : {
		border : {
			top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
		},
		drawingEffect : "normal"
	},
	legend : {
		drawingEffect : "normal",
		title : { visible : true },
	},
	tooltip : {
		drawingEffect : "normal"
	},
	plotArea : {
		drawingEffect : "normal"
	},
	yAxis : {
		title : {
			visible : true,
		},
		axisline : { visible : false, },
		gridline : {
			type : "line",
			color : axisGridlineColor,
			showLastLine : true,
		},
		color : axisColor,
	},
	xAxis : {
		title : {
			visible : true,
		},
		gridline : {
			color : axisGridlineColor,
		},
		color : axisColor,
	},
	yAxis2 : {
		title : {
			visible : true,
		},
		axisline : { visible : false, },
		gridline : {
			color : axisGridlineColor,
		},
		color : axisColor,
	},
};

var dualverticalbarEffect = {
		background : {
			border : {
				top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
			},
			drawingEffect : "normal"
		},
		legend : {
			drawingEffect : "normal",
			title : { visible : true },
		},
		tooltip : {
			drawingEffect : "normal"
		},
		plotArea : {
			drawingEffect : "normal"
		},
		yAxis : {
			title : {
				visible : true,
				applyAxislineColor : true,
			},
			axisline : { visible : false, },
			gridline : {
				type : "line",
				color : axisGridlineColor,
				showLastLine : true,
			},
			color : axisColor,
		},
		xAxis : {
			title : {
				visible : true,
			},
			gridline : {
				color : axisGridlineColor,
			},
			color : axisColor,
		},
		yAxis2 : {
			title : {
				visible : true,
				applyAxislineColor : true,
			},
			axisline : { visible : false, },
			gridline : {
				color : axisGridlineColor,
			},
			color : axisColor,
		},
	};

var stackedbarEffect = {

	background : {
		border : {
			top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
		},
		drawingEffect : "normal"
	},
	legend : {
		drawingEffect : "normal",
		title : { visible : true },
	},
	tooltip : {
		drawingEffect : "normal"
	},
	plotArea : {
		drawingEffect : "normal"
	},
	xAxis : {
		title : {
			visible : true,
		},
		axisline : { visible : false, },
		gridline : {
			type : "line",
			color : axisGridlineColor,
			showLastLine : true,
		},
		color : axisColor,
	},
	yAxis : {
		title : {
			visible : true,
		},
		gridline : {
			color : axisGridlineColor,
		},
		color : axisColor,
	},
	xAxis2 : {
		title : {
			visible : true,
		},
		axisline : { visible : false, },
		gridline : {
			color : axisGridlineColor,
		},
		color : axisColor,
	}
};

var dualstackedbarEffect = {

		background : {
			border : {
				top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
			},
			drawingEffect : "normal"
		},
		legend : {
			drawingEffect : "normal",
			title : { visible : true },
		},
		tooltip : {
			drawingEffect : "normal"
		},
		plotArea : {
			drawingEffect : "normal"
		},
		xAxis : {
			title : {
				visible : true,
				applyAxislineColor : true,
			},
			axisline : { visible : false, },
			gridline : {
				type : "line",
				color : axisGridlineColor,
				showLastLine : true,
			},
			color : axisColor,
		},
		yAxis : {
			title : {
				visible : true,
			},
			gridline : {
				color : axisGridlineColor,
			},
			color : axisColor,
		},
		xAxis2 : {
			title : {
				visible : true,
				applyAxislineColor : true,
			},
			axisline : { visible : false, },
			gridline : {
				color : axisGridlineColor,
			},
			color : axisColor,
		}
	};

var stackedverticalbarEffect = {

	background : {
		border : {
			top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
		},
		drawingEffect : "normal"
	},
	legend : {
		drawingEffect : "normal",
		title : { visible : true },
	},
	tooltip : {
		drawingEffect : "normal"
	},
	plotArea : {
		drawingEffect : "normal"
	},
	yAxis : {
		title : {
			visible : true,
		},
		axisline : { visible : false, },
		gridline : {
			type : "line",
			color : axisGridlineColor,
			showLastLine : true,
		},
		color : axisColor,
	},
	xAxis : {
		title : {
			visible : true,
		},
		gridline : {
			color : axisGridlineColor,
		},
		color : axisColor,
	},
	yAxis2 : {
		title : {
			visible : true,
		},
		axisline : { visible : false, },
		gridline : {
			color : axisGridlineColor,
		},
		color : axisColor,
	}
};

var dualstackedverticalbarEffect = {

		background : {
			border : {
				top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
			},
			drawingEffect : "normal"
		},
		legend : {
			drawingEffect : "normal",
			title : { visible : true },
		},
		tooltip : {
			drawingEffect : "normal"
		},
		plotArea : {
			drawingEffect : "normal"
		},
		yAxis : {
			title : {
				visible : true,
				applyAxislineColor : true,
			},
			axisline : { visible : false, },
			gridline : {
				type : "line",
				color : axisGridlineColor,
				showLastLine : true,
			},
			color : axisColor,
		},
		xAxis : {
			title : {
				visible : true,
			},
			gridline : {
				color : axisGridlineColor,
			},
			color : axisColor,
		},
		yAxis2 : {
			title : {
				visible : true,
				applyAxislineColor : true,
			},
			axisline : { visible : false, },
			gridline : {
				color : axisGridlineColor,
			},
			color : axisColor,
		}
	};

var lineEffect = {

	background : {
		border : {
			top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
		},
		drawingEffect : "normal"
	},
	legend : {
		drawingEffect : "normal",
		title : { visible : true },
	},
	tooltip : {
		drawingEffect : "normal"
	},
	plotArea : {
		drawingEffect : "normal"
	},
	yAxis : {
		title : {
			visible : true,
		},
		axisline : { visible : false, },
		gridline : {
			type : "line",
			color : axisGridlineColor,
			showLastLine : true,
		},
		color : axisColor,
	},
	xAxis : {
		title : {
			visible : true,
		},
		gridline : {
			color : axisGridlineColor,
		},
		color : axisColor,
	},
	yAxis2 : {
		title : {
			visible : true,
		},
		axisline : { visible : false, },
		gridline : {
			color : axisGridlineColor,
		},
		color : axisColor,
	}
};
var duallineEffect = {

		background : {
			border : {
				top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
			},
			drawingEffect : "normal"
		},
		legend : {
			drawingEffect : "normal",
			title : { visible : true },
		},
		tooltip : {
			drawingEffect : "normal"
		},
		plotArea : {
			drawingEffect : "normal"
		},
		yAxis : {
			title : {
				visible : true,
				applyAxislineColor : true,
			},
			axisline : { visible : false, },
			gridline : {
				type : "line",
				color : axisGridlineColor,
				showLastLine : true,
			},
			color : axisColor,
		},
		xAxis : {
			title : {
				visible : true,
			},
			gridline : {
				color : axisGridlineColor,
			},
			color : axisColor,
		},
		yAxis2 : {
			title : {
				visible : true,
				applyAxislineColor : true,
			},
			axisline : { visible : false, },
			gridline : {
				color : axisGridlineColor,
			},
			color : axisColor,
		}
	};
var horizontallineEffect = {

	background : {
		border : {
			top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
		},
		drawingEffect : "normal"
	},
	legend : {
		drawingEffect : "normal",
		title : { visible : true },
	},
	tooltip : {
		drawingEffect : "normal"
	},
	plotArea : {
		drawingEffect : "normal"
	},
	xAxis : {
		title : {
			visible : true,
		},
		axisline : { visible : false, },
		gridline : {
			type : "line",
			color : axisGridlineColor,
			showLastLine : true,
		},
		color : axisColor,
	},
	yAxis : {
		title : {
			visible : true,
		},
		gridline : {
			color : axisGridlineColor,
		},
		color : axisColor,
	},
	xAxis2 : {
		title : {
			visible : true,
		},
		axisline : { visible : false, },
		gridline : {
			color : axisGridlineColor,
		},
		color : axisColor,
	}
};

var dualhorizontallineEffect = {

		background : {
			border : {
				top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
			},
			drawingEffect : "normal"
		},
		legend : {
			drawingEffect : "normal",
			title : { visible : true },
		},
		tooltip : {
			drawingEffect : "normal"
		},
		plotArea : {
			drawingEffect : "normal"
		},
		xAxis : {
			title : {
				visible : true,
				applyAxislineColor : true,
			},
			axisline : { visible : false, },
			gridline : {
				type : "line",
				color : axisGridlineColor,
				showLastLine : true,
			},
			color : axisColor,
		},
		yAxis : {
			title : {
				visible : true,
			},
			gridline : {
				color : axisGridlineColor,
			},
			color : axisColor,
		},
		xAxis2 : {
			title : {
				visible : true,
				applyAxislineColor : true,
			},
			axisline : { visible : false, },
			gridline : {
				color : axisGridlineColor,
			},
			color : axisColor,
		}
	};
var combinationEffect = {

	background : {
		border : {
			top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
		},
		drawingEffect : "normal"
	},
	legend : {
		drawingEffect : "normal",
		title : { visible : true },
	},
	tooltip : {
		drawingEffect : "normal"
	},
	plotArea : {
		drawingEffect : "normal"
	},
	yAxis : {
		title : {
			visible : true,
		},
		axisline : { visible : false, },
		gridline : {
			type : "line",
			color : axisGridlineColor,
			showLastLine : true,
		},
		color : axisColor,
	},
	xAxis : {
		title : {
			visible : true,
		},
		gridline : {
			color : axisGridlineColor,
		},
		color : axisColor,
	},
	yAxis2 : {
		title : {
			visible : true,
		},
		axisline : { visible : false, },
		gridline : {
			color : axisGridlineColor,
		},
		color : axisColor,
	}
};

var dualcombinationEffect = {

		background : {
			border : {
				top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
			},
			drawingEffect : "normal"
		},
		legend : {
			drawingEffect : "normal",
			title : { visible : true },
		},
		tooltip : {
			drawingEffect : "normal"
		},
		plotArea : {
			drawingEffect : "normal"
		},
		yAxis : {
			title : {
				visible : true,
				applyAxislineColor : true,
			},
			axisline : { visible : false, },
			gridline : {
				type : "line",
				color : axisGridlineColor,
				showLastLine : true,
			},
			color : axisColor,
		},
		xAxis : {
			title : {
				visible : true,
			},
			gridline : {
				color : axisGridlineColor,
			},
			color : axisColor,
		},
		yAxis2 : {
			title : {
				visible : true,
				applyAxislineColor : true,
			},
			axisline : { visible : false, },
			gridline : {
				color : axisGridlineColor,
			},
			color : axisColor,
		}
	};
var horizontalcombinationEffect = {

	background : {
		border : {
			top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
		},
		drawingEffect : "normal"
	},
	legend : {
		drawingEffect : "normal",
		title : { visible : true },
	},
	tooltip : {
		drawingEffect : "normal"
	},
	plotArea : {
		drawingEffect : "normal"
	},
	xAxis : {
		title : {
			visible : true,
		},
		axisline : { visible : false, },
		gridline : {
			type : "line",
			color : axisGridlineColor,
			showLastLine : true,
		},
		color : axisColor,
	},
	yAxis : {
		title : {
			visible : true,
		},
		gridline : {
			color : axisGridlineColor,
		},
		color : axisColor,
	},
	xAxis2 : {
		title : {
			visible : true,
		},
		axisline : { visible : false, },
		gridline : {
			color : axisGridlineColor,
		},
		color : axisColor,
	}
};

var dualhorizontalcombinationEffect = {

		background : {
			border : {
				top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
			},
			drawingEffect : "normal"
		},
		legend : {
			drawingEffect : "normal",
			title : { visible : true },
		},
		tooltip : {
			drawingEffect : "normal"
		},
		plotArea : {
			drawingEffect : "normal"
		},
		xAxis : {
			title : {
				visible : true,
				applyAxislineColor : true,
			},
			axisline : { visible : false, },
			gridline : {
				type : "line",
				color : axisGridlineColor,
				showLastLine : true,
			},
			color : axisColor,
		},
		yAxis : {
			title : {
				visible : true,
			},
			gridline : {
				color : axisGridlineColor,
			},
			color : axisColor,
		},
		xAxis2 : {
			title : {
				visible : true,
				applyAxislineColor : true,
			},
			axisline : { visible : false, },
			gridline : {
				color : axisGridlineColor,
			},
			color : axisColor,
		}
	};
var bubbleEffect = {
	background : {
		border : {
			top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
		},
		drawingEffect : "normal"
	},
	legend : {
		drawingEffect : "normal",
		title : { visible : true },
	},
	plotArea : {
		drawingEffect : "normal"
	},
	yAxis : {
		title : {
			visible : true,
		},
		axisline : { visible : false, },
		gridline : {
			type : "line",
			color : axisGridlineColor,
			showLastLine : true,
		},
		color : axisColor,
	},
	xAxis : {
		title : {
			visible : true,
		},
		gridline : {
			color : axisGridlineColor,
		},
		color : axisColor,
	},
};

var pieEffect = {
	legend : {
		drawingEffect : "normal",
		title : { visible : true },
	},
	plotArea : {
		drawingEffect : "normal"
	}	
};

var radarEffect = {
	background : {
		visible: false,
	},
	legend : {
		drawingEffect : "normal",
		title : { visible : true },
	},
	tooltip : {
		drawingEffect : "normal"
	},
	plotArea : {
		drawingEffect : "normal",
		valueAxis : {
			title : { visible : true, },
		},
		dataline : {
			fill : {
				transparency : 0,
			},
		},
	},
};

sap.viz.TemplateManager.register({
	id : "standard",
	name : "Standard",
	version : "4.0.0",
	properties : {
		'viz/bar' : barEffect,
		'viz/multi_bar' : barEffect,
		'viz/dual_bar' : dualbarEffect,
		'viz/multi_dual_bar' : dualbarEffect,
		'viz/column' : verticalbarEffect,
		'viz/multi_column' : verticalbarEffect,
		'viz/dual_column' : dualverticalbarEffect,
		'viz/multi_dual_column' : dualverticalbarEffect,
		'viz/stacked_bar' : stackedbarEffect,
		'viz/multi_stacked_bar' : stackedbarEffect,
		'viz/dual_stacked_bar' : dualstackedbarEffect,
		'viz/multi_dual_stacked_bar' : dualstackedbarEffect,
		'viz/100_stacked_bar' : stackedbarEffect,
		'viz/multi_100_stacked_bar' : stackedbarEffect,
		'viz/100_dual_stacked_bar' : dualstackedbarEffect,
		'viz/multi_100_dual_stacked_bar' : dualstackedbarEffect,
		'viz/stacked_column' : stackedverticalbarEffect,
		'viz/multi_stacked_column' : stackedverticalbarEffect,
		'viz/dual_stacked_column' : dualstackedverticalbarEffect,
		'viz/multi_dual_stacked_column' : dualstackedverticalbarEffect,
		'viz/100_stacked_column' : stackedverticalbarEffect,
		'viz/multi_100_stacked_column' : stackedverticalbarEffect,
		'viz/100_dual_stacked_column' : dualstackedverticalbarEffect,
		'viz/multi_100_dual_stacked_column' : dualstackedverticalbarEffect,
		'riv/cbar' : {
			background : {
				drawingEffect : "normal"
			},
			legend : {
				drawingEffect : "normal",
				title : { visible : true },
			},
			tooltip : {
				drawingEffect : "normal"
			},
			plotArea : {
				drawingEffect : "normal"
			},
			yAxis : {
				title : {
					visible : true,
				},		
				gridline : {
					color : axisGridlineColor,
				},
				color : axisColor,
			},
		},
		'viz/combination' : combinationEffect,
		'viz/horizontal_combination' : horizontalcombinationEffect,
		'viz/dual_combination' : dualcombinationEffect,
		'viz/dual_horizontal_combination' : dualhorizontalcombinationEffect,
		'viz/boxplot' : {
			background : {
				border : {
					top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
				},
				drawingEffect : "normal"
			},
			legend : {
				drawingEffect : "normal",
				title : { visible : true },
			},
			tooltip : {
				drawingEffect : "normal"
			},
			yAxis : {
				title : {
					visible : true,
				},		
				axisline : {
					visible : false,
				},
				gridline : {
					type : "line",
					color : axisGridlineColor,
					showLastLine : true,
				},
				color : axisColor,
			},
			xAxis : {
				title : {
					visible : true,
				},		
				gridline : {
					color : axisGridlineColor,
				},
				color : axisColor,
			},
			plotArea : {
				drawingEffect : "normal"
			}
		},
		'viz/horizontal_boxplot' : {
			background : {
				border : {
					top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
				},
				drawingEffect : "normal"
			},
			legend : {
				drawingEffect : "normal",
				title : { visible : true },
			},
			tooltip : {
				drawingEffect : "normal"
			},
			xAxis : {
				title : {
					visible : true,
				},		
				axisline : {
					visible : false,
				},
				gridline : {
					type : "line",
					color : axisGridlineColor,
					showLastLine : true,
				},
				color : axisColor,
			},
			yAxis : {
				title : {
					visible : true,
				},		
				gridline : {
					color : axisGridlineColor,
				},
				color : axisColor,
			},
			plotArea : {
				drawingEffect : "normal"
			}
		},
		'viz/waterfall' : {
			background : {
				border : {
					top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
				},
				drawingEffect : "normal"
			},
			legend : {
				drawingEffect : "normal",
				title : { visible : true },
			},
			tooltip : {
				drawingEffect : "normal"
			},
			yAxis : {
				title : {
					visible : true,
				},
				axisline : {
					visible : false,
				},
				gridline : {
					type : "line",
					color : axisGridlineColor,
					showLastLine : true,
				},
				color : axisColor,
			},
			xAxis : {
				title : {
					visible : true,
				},
				color : axisColor,
			},
			plotArea : {
				drawingEffect : "normal"
			}
		},
		'viz/horizontal_waterfall' : {
			background : {
				border : {
					top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
				},
				drawingEffect : "normal"
			},
			legend : {
				drawingEffect : "normal",
				title : { visible : true },
			},
			tooltip : {
				drawingEffect : "normal"
			},
			xAxis : {
				title : {
					visible : true,
				},
				axisline : {
					visible : false,
				},
				gridline : {
					type : "line",
					color : axisGridlineColor,
					showLastLine : true,
				},
				color : axisColor,
			},
			yAxis : {
				title : {
					visible : true,
				},
				color : axisColor,
			},
			plotArea : {
				drawingEffect : "normal"
			}
		},
		'viz/line' : lineEffect,
		'viz/multi_line' : lineEffect,
		'viz/dual_line' : duallineEffect,
		'viz/multi_dual_line' : duallineEffect,
		'viz/horizontal_line' : horizontallineEffect,
		'viz/multi_horizontal_line' : horizontallineEffect,
		'viz/dual_horizontal_line' : dualhorizontallineEffect,
		'viz/multi_dual_horizontal_line' : dualhorizontallineEffect,
		'viz/pie' : pieEffect,
		'viz/multi_pie' : pieEffect,
		'viz/donut' : pieEffect,
		'viz/multi_donut' : pieEffect,
		'viz/bubble' : bubbleEffect,
		'viz/multi_bubble' : bubbleEffect,
		'viz/scatter' : bubbleEffect,
		'viz/multi_scatter' : bubbleEffect,
		'viz/scatter_matrix' : bubbleEffect,
		'viz/radar' : radarEffect,
		'viz/multi_radar' : radarEffect,
		'viz/tagcloud' : {
			legend : {
				title : { visible : true },
			},
		},
		'viz/heatmap' : {
			legend : {
				title : { visible : true },
			},
			xAxis : {
				title : {
					visible : true,
				},
				color : axisColor,
			},
			yAxis : {
				title : {
					visible : true,
				},
				color : axisColor,
			},
		}
	},
	css : {
		'.viz-title-label' : {
			fill : '#333333',
			"font-family" : "'Open Sans', Arial, Helvetica, sans-serif",
			"font-size" : "14px",
			"font-weigth" : "bold",
		},
		'.viz-legend-title' : {
			'fill' : "black",
			"font-family" : "'Open Sans', Arial, Helvetica, sans-serif",
			"font-size" : "11px",
			"font-weigth" : "bold",
		},
		'.viz-legend-valueLabel' : {
			'fill' : "#707070",
			"font-family" : "'Open Sans', Arial, Helvetica, sans-serif",
			"font-size" : "11px",
			"font-weigth" : "bold",
		},
		'.viz-axis-title' : {
			'fill' : "black",
			"font-family" : "'Open Sans', Arial, Helvetica, sans-serif",
			"font-size" : "11px",
			"font-weigth" : "bold",
		},
		'.viz-axis-label' : {
			'fill' : "#707070",
			"font-family" : "'Open Sans', Arial, Helvetica, sans-serif",
			"font-size" : "11px",
			"font-weigth" : "bold",
		},
		'.viz-plot-background' : {
			'fill' : '#ffffff'
		},
		'.viz-pie-sector' : {
			'stroke' : 'white',
		},
		'.viz-radar-polar-axis-labels' : {
			'fill' : "#646464",
			"font-family" : "'Open Sans', Arial, Helvetica, sans-serif",
			"font-size" : "11px",
			"font-weigth" : "bold",
		},
	}
});
