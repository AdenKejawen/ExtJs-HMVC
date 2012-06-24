Ext.define('Ext.app.Socket',{
    extend:'Ext.util.Observable',
    application:null,
    constructor: function(){
        
        this.callParent(arguments);
        var me = this;
        var socket = window.WebSocket || window.MozWebSocket;
        
        if(!socket)
            throw 'Sorry, but your browser doesn\'t WebSockets';
        if(!me.host)
            throw 'Expected URL param';
        try{
            me.socket = new socket(me.host);
        }
        catch(e){
            throw e;
        }
        this.application.send = function(message, type){
            me.send(JSON.stringify({
                type:type ||'app', 
                msg:message
            }));
        }
        this.application.disconnect = function(){
            me.disconnect();
        }
        this.socket.onopen = function(){
            me.onConnect();
        };
        this.socket.onerror = function(){
            me.onError();
        };
        this.socket.onmessage = function(data){
            me.onMessage(data, me);
        };
        this.socket.onclose = function(){
            me.onClose();
        }
    },

    disconnect: function(){
        this.socket.close();
    },

    send: function(message) {
        this.socket.send(message);
    },

    onConnect: function() {
        this.fireEvent('socket_connect');
    },

    onError: function() {
        this.fireEvent('socket_error');
    },

    onClose: function() {
        this.application.fireEvent('socket_close');
    },

    onMessage: function(message,me) {
        me.parseReponse(JSON.parse(message.data), me.socket);
    //me.application.fireEvent('socket_message', JSON.parse(message.data), message);
    },
    parseReponse: function(response, argObject) {
        
        for (var i = 0;response && i < response.length; i++) {
            var bundle = response[i]['name']||response[i]['id'];
            
            if (!Ext.ClassManager.isCreated(bundle)) {
                console.log('Not exist bundle: ' + bundle);
            } else {
                try {
                    this.application.getBundle(bundle).handleResponse(response[i], argObject);             
                } catch (e) {
                    console.log('An error occured in bundle ' + bundle);
                }
            }
        }
    }
})

