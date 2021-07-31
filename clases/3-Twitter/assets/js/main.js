const postActionLike = document.querySelectorAll(".PostAction--like");
let $PostActionLike = [...postActionLike];

const handleButtonLikes = (e) => {
  e.stopPropagation();
  e.preventDefault();

  e.target.classList.toggle("PostAction--like--active");
};

$PostActionLike.forEach((button) => {
  button.addEventListener("click", handleButtonLikes);
});
