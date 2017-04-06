function onLoadFunction(){
    alert("sdsd ");
    gapi.client.setApiKey('AIzaSyAqja6RVXq5jQwCP3T3c3WXV2CkDpBKzQA');
    gapi.client.load('plus','v1',function(){});
}