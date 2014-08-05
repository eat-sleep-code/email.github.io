function storageSetItem(key, value, storageType) {
    /* Set default values for arguments */
    storageType = typeof storageType !== 'undefined' ? storageType : 'local';

    /* Create object for storing storage value and timestamp */
    var storageObject = {
        value: value, 
        timestamp: new Date()
    };
    
    /* Add to storage */
    if (storageType == 'local') {
        localStorage.setItem(key, JSON.stringify(storageObject));
    }
    else {
        sessionStorage.setItem(key, JSON.stringify(storageObject));
    }
}



function storageGetItem(key, storageType, maxAgeInMinutes) {
    /* Set default values for arguments */
    storageType = typeof storageType !== 'undefined' ? storageType : 'local';
    maxAgeInMinutes = typeof maxAgeInMinutes !== 'undefined' ? maxAgeInMinutes : 10080; /* Ignored for Session Storage */
    
    var storageObject;
    
    /* Get value from storage, if it is older than the max number of minutes return null */
    if (storageType == 'local') {
        /* Get from local storage */
        storageObject = JSON.parse(localStorage.getItem(key));
        if (storageObject !== null) {
            var storageDate = Date.parse(storageObject.timestamp);
             var dateDifference = Math.floor((new Date() - storageDate) / 60000);	
            /* alert('(Local) Date Difference: ' + dateDifference + ', Max Age In Minutes: ' + maxAgeInMinutes) */
            if (dateDifference >= maxAgeInMinutes) {
                /* Expired item, remove it from storage, return null */
                localStorage.removeItem(key);
                return null;
            }   
        }
        else {
            return null;
        }
    }
    else {
        /* Get from session storage */
        storageObject = JSON.parse(sessionStorage.getItem(key));
        if (storageObject === null) {
            return null;
        }
    }   
    /* Return value */
    /* alert (storageObject.value); */
    return storageObject.value;
}



function storageClear(storageType) 
{
    /* Clears storage of ALL values for a site */
    storageType = typeof storageType !== 'undefined' ? storageType : 'local';
    if (storageType == 'local') {
        localStorage.clear();
    }
    else
    {
        sessionStorage.clear();
    }
}
