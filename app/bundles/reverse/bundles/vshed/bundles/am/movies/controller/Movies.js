/**
 * @class AM.movies.controller.Movies
 * @extends Ext.app.Controller
 * @autor Hermes L. Herrera
 * @date 2012
 *
 * Description
 *
 *
 **/

Ext.define("AM.movies.controller.Movies",{
    extend:"Ext.app.Controller",
    models:["AM.movies.model.Movie"],
    stores:["AM.movies.store.Movies"],
    views : ["AM.movies.view.MoviesWindow","AM.movies.view.MoviesGrid"],
    init:function() {
        var me = this;
        me.control({
            "window gridpanel":{
                itemclick:me.showMovie
            }
        });
    },
    showMovie:function(grid,record){
        Ext.Msg.alert("Alert","Now playing: '"+record.get("title")+"'");
    }
});