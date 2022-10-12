class Contact {
    constructor(firstName, lastName, phone, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }

    get online() {
        return this._online;
    }

    set online(e) {
        this._online = e;

        if(this.onlineDiv){
            this.onlineDiv.className = this._online ? 'title online' : 'title';
        }
    }

    render (id) {
        this.article = document.createElement('article');
		this.onlineDiv = document.createElement('div');
        this.onlineDiv.innerHTML = `${this.firstName} ${this.lastName}`;
        this.infoButton = document.createElement('button');
        this.infoButton.innerHTML = '&#8505;';
        this.personInfoDiv = document.createElement('div');
        this.personInfoDiv. innerHTML = `<span>&phone; ${this.phone}</span><span>&#9993; ${this.email}</span>`;

		this.onlineDiv.className = this.online ? 'title online' : 'title'
		this.personInfoDiv.className = 'info'
		this.personInfoDiv.style.display = 'none'

		this.onlineDiv.appendChild(this.infoButton);
		this.article.appendChild(this.onlineDiv);
		this.article.appendChild(this.personInfoDiv);

		document.getElementById(id).appendChild(this.article);

		this.infoButton.addEventListener('click', () => {
			this.personInfoDiv.style.display = this.personInfoDiv.style.display === 'none' ? 'block' : 'none'
		});
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  contacts.forEach(c => c.render('main'));
  
  // After 1 second, change the online status to true
  setTimeout(() => contacts[1].online = true, 2000);