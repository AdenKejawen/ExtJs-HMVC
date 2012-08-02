/**
 * @class Bleext.movies.store.Movies
 * @extends Ext.data.Store
 * @autor Hermes L. Herrera
 * @date 2012
 *
 * Description
 *
 *
 **/

Ext.define("AM.movies.store.Movies",{
    extend:"Ext.data.Store",
    model:"AM.movies.model.Movie",
    autoLoad:true,
    proxy:{
        type:"ajax",
        url:AM.config.getUrlGrid(),
        reader:{
            type:"json",
            root:"data"
        }
    }
});