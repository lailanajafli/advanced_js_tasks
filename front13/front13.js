// sade todo list yaratmaq her 5 saniyeden bir bir todo nu silmek lazimdir


async function fiveSecond() {
  const userList = document.getElementById("userList");

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    userList.innerHTML = "";

    users.forEach(user => {
      const userItem = document.createElement("li");
      userItem.textContent = `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`;
      userList.appendChild(userItem);
    });

    const userItems = Array.from(userList.getElementsByTagName("li"));
    for (const userItem of userItems) {
      await delay(5000);
      userList.removeChild(userItem);
    }

  } catch (error) {
    console.error('Veri çekme hatası:', error);
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}