const links = document.querySelectorAll('a');

const groupedLinks = {};

links.forEach(link => {
  const firstLetter = link.innerText.charAt(0).toLowerCase();
  if (!groupedLinks[firstLetter]) {
    groupedLinks[firstLetter] = [];
  }
  groupedLinks[firstLetter].push(link);
});

for (const letter in groupedLinks) {
  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown');

  const button = document.createElement('button');
  button.classList.add('dropbtn');
  button.textContent = letter.toUpperCase();
  dropdown.appendChild(button);

  const dropdownContent = document.createElement('div');
  dropdownContent.classList.add('dropdown-content');

    groupedLinks[letter].forEach(link => {
	const listItem = document.createElement('a');
	listItem.textContent = link.innerText;
      dropdownContent.appendChild(listItem);
  });

  dropdown.appendChild(dropdownContent);

  document.body.appendChild(dropdown);
}


function closeDropdown() {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].style.display = "none";
  }
}

const dropbtns = document.querySelectorAll('.dropbtn');
dropbtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const dropdown = btn.parentNode;
    const dropdownContent = dropdown.querySelector('.dropdown-content');
      if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }

    dropbtns.forEach(otherBtn => {
      const otherDropdown = otherBtn.parentNode;
      if (otherDropdown !== dropdown) {
        otherDropdown.classList.remove('active');
        const otherDropdownContent = otherDropdown.querySelector('.dropdown-content');
        otherDropdownContent.style.display = 'none';
      }
    });
  });
});
