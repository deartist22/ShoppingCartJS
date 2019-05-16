//variables
const courses = document.querySelector("#courses-list");
      shoppingCartContent = document.querySelector("#cart-content tbody")

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

}
