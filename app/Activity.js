import {highlight} from './Options';
import vis from '../node_modules/vis';

class Activity {

    constructor(id, label, group, level){
        this.id = id,
        this.label = label,
        this.group = group,
        this.level = level
    }
}

class VisEdges{
    constructor(from, to, label){
        this.from = from,
        this.to = to,
        this.label = label
    }
}

    function toFrame(edges, nodes, nodeLevelList) {

        var activities = getActivities(nodes, nodeLevelList);
        
        var nodes = new vis.DataSet(activities);

        var visEdges = new vis.DataSet(getEdges(edges));
        
        var container = document.getElementById('mynetwork');

        var data = {
            nodes: nodes,
            edges: visEdges
        };

        var network = new vis.Network(container, data, highlight());
    }

    function getActivities(nodes, nodeLevelList) {
        var activities = [];
        nodes.forEach(element => {
            var thisNode = element;
            var nodeLevel = nodeLevelList.find(function(element){
                if (element.node == thisNode){
                    return element.level
                };
            });
            
            let activity = new Activity(
                element, element.split('/').join("/\n"), 1, nodeLevel.level
            )
            activities.push(activity)
        });

        return activities;
    }

    function getEdges(edges) {
        var visEdges = [];
        edges.forEach(element => {
        let edge = new VisEdges(
            element.from,
            element.to,
            element.weight.toString()
        )   
        visEdges.push(edge);
    });
        return visEdges;
    }

export {Activity, toFrame}