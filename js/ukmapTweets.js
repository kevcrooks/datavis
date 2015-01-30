var width = 900;
var height = 700;

var graphics = d3.select("body")
	.append("svg")
	.attr("width", width)
	.attr("height", height);

var color = d3.scale.ordinal()
    .domain(["ENG", "SCT", "WLS", "NIR"])
    .range(["#ddccdd", "#ddddcc", "#ccdddd", "#ccddcc"]);

// Load our map data
d3.json("data/uk.json", loadData);

function loadData(error, dataset) {
	if (error) {
		console.log(error);
	}
	else {
        console.log(dataset);
		drawData(dataset);
	}
};

// Load our Tweet Data
d3.json("data/usersGraph.json", loadUserData);

function loadUserData(error, dataset) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(dataset);
        drawUserData(dataset);
    }
};

// Map projection
var myProjection = d3.geo.orthographic()
    .center([-4.4, 55.4])
    .scale(4000)
    .translate([width / 2, height / 2]);

//Draw our Tweet data
function drawUserData(dataset) {

    for (var i = 0; i < dataset.nodes.length; i++) {
        var user = dataset.nodes[i];

        // this is just coordinates = [longitude, latitude]
        var coordinates = [d3.mean(user.tweets, getLongitude),
            d3.mean(user.tweets, getLatitude)];

        user.geo = coordinates;
    }


    //console.log("translate(" + mycity[0]+ "," + mycity[1]+")");
    //console.log("translate(629.3489936008269, 481.711491748129)");

    graphics.selectAll(".tweet")
        .data(dataset.nodes)
        .enter()
        .append("circle")
        .attr("class", "tweet")
        .attr("r", 2.5)
        .style("fill", "#800014")
        .attr("transform", function (user) {
            return "translate(" + myProjection([getLongitude(user.tweets[0]), getLatitude(user.tweets[0])]) + ")";
        }
    );

    graphics.selectAll(".link")
        .data(dataset.links)
        .enter()
        .append("line")
        .style("stroke", "#999")
        .style("opacity", 0.1)
        .attr("x1", function (d) {
            return myProjection(dataset.nodes[d.source].geo)[0];
        })
        .attr("y1", function (d) {
            return myProjection(dataset.nodes[d.source].geo)[1];
        })
        .attr("x2", function (d) {
            return myProjection(dataset.nodes[d.target].geo)[0];
        })
        .attr("y2", function (d) {
            return myProjection(dataset.nodes[d.target].geo)[1];
        })
}

//Draw our Map data
function drawData(dataset) {
    var ukRegions = topojson.feature(dataset,
        dataset.objects.subunits).features;

    var path = d3.geo.path()
        .projection(myProjection);

    graphics.selectAll("path")
        .data(ukRegions)
        .enter()
        .append("path")
        .attr("d", path)
        .style("fill", function (region) {
            return color(region.id);
        });
}

function getLatitude(tweet) {
    return tweet.geo.coordinates[0];
}

function getLongitude(tweet) {
    return tweet.geo.coordinates[1];
}

