const SERVER_URL = "https://jsonplaceholder.typicode.com/users";
const PIC_SERVER_URL = "https://jsonplaceholder.typicode.com/photos";

// Login 
function loadData()
{   
    loadFromServer();
}

async function loadFromServer()
{
    var Name = document.getElementById("submit").value;
    var response = await fetch(SERVER_URL+Name)

    var json = await response.json();
    fetchData(json);
}
/*
Lambda function:
response =>{
    console.log("My result:")
    console.log(response.text())
}*/

function fetchData(data)
{   

    var Name = document.getElementById("username").value;
    var Pass = document.getElementById("password").value;

    for(var i=0; i < data.length; i++)
    {
        if ( data[i].email == Name) 
        {
            console.log ( 'user does exist ');
            if ( data[i].id == Pass)
            {
            console.log( " correct pass ");
          //  window.open('successPage.html');
            window.open('photos.html');
            console.log( " I have started a new page for this event  ");
            }
        }
        else if (data[i].email != Name && data[i].id != Pass )
        {
            window.open('error.html');
           // document.getElementById('error_msg').innerHTML = "Wrong email or password";
        }
    }
    console.log("end");
 
}

//  Photos 
function loadPhotos()
{   
    loadPhotosFromServer();
}
async function loadPhotosFromServer()
{
    var pics = document.getElementById("load").value;
    var response = await fetch(PIC_SERVER_URL+pics)

    var json = await response.json();
    fetchPhotos(json);
}


function fetchPhotos (photos)
{

    for(var i=0; i < 50; i++) //for(var i=0; i < photos.length; i++)
    {
        // I have limited it to 50 images because it takes so much time while running the page.

        var img = photos[i].url;
        var img1 = document.createElement("img");
        img1.style.width = "150px";
        img1.style.padding = "10px";
        img1.style.margin = "60px";
        img1.style.border = '3px groove';
        img1.style.display = 'block';

        img1.src = img;
        document.body.appendChild(img1);

        document.body.append(photos[i].title);

    }

}
