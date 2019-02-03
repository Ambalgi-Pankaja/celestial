import {Node, NodeLevel, NodeWeight} from './read/Node';
import Edge from './read/Edge';

document.getElementById("file").onchange = function() {
    
    var file = this.files[0];

    var fileReader = new FileReader();

    var nodes = [];
    var weight;
    var nodeWeightList = [];
    var nodeLevelList = [];

    fileReader.onload = function(progressEvent){
    
        var lines = this.result.split(',');
        
        lines.forEach(
            line => {
                var eachLine = line.split('=');
                weight = eachLine[1];
                nodes = ("Start ->"+ eachLine[0]).split('->');
                var level = 1;
                nodes.forEach(
                    element=> 
                    {
                        var nodeLevel = new NodeLevel(element.trim(), level++)
                        nodeLevelList.push(nodeLevel);
                    }   
                )
    
                var nodeWeight = new NodeWeight(nodes, weight);

                nodeWeightList.push(nodeWeight);
            }
        )

        let edges = makeEdges(nodeWeightList);
        // console.log(edges[0]);
        groupAndAddWeight(edges[0], edges[1], nodeLevelList)
    };
    fileReader.readAsText(file);
}

class Concat {
    constructor(joinednodes , count) {
        this.joinednodes = joinednodes,
        this.count = count
    }
}

let makeEdges = function(nodeWeightList) {

    let nodeList = [];
    let edgeList = [];
    let i = 0;
    nodeWeightList.forEach(element => {
            for(var i = 0 ; i < element.node.length-1; i++) {
                let edge = new Edge(element.node[i].trim(), element.node[i+1].trim(), element.weight);
                edgeList.push(edge);
            }
            for(var i = 0 ; i < element.node.length; i++) {                    
                nodeList.push(element.node[i].trim());
            }
    });
    // console.log(nodeList);
    return [nodeList, edgeList];
}

function groupAndAddWeight(nodeList, edgeList, nodeLevelList) {

    let uniqueNodes = Array.from(new Set(nodeList));

    let concat = [];

    edgeList.forEach(

        element => {

            var joinednodes = element.from+"|"+element.to;

            var newconcat = new Concat(joinednodes, element.weight);
    
            concat.push(newconcat);
        }
        
    )

    let linq = Enumerable.From(concat);

    let result = linq.GroupBy(function(x){ return x.joinednodes; })
        .Select(function(x){
          return {
            joinednodes: x.Key(),
            count: x.Sum(function(y){ return y.count|0; })
          };
        }).ToArray();

    var finalEdges = [];

    result.forEach(
        element => {
            var res = element.joinednodes.split('|');
            var edge = new Edge(res[0], res[1], element.weight);
            finalEdges.push(edge);
        }
    )
    
    console.log(finalEdges, uniqueNodes, nodeLevelList)
    // toVisFrame(finalFromTo, uniqueNodes, nodeLevelList);
}
