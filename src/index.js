export const paintCards = () => {
  const lis = document.querySelectorAll('.item:nth-child(odd)');
  for (let li of lis) {
    li.style.backgroundColor = 'red';
  }
};

export const findElement = () => {
  let li = document.querySelector('.item');

  while (li) {
    if (li.matches('.likedItem')) {
      li.style.backgroundColor = 'blue';
    }
    li = li.nextElementSibling;
  }
};
