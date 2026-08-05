const postBtn = document.getElementById("postBtn");
const postInput = document.getElementById("postInput");
const feed = document.getElementById("feed");

const imageInput = document.getElementById("imageInput");
const searchInput = document.getElementById("searchInput");

const followBtn = document.getElementById("followBtn");
const themeBtn = document.getElementById("themeBtn");



let posts = JSON.parse(localStorage.getItem("posts")) || [];

let following = false;



// Display Posts

function displayPosts(data = posts){


feed.innerHTML="";


data.forEach((post,index)=>{


let div=document.createElement("div");

div.className="post";


div.innerHTML=`

<img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png">


<b>Nagendra ✔</b>

<p>${post.text}</p>


${post.image ? 
`<img class="post-image" src="${post.image}">`
:
""}



<span class="time">

${post.time}

</span>



<div class="actions">


<span class="like" onclick="likePost(${index})">

❤️ ${post.likes}

</span>



<span class="delete" onclick="deletePost(${index})">

🗑 Delete

</span>


</div>




<div class="comment-box">


<input id="comment${index}" 
placeholder="Add comment">


<button onclick="addComment(${index})">

Send

</button>


</div>




<div>


${
(post.comments || [])
.map(c=>`<div class="comment">💬 ${c}</div>`)
.join("")
}


</div>


`;


feed.appendChild(div);



});


}





// Create Post


postBtn.onclick=function(){


let text=postInput.value.trim();


if(text===""){

alert("Write something!");

return;

}



let image="";



if(imageInput.files[0]){


let reader=new FileReader();



reader.onload=function(e){


savePost(text,e.target.result);


}


reader.readAsDataURL(imageInput.files[0]);



}

else{


savePost(text,"");


}


}




function savePost(text,image){


let newPost={


text:text,

image:image,

likes:0,

comments:[],

time:new Date().toLocaleString()


};



posts.unshift(newPost);



localStorage.setItem(
"posts",
JSON.stringify(posts)
);



postInput.value="";

imageInput.value="";


displayPosts();



}





// Like


function likePost(index){


posts[index].likes++;


localStorage.setItem(
"posts",
JSON.stringify(posts)
);



displayPosts();



}





// Delete


function deletePost(index){


posts.splice(index,1);



localStorage.setItem(
"posts",
JSON.stringify(posts)
);



displayPosts();


}





// Comment


function addComment(index){


let input=document.getElementById(
"comment"+index
);



let comment=input.value.trim();



if(comment==="") return;



posts[index].comments.push(comment);



localStorage.setItem(
"posts",
JSON.stringify(posts)
);



displayPosts();



}





// Follow


followBtn.onclick=function(){


let followers=document.getElementById(
"followers"
);



if(!following){


followers.innerHTML=
Number(followers.innerHTML)+1;



followBtn.innerHTML="Following";


followBtn.style.background="green";


following=true;


}


else{


followers.innerHTML=
Number(followers.innerHTML)-1;



followBtn.innerHTML="Follow";


followBtn.style.background="#1da1f2";


following=false;


}



}





// Search


searchInput.onkeyup=function(){



let value=
searchInput.value.toLowerCase();



let result=
posts.filter(post=>
post.text.toLowerCase()
.includes(value)
);



displayPosts(result);



}





// Dark Mode


themeBtn.onclick=function(){



document.body.classList.toggle("dark");



if(document.body.classList.contains("dark")){


themeBtn.innerHTML="☀️";


}

else{


themeBtn.innerHTML="🌙";


}



}





displayPosts();