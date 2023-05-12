document.addEventListener("DOMContentLoaded", () => {
  let form = documet.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildToDo(e.target.new_node.value);
    form.reset();
  });
});

function handleDelete(e) {
  e.target.parentNode.remove();
}

function buildToDo(todo) {
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = "X";
  p.textContent = `${todo}`;
  p.appendChild(btn);
  document.querySelector("#todo_container").appendChild(p);
}
