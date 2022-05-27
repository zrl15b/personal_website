const h2 = document.createElement("h2");
h2.textContent = "About me:";

document.querySelector("body").appendChild(h2);

function imagefun1() {
    var Image_Id = document.getElementById('getImage');
    if (Image_Id.src.match("https://cbs12.com/resources/ftptransfer/wpec/maps/FLIRsatTest.jpg")) {
        Image_Id.src = "https://familydestinationsguide.com/wp-content/uploads/2021/03/Palm-Beach.jpg";
    }
    else {
        Image_Id.src = "https://cbs12.com/resources/ftptransfer/wpec/maps/FLIRsatTest.jpg";
    }
}       
function imagefun2() {
    var Image_Id = document.getElementById('getImage1');
    if (Image_Id.src.match("https://d28htnjz2elwuj.cloudfront.net/wp-content/uploads/2019/03/11123420/Florida-State-University-400x400.jpg")) {
        Image_Id.src = "https://www.aiche.org/sites/default/files/images/courses/chemeng_nonchemeng_onsite_chemical-formula-blackboard-v2680615.jpg";
    }
    else {
        Image_Id.src = "https://d28htnjz2elwuj.cloudfront.net/wp-content/uploads/2019/03/11123420/Florida-State-University-400x400.jpg";
    }
}
function imagefun3() {
    var Image_Id = document.getElementById('getImage2');
    if (Image_Id.src.match("https://www.captechu.edu/sites/default/files/General_Dynamics.jpg")) {
        Image_Id.src = "https://upload.wikimedia.org/wikipedia/commons/b/bb/US_Navy_040730-N-1234E-002_PCU_Virginia_%28SSN_774%29_returns_to_the_General_Dynamics_Electric_Boat_shipyard.jpg";
    }
    else {
        Image_Id.src = "https://www.captechu.edu/sites/default/files/General_Dynamics.jpg";
    }
}        