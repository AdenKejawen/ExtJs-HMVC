/**
 * @class Bleext.movies.view.MoviesWindow
 * @extends Ext.window.Window
 * @autor Hermes L. Herrera
 * @date 2012
 *
 * Description
 *
 **/

Ext.define("AM.movies.view.MoviesWindow",{
    extend:"Ext.window.Window",
    layout:"fit",
    title:"Filmes de inter-nos",
    width:650,
    height:350,
    initComponent:function(){
        var me = this;
        me.items = Ext.create("AM.movies.view.MoviesGrid");
        me.callParent();
    }
});
