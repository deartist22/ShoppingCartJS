//variables
const courses = document.querySelector("#courses-list");
      shoppingCartContent = document.querySelector("#cart-content tbody");
      clearCartBtn = document.querySelector("#clear-cart")

//listeners

loadEventListeners();

function loadEventListeners() {
  // When a new course is added
  courses.addEventListener("click", buyCourses);
  //When the remove button is clicked
  shoppingCartContent.addEventListener("click", removeCourse);
  //When clear cart button is clicked
  clearCartBtn.addEventListener("click", clearCart);
}

//functions

function buyCourses(e) {
  e.preventDefault();
  //use delegations to find the course that was added
  if (e.target.classList.contains("add-to-cart")) {
    //read the courses value
    const course = e.target.parentElement.parentElement;
    //read the values
    getCourseInfo(course);
  }
}

function getCourseInfo(course) {
  //Create object with course data
  const courseInfo = {
    image: course.querySelector("img").src,
    title: course.querySelector("h4").textContent,
    price: course.querySelector(".price span").textContent,
    id: course.querySelector("a").getAttribute("data-id")
  };
  //Insert into the shopping cart
  addIntoCart(courseInfo);
}

//Display the selected course into the shopping cart

function addIntoCart(course) {
  //create a <tr>
  const row = document.createElement("tr");
  row.innerHTML = `
    <tr>
      <td>
        <img src="${course.image}" width=100>
      </td>
      <td>${course.title}</td>
      <td>${course.price}</td>
      <td>
        <a href="" class="remove" data-id="${course.id}">X</a>
      </td>
    </tr>
  `;
shoppingCartContent.appendChild(row);
  //Add course to local storage
  saveIntoStorage(course)
}

//Add courses into local storage
function saveIntoStorage(course) {
  let courses = getCoursesFromStorage();
  //Add the course into the array
  courses.push(course);
  //Since storage only saves strings, we need to convert JSON into strings
  localStorage.setItem("courses", JSON.stringify(courses));
}

//Get content from storage
function getCoursesFromStorage() {
  let courses
  //if something exist on storage then we get the value, otherwise create an empty array
  if(localStorage.getItem("courses") === null) {
    courses = [];
  } else {
    courses = JSON.parse(localStorage.getItem("courses"));
  }
  return courses;
}

//remove course from the dom
function removeCourse(e) {
  e.preventDefault();
  if(e.target.classList.contains("remove")) {
    e.target.parentElement.parentElement.remove();
  }
}
//clear the shopping cart
function clearCart() {
  while(shoppingCartContent.firstChild) {
    shoppingCartContent.removeChild(shoppingCartContent.firstChild);
  }
}