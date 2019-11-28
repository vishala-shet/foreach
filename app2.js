// var username="shashi";
// username="manu";
// console.log(username);  //javascript

// const username1="shashi";
// username1="manu";
// console.log(username1);   //we will get error here


// const users = {
//     name: "manu",
//     age: 26,
//     company: "testyantra",
//     salary: 20000
// }
// users.name = "anu";
// console.log(users);  //no error if it is object

// for(var i=0;i<=10;i++){
// var username="shashi";
// console.log(i);
// }
// console.log(username);  //global scope


// function user() {
//     var age =  20;
//     console.log(age);  //function scope
// }
// user();

// for(var i=0;i<=10;i++){
//     let username="shashi";
//     console.log(i);  //blocked scope
//     }
//     console.log(username);  error wl occur

    // "use strict"
    // user = "vishala";
    // console.log(user);  //without variable also we can initialize but we wl get error


    // console.log(user);
    //  var user = "vishala"; // undefined error

    //  console.log(user);
    //  let user = "vishala"; //reference error cannot access

    //  const username = "shashi";
    //  const username = "manu";
    //  console.log(username); //uncaught syntax error

    //  let user1 = "shashi";
    //  user1 = "manu";
    //  console.log(user1);  //output:manu

    //  let user = "shashi";
    //  let user = "manu";
    //  console.log(user);  //error two times let

// function username(){
// alert("hello function")
// } //called parrt
// username();


// (function (){
//     document.write('test');
//     var test="hello";
// })()

// function loadTemplate(){
//     document.write(`
//     `)
// }  //this loadTemplate function can be link in html file


function loadTemplate1(){
    var template1 = document.getElementById("template1");
    template1.innerHTML= `
    <html>
    <head>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
    .row.heading h2 {
        color: #fff;
        font-size: 52.52px;
        line-height: 95px;
        font-weight: 400;
        text-align: center;
        margin: 0 0 40px;
        padding-bottom: 20px;
        text-transform: uppercase;
    }
    ul{
      margin:0;
      padding:0;
      list-style:none;
    }
    .heading.heading-icon {
        display: block;
    }
    .padding-lg {
        display: block;
        padding-top: 60px;
        padding-bottom: 60px;
    }
    .practice-area.padding-lg {
        padding-bottom: 55px;
        padding-top: 55px;
    }
    .practice-area .inner{ 
         border:1px solid #999999; 
         text-align:center; 
         margin-bottom:28px; 
         padding:40px 25px;
    }
    .our-webcoderskull .cnt-block:hover {
        box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
        border: 0;
    }
    .practice-area .inner h3{ 
        color:#3c3c3c; 
        font-size:24px; 
        font-weight:500;
        font-family: 'Poppins', sans-serif;
        padding: 10px 0;
    }
    .practice-area .inner p{ 
        font-size:14px; 
        line-height:22px; 
        font-weight:400;
    }
    .practice-area .inner img{
        display:inline-block;
    }
    
    
    .our-webcoderskull{
      background: url("http://www.webcoderskull.com/img/right-sider-banner.png") no-repeat center top / cover;
      
    }
    .our-webcoderskull .cnt-block{ 
       float:left; 
       width:100%; 
       background:#fff; 
       padding:30px 20px; 
       text-align:center; 
       border:2px solid #d5d5d5;
       margin: 0 0 28px;
    }
    .our-webcoderskull .cnt-block figure{
       width:148px; 
       height:148px; 
       border-radius:100%; 
       display:inline-block;
       margin-bottom: 15px;
    }
    .our-webcoderskull .cnt-block img{ 
       width:148px; 
       height:148px; 
       border-radius:100%; 
    }
    .our-webcoderskull .cnt-block h3{ 
       color:#2a2a2a; 
       font-size:20px; 
       font-weight:500; 
       padding:6px 0;
       text-transform:uppercase;
    }
    .our-webcoderskull .cnt-block h3 a{
      text-decoration:none;
        color:#2a2a2a;
    }
    .our-webcoderskull .cnt-block h3 a:hover{
        color:#337ab7;
    }
    .our-webcoderskull .cnt-block p{ 
       color:#2a2a2a; 
       font-size:13px; 
       line-height:20px; 
       font-weight:400;
    }
    .our-webcoderskull .cnt-block .follow-us{
        margin:20px 0 0;
    }
    .our-webcoderskull .cnt-block .follow-us li{ 
        display:inline-block; 
        width:auto; 
        margin:0 5px;
    }
    .our-webcoderskull .cnt-block .follow-us li .fa{ 
       font-size:24px; 
       color:#767676;
    }
    .our-webcoderskull .cnt-block .follow-us li .fa:hover{ 
       color:#025a8e;
    }
    
    </style>
    </head>
    <body>
    <section class="our-webcoderskull padding-lg">
    <div class="container">
      <div class="row heading heading-icon">
          <h2>Our Team</h2>
      </div>
      <ul class="row">
        <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style="height: 349px;">
              <figure><img src="http://www.webcoderskull.com/img/team4.png" class="img-responsive" alt=""></figure>
              <h3><a href="http://www.webcoderskull.com/">Web coder skull</a></h3>
              <p>Freelance Web Developer</p>
              <ul class="follow-us clearfix">
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
            </div>
        </li>
        <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style="height: 349px;">
              <figure><img src="http://www.webcoderskull.com/img/team1.png" class="img-responsive" alt=""></figure>
              <h3><a href="#">Kappua </a></h3>
              <p>Freelance Web Developer</p>
              <ul class="follow-us clearfix">
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
            </div>
        </li>
        <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style="height: 349px;">
              <figure><img src="http://www.webcoderskull.com/img/team4.png" class="img-responsive" alt=""></figure>
              <h3><a href="http://www.webcoderskull.com/">Manish </a></h3>
              <p>Freelance Web Developer</p>
              <ul class="follow-us clearfix">
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
            </div>
         </li>
        <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style="height: 349px;">
              <figure><img src="http://www.webcoderskull.com/img/team2.png" class="img-responsive" alt=""></figure>
              <h3><a href="http://www.webcoderskull.com/">Atul </a></h3>
              <p>Freelance Web Developer</p>
              <ul class="follow-us clearfix">
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
            </div>
        </li>
      </ul>
    </div>
  </section>
    </body>
    </html> `
}
 function loadTemplate2(){
       var template2 = document.getElementById("template2");
       template2.innerHTML = `
       <html>
       <head>
       <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
       <style>
       body,
		html {
			margin: 0;
			padding: 0;
			height: 100%;
			background: #60a3bc !important;
		}
		.user_card {
			height: 400px;
			width: 350px;
			margin-top: auto;
			margin-bottom: auto;
			background: #f39c12;
			position: relative;
			display: flex;
			justify-content: center;
			flex-direction: column;
			padding: 10px;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			border-radius: 5px;

		}
		.brand_logo_container {
			position: absolute;
			height: 170px;
			width: 170px;
			top: -75px;
			border-radius: 50%;
			background: #60a3bc;
			padding: 10px;
			text-align: center;
		}
		.brand_logo {
			height: 150px;
			width: 150px;
			border-radius: 50%;
			border: 2px solid white;
		}
		.form_container {
			margin-top: 100px;
		}
		.login_btn {
			width: 100%;
			background: #c0392b !important;
			color: white !important;
		}
		.login_btn:focus {
			box-shadow: none !important;
			outline: 0px !important;
		}
		.login_container {
			padding: 0 2rem;
		}
		.input-group-text {
			background: #c0392b !important;
			color: white !important;
			border: 0 !important;
			border-radius: 0.25rem 0 0 0.25rem !important;
		}
		.input_user,
		.input_pass:focus {
			box-shadow: none !important;
			outline: 0px !important;
		}
		.custom-checkbox .custom-control-input:checked~.custom-control-label::before {
			background-color: #c0392b !important;
    }
    </style>
    </head>
    <body>
    <div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png" class="brand_logo" alt="Logo">
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
					<form>
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" name="" class="form-control input_user" value="" placeholder="username">
						</div>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" name="" class="form-control input_pass" value="" placeholder="password">
						</div>
						<div class="form-group">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customControlInline">
								<label class="custom-control-label" for="customControlInline">Remember me</label>
							</div>
						</div>
							<div class="d-flex justify-content-center mt-3 login_container">
				 	<button type="button" name="button" class="btn login_btn">Login</button>
				   </div>
					</form>
				</div>
		
				<div class="mt-4">
					<div class="d-flex justify-content-center links">
						Don't have an account? <a href="#" class="ml-2">Sign Up</a>
					</div>
					<div class="d-flex justify-content-center links">
						<a href="#">Forgot your password?</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>`
 }
function loadTemplate3(){
   var template3 = document.getElementById("template3");
   template3.innerHTML = `
   <html>
   <head>
   <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
   <style>
   .nav-item::after{
    content:'';
    display:block;
    width:0px;
    height:4px;
    background:#ff0000;
    transition: 0.2s;
    margin-top:-10px;
}

.nav-item:hover::after{width:100%;}


.nav-link{padding:15px 5px;transition:0.2s;}

.navbar-nav .nav-link {
    
    color:#000;
    font-weight:bold;
    font-size:18px;
}

.navbar-nav .active > .nav-link{
  
    width:100%;
    height:51px;
    
  border-bottom: .25rem solid transparent;
  border-bottom-color: #ed4137;   
}
</style>
</head>
<body>
<nav class="navbar navbar-expand-lg">

                <ul class="navbar-nav">
                    <li class="active">
                        <a href="#" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Product</a>
                    </li>
                    
                    <li class="nav-item">
                        <a href="#" class="nav-link">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
   </body>
   <html>`            
 }
 function loadTemplate4(){
   var template4 = document.getElementById("template4");
   template4.innerHTML`
   <html>
   <head>
   <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
   <style>
   body,html{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background: #e74c3c !important;
    }

    .searchbar{
    margin-bottom: auto;
    margin-top: auto;
    height: 60px;
    background-color: #353b48;
    border-radius: 30px;
    padding: 10px;
    }

    .search_input{
    color: white;
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret-color:transparent;
    line-height: 40px;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_input{
    padding: 0 10px;
    width: 450px;
    caret-color:red;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_icon{
    background: white;
    color: #e74c3c;
    }

    .search_icon{
    height: 40px;
    width: 40px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color:white;
    text-decoration:none;
    }
    </style>
    </head>
   <body>
   <div class="container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
          <input class="search_input" type="text" name="" placeholder="Search...">
          <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
        </div>
      </div>
    </div>
    
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
   </body>
   </html>`
   }
