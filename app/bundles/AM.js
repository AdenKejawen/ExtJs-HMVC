Ext.define('AM.bundles.AM',{
    extend:'Ext.app.Bundle',
    name: 'AM',
    controllers:["AM.movies.controller.Movies"],
    launch:function(){
        var win = Ext.create("AM.movies.view.MoviesWindow");
        win.show();
    }
});