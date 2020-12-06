(function(){
    function addSync(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`);
        const result = x + y;
        console.log(`   [@Service] returning result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@Client] triggering the service`);
        const result = addSync(x,y);
        console.log(`[@Client] result = ${result}`);
    }

    window['addSyncClient'] = addSyncClient;

    function addAsync(x,y, callback){
        console.log(`   [@Service] processing ${x} and ${y}`);
        setTimeout(() => {
            const result = x + y;
            console.log(`   [@Service] returning result`);
            callback(result);
        }, 5000);
    }

    function addAsyncClient(x,y){
        console.log(`[@Client] triggering the service`);
        addAsync(x,y, function(result){
            console.log(`[@Client] result = ${result}`);
        });
    }

    window['addAsyncClient'] = addAsyncClient;

    function addAsyncPromise(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`);
        const p = new Promise(function(resolveFn, rejectFn){
            setTimeout(() => {
                const result = x + y;
                console.log(`   [@Service] returning result`);
                resolveFn(result);
            }, 5000);
        });
        return p;
    }

    window['addAsyncPromise'] = addAsyncPromise;
})();


