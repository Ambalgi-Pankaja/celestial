let layoutOptions = {
    improvedLayout:true,
    hierarchical: {
        enabled: true,
        levelSeparation: 30000,
        nodeSpacing: 8000,
        sortMethod: 'directed',
        parentCentralization: true,
        blockShifting: true,
        edgeMinimization: false
    }
}

let color = {
    color:'#848484',
    highlight:'#ff0000',
    hover: '#ff0000',
    inherit: 'from',
    opacity:1.0
  }

let edgeOptions = {
    arrows: {
        to: true,
        from: false
    },
    color: color,
    chosen: {
        edge: true,
        label: true
    },
    font: {
        multi: true,
        size: 1004,
        color: '#FFFFFF',
        strokeWidth: 0
    }
}
    
var hierarchyNodeOptions = {
    shape: 'dot',
    size: 1004,
    chosen: true,
    color: {
        border: 'blue',
        background: 'black',
        hover: 'green'
    },
    shadow: true,
    font: {
        multi: true,
        size: 1004,
        color: '#FFFFFF'
    },
    labelHighlightBold: true
}

export function hierarchy() {
        var options = {
            autoResize: true,
            clickToUse: true,
            nodes: hierarchyNodeOptions,
            edges: edgeOptions,
            interaction: {
                hover: true
            },
            layout: layoutOptions,
            physics: {
                enabled: false
            },
            interaction: {
                hover:true,
                  dragNodes: true,
                  zoomView: true,
                  dragView: true 
            }
        };
    return options;
}