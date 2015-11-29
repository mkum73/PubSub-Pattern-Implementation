var pubsub = (function(myObject) {
        var topics = {}; // Storage for topics that can be broadcast
        
        /*  Subscribe to events of interest with a specific topic name and 
        a callback function to be executed when the topic/event is observed */
        function subscribe( topic, func ) {
            if (!topics[topic]) {
                topics[topic] = [];
            }
            topics[topic].push({
                func: func
            });
        };
        /* Publish or broadcast events of interest with a specific topic name
         and arguments such as the data to pass along*/
        function publish ( topic, args ) {
            if ( !topics[topic] ) {
                return false;
            }
            console.log(args);
            var subscribers = topics[topic];
            for(var i = 0;i < subscribers.length;i++){
                subscribers[i].func(args);//calling method one by one for subscribers
            }
            return this;
        };

        return{
            publish: publish,
            subscribe : subscribe
        }
})();
