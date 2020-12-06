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

    function addAsync(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`);
        setTimeout(() => {
             const result = x + y;
            console.log(`   [@Service] returning result`);
            return result;
        }, 5000);
    }

    function addAsyncClient(x,y){
        console.log(`[@Client] triggering the service`);
        const result = addAsync(x,y);
        console.log(`[@Client] result = ${result}`);
    }

    window['addAsyncClient'] = addAsyncClient;
})();