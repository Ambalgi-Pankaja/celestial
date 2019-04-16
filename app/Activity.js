import {hierarchy} from './Options';
import vis from '../node_modules/vis';

    function toVisFrame(nodes, edges) {
        var visNodes = new vis.DataSet(nodes);
    
        var visEdges = new vis.DataSet(edges);
      
        var container = document.getElementById('mynetwork');

        var data = {
            nodes: visNodes,
            edges: visEdges
        };

        var network = new vis.Network(container, data, hierarchy());
    }

    function toGraph(ctx, labelList, dataList) {
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labelList,
                datasets: [{
                    label: '# of requests for a service trace',
                    data: dataList,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Number of requests for each service trace'
                  },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

export {toVisFrame, toGraph}