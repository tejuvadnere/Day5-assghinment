function classes() {
    class User {
        constructor(name, age, email) {
            this.name = name;
            this.age = age;
            this.email = email;
            this.luCoins = 0;
            this.courses = [];
        }
        login() {
            console.log(`${this.name} has logged in`);
            return this;
        }
        logout() {
            console.log(`${this.name} has logged out`);
            return this;
        }
    }
    
    class Moderator extends User {
        constructor(name, age, email) {
            super(name, age, email);
        }
        addCoins(username) {
            
            username.luCoins++;
            console.log(`Moderator Added LU coin(s) to ${username.name}.`);
            return username.luCoins;
        }
        removeCoins(username) {
           
            username.luCoins--;
            console.log(`Moderator Deducted LU coin(s) from ${username.name}.`);
            return username.luCoins;
        }
    
        // deleteUser(user) {
        //     users = users.filter(u => {
        //         return u.email != user.email;
        //     })
        // }
    
    }
    
    class Admin extends Moderator {
        addCourse(user, course) {
            user.courses.push(course);
            console.log(`Admin added ${course} course to ${user.name}.`);
            return user.courses;
        }
        deleteCourse(user, course){
            // delete user.courses;
            for(let i = 0; i < user.courses.length ; i++){
                if(course === user.courses[i]){
                     user.courses.splice(i,1);
                }
            }
            console.log(`Admin Deleted ${course} course from ${user.name}.`);
            console.log(`Remaining Course(s) of ${user.name}: ${user.courses}`)
            return user.courses;
        }
    }
    
    let user1 = new User('Tejaswini',22,'vadneretejaswini@gmail.com');
    user1.login();
        console.log(JSON.stringify(user1));
    let mod1 = new Moderator('LetsUpgrade Moderator',2,'lum@gmail.com');
    console.log(mod1);
    user1.luCoins = mod1.addCoins(user1);
    user1.luCoins = mod1.addCoins(user1);
    user1.luCoins = mod1.removeCoins(user1);
    console.log(JSON.stringify(user1));
    let ad1 = new Admin('LetsUpgrade Admin', 2, 'lua@gmail.com');
    console.log(ad1);
    user1.courses = ad1.addCourse(user1,'JavaScript');
    user1.courses = ad1.addCourse(user1,'Python');
    console.log(JSON.stringify(user1));
    user1.courses = ad1.deleteCourse(user1, 'Python');
    console.log(user1);
    user1.logout();
    }
    document.querySelector(".two").addEventListener("click", classes);
    