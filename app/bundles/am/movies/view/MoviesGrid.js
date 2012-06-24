/**
 * @class Bleext.movies.view.MoviesGrid
 * @extends Ext.grid.Panel
 * @autor Hermes L. Herrera
 * @date 2012
 *
 * Description
 *
 *
 **/

Ext.define("AM.movies.view.MoviesGrid",{
    extend:"Ext.grid.Panel",
    store:"AM.movies.store.Movies",
    border:false,
    initComponent:function() {
        var me = this;
        me.columns = [{
            header:"Imagen",
            dataIndex:"tns",
            width:100,
            renderer:me.showImage
        },{
            header:"Titulo",
            dataIndex:"title",
            width:180
        },{
            header:"Fecha",
            dataIndex:"releaseDate",
            flex:1
        },{
            header:"Autor",
            dataIndex:"author",
            flex:1
        },{
            header:"Duracion",
            dataIndex:"duration",
            width:60
        }];
        me.callParent();
    },
    showImage:function(value,record){
        return '<img src="'+value+'" style="width:100px" />';
    }
});