Ext.define('VS.bundles.AM',{
    extend:'Ext.app.ApplicationBundle',
    controllers:["AM.movies.controller.Movies"],
    launch:function(){
        var win = Ext.create("AM.movies.view.MoviesWindow");
        win.show();
    }
});
