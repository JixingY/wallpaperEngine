var posts = [];

function postall(){
    var change=document.getElementById("postcontent").value;
    document.getElementById("code64").innerHTML=String(change);
}
function clearall(){
    document.getElementById("code64").innerHTML="";
    document.getElementById("postcontent").value="";
}

function createPost(){

    let post = {
        newcontent:document.getElementById("postcontent").value
    };

    // Create AJAX Request
    var xmlhttp = new XMLHttpRequest();

    // Define function to run on response
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Update the page on success
            loadPosts();
        }
    };

    // Open connection to server & send the post data using a POST request
    // We will cover POST requests in more detail in week 8
    xmlhttp.open("POST", "/addpost", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(post));

}

function updatePosts() {

    // Reset the page
    document.getElementById('code64').innerHTML = '';

    // Iterate over each post in the array by index
    for(let i=0; i<posts.length; i++){

        let post = posts[i];
        // Generate the post/question element and populate its inner HTML
        let postDiv = document.createElement("P");
        postDiv.classList.add("post");
        postDiv.innerHTML=post.newcontent;

        // Append the question/post to the page
        //document.getElementById("code64").appendChild(postDiv);
        document.getElementById('code64').innerHTML = post.newcontent;
    }


}

function loadPosts() {

    // Create AJAX Request
    var xmlhttp = new XMLHttpRequest();

    // Define function to run on response
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Parse the JSON and update the posts array
            posts = JSON.parse(this.responseText);
            // Call the updatePosts function to update the page
            //document.getElementById('code64').innerHTML = post.newcontent;
            updatePosts();
        }
    };

    // Open connection to server
    xmlhttp.open("POST", "/posts", true);

    // Send request
    xmlhttp.send();

}