let condidates=[
    {
    id:0,
    name:"Emily Selman",
    email:"emilyselman@exemple.com",
    applied:"Applied on January 7,2020",
    phone:" Completed phone screening",
    image:'/image/admin.jpg'
},
{
    id:1,
    name:"Emily Selman",
    email:"emilyselman@exemple.com",
    applied:"Applied on January 7,2020",
    phone:" Completed phone screening",
    image:'/image/admin.jpg'

},
{
    id:2,
    name:"Emily Selman",
    email:"emilyselman@exemple.com",
    applied:"Applied on January 7,2020",
    phone:" Completed phone screening",
    image:'/image/messi.jpg'

},
{
    id:3,
    name:"Emily Selman",
    email:"emilyselman@exemple.com",
    applied:"Applied on January 7,2020",
    phone:" Completed phone screening",
    image:'/image/admin.jpg'

},
{
    id:4,
    name:"Emily Selman",
    email:"emilyselman@exemple.com",
    applied:"Applied on January 7,2020",
    phone:" Completed phone screening",
    image:'/image/admin.jpg'

},
{
    id:5,
    name:"Emily Selman",
    email:"emilyselman@exemple.com",
    applied:"Applied on January 7,2020",
    phone:" Completed phone screening",
    image:'/image/admin.jpg'

},
{
    id:6,
    name:"Emily Selman",
    email:"emilyselman@exemple.com",
    applied:"Applied on January 7,2020",
    phone:" Completed phone screening",
    image:'/image/admin.jpg'

},
{
    id:7,
    name:"Emily Selman",
    email:"emilyselman@exemple.com",
    applied:"Applied on January 7,2020",
    phone:" Completed phone screening",
    image:'/image/bobo.png'

},
{
    id:8,
    name:"Emily Selman",
    email:"emilyselman@exemple.com",
    applied:"Applied on January 7,2020",
    phone:" Completed phone screening",
    image:'/image/admin.jpg'

},
{
    id:9,
    name:"Emily Selman",
    email:"emilyselman@exemple.com",
    applied:"Applied on January 7,2020",
    phone:" Completed phone screening",
    image:'/image/admin.jpg'

},
{
  id:10,
  name:"Emily Selman",
  email:"emilyselman@exemple.com",
  applied:"Applied on January 7,2020",
  phone:" Completed phone screening",
  image:'/image/admin.jpg'

},
{
  id:11,
  name:"Emily Selman",
  email:"emilyselman@exemple.com",
  applied:"Applied on January 7,2020",
  phone:" Completed phone screening",
  image:'/image/admin.jpg'

},
{
  id:12,
  name:"Emily Selman",
  email:"emilyselman@exemple.com",
  applied:"Applied on January 7,2020",
  phone:" Completed phone screening",
  image:'/image/admin.jpg'

},

]
const allCondidates= document.querySelector('.condidates');
/*function condidate(){
    condidates.forEach((condidat)=>{
        allCondidates.innerHTML +=`
        <div class="  flex flex-wrap items-center  justify-between  pt-6 pl-4 border-b pb-6  ">
  <div class=" flex gap-4 ">
    <img src="${condidat.image}" class="h-10 w-10 rounded-full  "  >
    <div>
    <p class="text-purple-800">${condidat.name}</p>
    <i class="fa-solid fa-envelope  " ></i><span class="pl-2 text-gray-600">${condidat.email}</span>
</div>
  </div>
  <div>
    <p>${condidat.applied}</p>
   <span><svg class="w-4 h-4 mr-1.5  inline text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
    ${condidat.phone}</span>
  </div>
  <div class="mr-8">
    <i class="fa-solid fa-angle-right"></i>
  </div>

</div>
        
        `
    })
}
condidate();*/


const candidatesPerPage = 10; 
let currentPage = 1; 

function displayCandidates() {
  allCondidates.innerHTML = '';

  const startIndex = (currentPage - 1) * candidatesPerPage;
  const endIndex = startIndex + candidatesPerPage;

  const candidatesToDisplay = condidates.slice(startIndex, endIndex);

  candidatesToDisplay.forEach((candidate) => {
    allCondidates.innerHTML += `
    <div class=" bg-transparent flex flex-wrap items-center bg-white  justify-between  pt-6 pl-4 border-b pb-6  ">
<div class=" flex gap-4 bg-white ">
<img src="${candidate.image}" class="h-10 w-10 rounded-full  "  >
<div>
<p class="text-purple-800">${candidate.name}</p>
<i class="fa-solid fa-envelope text-gray-500 "></i><span class="pl-2 text-gray-600">${candidate.email}</span>
</div>
</div>
<div>
<p>${candidate.applied}</p>
<span><svg class="w-4 h-4 mr-1.5  inline text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
${candidate.phone}</span>
</div>
<div class="mr-8">
<i class="fa-solid fa-angle-right"></i>
</div>

</div>
    
    `
})

  displayPaginationControls();
}

function displayPaginationControls() {
  

  let paginationControls = `
    <div class="pagination-controls  flex justify-between mb-5 mt-2">
      <button class="pagination-button flex   text-gray-500" ${currentPage === currentPage ? 'disabled' : ''}>
    
      <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>

      
      Previous</button>


      <div >
    <ul class="flex">
      <li>
        <a href="#" class="px-3 py-2 leading-tight text-gray-500  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
      </li>
     
      <li>
        <a href="#" aria-current="page" class="px-3 py-2 text-purple-800 border-t-[2px]  border-purple-700 z-10 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">2</a>
      </li>
      <li>
        <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
      </li>
      <li>
        <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
      </li>
      <li>
        <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
      </li>
      <li>
        <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">6</a>
      </li>
      <li></ul>
  </div>
     
      <button class="pagination-button flex text-gray-500" ${currentPage === 2 ? 'disabled' : ''}>
      Next
      <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

      
      

      
      </button>
    </div>
  `;

  allCondidates.insertAdjacentHTML('beforeend', paginationControls);

  const paginationButtons = document.querySelectorAll('.pagination-button');
  paginationButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (event.target.textContent === 'Previous') {
        currentPage --;
       
        
       
      } else {
        currentPage++;
      }
      displayCandidates();
    });
  });
}

displayCandidates(); 

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; }