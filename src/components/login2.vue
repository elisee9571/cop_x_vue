<template>
    <div class="text-center bg-color">
        <h1>Login</h1>
        <div class="login-form">
            <form id="login-form" @submit.prevent="dologin2">
                <div class="login-form-main-message"></div>
                <div class="main-login-form">
                    <div class="login-group">
                        <div class="form-group adminform">
                            <label for="username" >Username :</label>
                            <input type="email" name="email" id="username" v-model="email">
                        </div>
                        <div class="form-group adminform">
                            <label for="password" >Password :</label>
                            <input type="password" name="password" id="password" v-model="password">
                        </div>
                        <button type="submit" class="btn-submit">login</button>
                    </div>
                </div>
                <div class="etc-login-form">
                    <p>Forgot your password ? <a href="#">click here</a></p>
                    <p>new User ? <a href="#">create new account</a></p>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import jwt from "vue-jwt-decode";
export default {
    name: "login2",
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        dologin2: function (){
            this.axios.post("http://localhost:3000/user/login",{
                email:this.email,
                password:this.password,
            })
            .then(res =>{
                if(res.data.auth){
                    alert(res.data.auth);
                    localStorage.setItem("auth",res.data.auth);
                    localStorage.setItem("token",res.data.token);
                    var user = jwt.decode(res.data.token);
                    if (user.role == "admin") {
                         this.$router.push({ path: "/admin/home" });
                    } else {
                    /* this.$router.push({name: '/admin/home'})
                    window.location.reload(); */
                    }
                }
                else{
                    alert(res.data.auth);
                    //this.$router.push({name: "register", params: {msg: "non connecté"} })
                }
            })
            .catch(err => {
                console.log(err);
            })

        },
    }
}
</script>

<style>

.bg-color{
    background-color:darkgrey;
    text-align: center;
}
.main-login-form{
    position: relative;

}
.login-form{
    max-width: 480px;
    border-radius: 5px;
    margin: 0 auto;
}
.form-group .adminform{
    border: O;
    box-shadow: 0 0 0;
    background-color: transparent;
    color: #555555;
    padding: 7px 0;
    font-weight: bold;
    height: 25px;
}


.btn-submit {
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: red;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.btn-submit:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.btn-submit:active {
    color: #000
}

.btn-submit:active:after {
    background: transparent;
}

.btn-submit:hover:before {
    opacity: 1;
}

.btn-submit:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}

.etc-login-form p{
    color: #fff;
    font: bolder;

}

.etc-login-form p a{
    text-decoration: none;
    color: #002bff;

}

</style>
