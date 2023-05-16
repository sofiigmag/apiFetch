fetch("https://reqres.in/api/users?delay=3")
    .then(response => response.json())
    .then(response => {

        const users = response.data;

        users.forEach(user => {
            let tr = document.createElement('tr');
            tr.setAttribute("scope","row")

            let th = document.createElement('th');
            th.innerHTML = user.id
            
            let tdFirstName = document.createElement('td');
            tdFirstName.innerHTML = user.first_name
            
            let tdLastName = document.createElement('td');
            tdLastName.innerHTML = user.last_name
            
            let tdEmail = document.createElement('td');
            tdEmail.innerHTML = user.email
            
            let tdAvatar = document.createElement('td');
            let imageAvatar = document.createElement('img');
            imageAvatar.src = user.avatar;
            imageAvatar.classList = "img-avatar"
            tdAvatar.appendChild(imageAvatar)

            tr.appendChild(th);
            tr.appendChild(tdAvatar);
            tr.appendChild(tdFirstName);
            tr.appendChild(tdLastName);
            tr.appendChild(tdEmail);

            let bodyTable = document.querySelector("#body-users");
            bodyTable.appendChild(tr);
        });
        document.querySelector("#tabla").classList.remove("hide");
        document.querySelector("#spinner").classList.add("hide")
    })