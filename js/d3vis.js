// Let's draw something

var body = d3.select("body");
var graphics = body.append("svg");
var width = 900;
var height = 600;
var arc = d3.svg.arc()
    .innerRadius(80)
    .outerRadius(100)
    .startAngle(2)
    .endAngle(3.5);

graphics.attr("width", width);
graphics.attr("height", height);


graphics.append("circle")
    .attr("r", 250)
    .attr("cx", 400)
    .attr("cy", 300)
    .style("fill","yellow");

graphics.append("circle")
    .attr("r", 50)
    .attr("cx", 400)
    .attr("cy", 300)
    .style("fill","black")
    .attr("text-anchor", "start")
    .attr("transform", "translate(70, -50)");

graphics.append("circle")
    .attr("r", 50)
    .attr("cx", 400)
    .attr("cy", 300)
    .style("fill","black")
    .attr("text-anchor", "start")
    .attr("transform", "translate(-70, -50)");


graphics.append("rect")
    .attr("x", 40 )
    .attr("y", 20)
    .attr("height", 30)
    .attr("width", 50)
    .attr("text-anchor", "start")
    .attr("transform", "rotate(45)");

graphics.append("line")
    .attr("x1", 100)
    .attr("y1", 100)
    .attr("x2",360 )
    .attr("y2",100 )
    .attr("stroke","#000000" )
    .attr("stroke-width",2 );

//graphics.append("text")
   // .text("X Axis")
    //.attr("x", 190)
    //.attr("y", 100)
    //.attr("text-anchor", "start")
    //.attr("transform", "rotate(0) scale(2, 3)");

graphics.append("line")
    .attr("x1", 100)
    .attr("y1", 20)
    .attr("x2",100 )
    .attr("y2",100 )
    .attr("stroke","#000000" )
    .attr("stroke-width",2 );

graphics.append("text")
    .text("Y Axis")
    .attr("x", 110)
    .attr("y", 20);

/*graphics.append("rect")
    .attr("x", 110 )
    .attr("y", 40)
    .attr("height", 55)
    .attr("width", 30)
    .style("fill", "#4682B4")
    .style("stroke", "#CCCCCC")
    .style("stroke-width", "3px")
    .style("opacity", "0.5");*/


/*graphics.append("rect")
    .attr("x", 150 )
    .attr("y", 70)
    .attr("height", 25)
    .attr("width", 30);*/

graphics.append("path")
    .attr("d", arc)
    .attr("text-anchor", "start")
    .attr("transform", "translate(400, 300)");

var myx = 110;
var myy = 40;
var myheight = 0;
var heightslist = [55,35,50,20,0,65];
for (i = 0; i < heightslist.length; i++) {
    myheight=heightslist[i];
    graphics.append("rect")
        .attr("x", myx )
        .attr("y", 95-myheight)
        .attr("height", myheight)
        .attr("width", 30);

    myx =myx +35;
    // myy = myy+20;
    myheight = myheight-20;
}