console.log("Index started");

import {VisActivity} from './Edge';
import {toVisFrame, toGraph} from './Activity';

const axios = require('axios');

document.getElementById("prom1").onclick = function() {
    console.log("INsidefunction")
    axios.get('http://localhost:8080/prom')
    .then(res => {
        console.log("inside prom")
       prom(res.data);
    })
    .catch(err => {
        console.log(err)
    });
}

let prom = function(data){
    let nodes = data[0].nodes
    let edges = data[0].edges
    let labelList = [];
    let dataList = [];
    let visNodes = [];

    nodes.forEach(element => {
        console.log(element);
            let visN = new VisActivity(
                element.id,
                element.label.replace(/[-/]/g, '\n'),
                element.group,
                element.level
            )
            visNodes.push(visN);
        }
    )
    toVisFrame(visNodes, edges)

    var ctx = document.getElementById('myChart').getContext('2d');

    edges.forEach(element => {
            labelList.push(element.name);
            dataList.push(element.label);
    });

    toGraph(ctx, labelList, dataList);
}
