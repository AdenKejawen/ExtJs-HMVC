/**
 * @class AM.movies.model.Movie
 * @extends Ext.data.Model
 * @autor Hermes L. Herrera
 * @date 2012
 *
 * Description
 *
 *
 **/

Ext.define("AM.movies.model.Movie",{
    extend:"Ext.data.Model",
    fields:[{
        name:"author",
        type:"string"
    },{
        name:"tns",
        type:"string"
    },{
        name:"title",
        type:"string"
    },{
        name:"url",
        type:"string"
    },{
        name:"duration",
        type:"float"
    },{
        name:"releaseDate",
        type:"date",
        formatDate:"Y-m-d"
    },{
        name:"description",
        type:"string"
    }]
});