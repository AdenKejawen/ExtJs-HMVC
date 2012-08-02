Ext.define('Board.view.ChartRadar', {
    extend:'Ext.chart.Chart',
    alias :'widget.chartradar',
    animate: true,
    store: 'Board.store.Radar',
    margin: '0 0 0 0',
    insetPadding: 14,
    axes: [{
        steps: 5,
        type: 'Radial',
        position: 'radial',
        maximum: 100
    }],
    series: [{
        type: 'radar',
        xField: 'Name',
        yField: 'Data',
        showInLegend: false,
        showMarkers: true,
        markerConfig: {
            radius: 4,
            size: 4
        },
        style: {
            fill: 'rgb(194,214,240)',
            opacity: 0.5,
            'stroke-width': 0.5
        }
    }]
});