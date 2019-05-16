//variables
const courses = document.querySelector("#courses-list");

//listeners

loadEventListeners();

function loadEventListeners() {
  // When a new course is added
  courses.addEventListener("click", buyCourses);
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
  console.log(course);
}
