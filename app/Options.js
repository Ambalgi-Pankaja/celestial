import vis from '../node_modules/vis';

let layoutOptions = {
    hierarchical: {
        enabled: true,
        levelSeparation: 200,
        nodeSpacing: 400,
        treeSpacing: 250,
        sortMethod: 'directed'
    }
}
    
export function highlight() {
        
        var color = {
            color:'#848484',
            highlight:'#ff0000',
            hover: '#ff0000',
            inherit: 'from',
            opacity:1.0
          }
        
        var nodeOptions = {
            shape: 'dot',
            color: {
                border: 'blue',
                background: 'black',
                hover: 'green'
            },
            shadow: true,
            font: {
                multi: true
            }
        }
        
        var edgeOptions = {
            arrows: {
                to: true,
                from: false
            },
            color: color
        }
        
        var options = {
            autoResize: true,
            clickToUse: true,
            nodes: nodeOptions,
            edges: edgeOptions,
            interaction: {
                hover: true
            },
            layout: layoutOptions
        };
        return options;
    }

    function sos(){

    }
    
    function allOK(){

    }