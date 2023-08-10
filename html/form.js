const formHandler = () => {
  console.log("sub");
};

const form = document.getElementsByName("form1")[0];
form.addEventListener(onsubmit, (event) => {
  console.log("sdf");
  event.preventDefault();
});
