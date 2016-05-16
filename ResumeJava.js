/**
 * Created by Thornton on 5/4/16.
 */
function getPuppies(arrayNames, notcallback){
    var puppies = goGrabPuppies();

    notcallback(puppies);
}

function goGrabPuppies(){
    return http.get('puppyBarn/api/puppies');

}
getPuppies(['spot', 'fido'], function (myPups) {
    if (myPups.length == 0){
        getMad();
    }
    else{
        snuggle(myPups);
    }
});