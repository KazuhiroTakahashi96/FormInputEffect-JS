const label = document.querySelectorAll(".form-control label");

// map ---> defined function ---> defined array ---> defined function grabs items from the defined array ---> then the map creates a new array with those item.
label.forEach(function (label) {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, index) =>
        `<span style='transition-delay:${index * 50}ms'>${letter}</span>`
    )
    .join("");
});

// split https://www.sejuku.net/blog/27672
// map https://www.sejuku.net/blog/21812
// join https://www.sejuku.net/blog/23137
