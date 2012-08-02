Ext.define('Board.view.ChartBar', {
    extend:'Ext.chart.Chart',
    alias:'widget.chartbarboard',
    store: 'Board.store.Grid',
    axes: [{
        type: 'Numeric',
        position: 'left',
        fields: ['price'],
        minimum: 0,
        hidden: true
    }, {
        type: 'Category',
        position: 'bottom',
        fields: ['company'],
        label: {
            renderer: AM.config.getRender(),
            font: '9px Arial',
            rotate: {
                degrees: 270
            }
        }
    }],
    series: [{
        type: 'column',
        axis: 'left',
        highlight: true,
        style: {
            fill: '#456d9f'
        },
        highlightCfg: {
            fill: '#a2b5ca'
        },
        label: {
            contrast: true,
            display: 'insideEnd',
            field: 'price',
            color: '#000',
            orientation: 'vertical',
            'text-anchor': 'middle'
        },
        xField: 'name',
        yField: ['price']
    }]        
});