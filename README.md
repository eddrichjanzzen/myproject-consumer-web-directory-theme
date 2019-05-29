
# Set up Vue.js Frontend using a Theme
## Prerequsites


- Git
```
$ git --version
git version 2.14.3 (Apple Git-98)
```
- npm
```
$ npm -v
6.7.0
```

- vue-cli
```
$ npm install -g @vue/cli
$ vue --version 
3.7.0
```

## Step 1: Create Frontend using VueJS, HTML, CSS and Bootstrap 4 - Directory Template
- Provides basic CRUD functionality for products
- The Service will be triggered by consumers via a web app
```
| WEBPAGE      | URI                                     | ACTION                      |
|--------------|-----------------------------------------|-----------------------------|
| HOME         | http://[hostname]/                      | Landing Page                |
| INDEX        | http://[hostname]/products              | Gets all products           |
| DETAIL       | http://[hostname]/products/<product_id> | Gets one product            |
| SIGNIN       | http://[hostname]/login                 | Logs the user in            |
| SIGNUP       | http://[hostname]/signup                | Signs up the user           |
| BOOK-1       | http://[hostname]/user-booking-1.html   | Booking Step 1              |
| BOOK-2       | http://[hostname]/user-booking-2.html   | Booking Step 2              |
| PAYMENT      | http://[hostname]/payment.html          | Payment                     |
| CONFIRMATION | http://[hostname]/confirmation.html     | Confirmation                |
```

### Step 1.1: Initialize Vue Project
```
$ cd ~/environment/
$ vue create myproject-consumer-web
$ cd myproject-consumer-web
$ npm run dev
```

### Step 1.2: Create a CodeCommit Repository
```bash
$ aws codecommit create-repository --repository-name myproject-consumer-web
```

### Step 1.3: Set up .gitignore
- Automatically created by vue create

### Step 1.4: Import Existing Project Folder to CodeCommit Repo
```bash
$ cd ~/environment/myproject-consumer-web
$ git init
$ git add .
$ git commit -m "Initial Commit"
$ git remote add origin https://git-codecommit.ap-southeast-1.amazonaws.com/v1/repos/myproject-consumer-web
$ git remote -v
$ git push origin master
```

### Step 1.5: Test Vue Application Locally
```
$ cd ~/environment/myproject-consumer-web
$ npm run serve
```

## Step 2: Setup Web Template (Bootstrap 4 - Directory Template)

### Step 2.1: 

Install dependencies:

In `myproject-consumer-web` add the following dependencies into `package.json`

```json
  "dependencies": {
    "bootstrap": "^4.3.1",
    "bootstrap-select": "^1.13.5",
    "jquery": "^3.3.1",
    "popper.js": "^1.15.0",
  },
```
In the terminal run the following: 
```
$ npm install --save-dev vue-plugin-load-script
```
after, run:
```
$ npm install
```

### Step 2.2: Import css and javascript dependencies to `main.js`

In `myproject-vuejs-web/src/main.js` add the following lines of code: 

```js
/* eslint-disable */

import Vue from 'vue'
import App from './App.vue'
import LoadScript from 'vue-plugin-load-script';

Vue.use(LoadScript);

// bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// css
require('@/assets/vendor/nouislider/nouislider.css')
require('@/assets/vendor/magnific-popup/magnific-popup.css')
require('@/assets/css/style.default.css')
require('@/assets/css/custom.css')
require('@/assets/img/favicon.png')

// As a global method

Vue.loadScript("https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.min.js")
.then(() => {
    require("@/assets/vendor/object-fit-images/ofi.min.js")
    require("@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js")
    require("@/assets/vendor/magnific-popup/jquery.magnific-popup.min.js")
    require("@/assets/vendor/smooth-scroll/smooth-scroll.polyfills.min.js")
    require("@/assets/vendor/bootstrap-select/js/bootstrap-select.min.js")
    require("@/assets/js/theme.js")
})
.then(() => {
    require("@/assets/vendor/jquery/jquery.min.js")
})
.catch(() => {
  // Failed to fetch script
});
```

Final Version of `main.js`:

```js
import Vue from 'vue'
import App from './App.vue'
import LoadScript from 'vue-plugin-load-script';
Vue.use(LoadScript);

// bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// css
require('@/assets/vendor/nouislider/nouislider.css')
require('@/assets/vendor/magnific-popup/magnific-popup.css')
require('@/assets/css/style.default.css')
require('@/assets/css/custom.css')
require('@/assets/img/favicon.png')

/* eslint-disable */
// As a global method

Vue.loadScript("https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.min.js")
.then(() => {
    require("@/assets/vendor/object-fit-images/ofi.min.js")
    require("@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js")
    require("@/assets/vendor/magnific-popup/jquery.magnific-popup.min.js")
    require("@/assets/vendor/smooth-scroll/smooth-scroll.polyfills.min.js")
    require("@/assets/vendor/bootstrap-select/js/bootstrap-select.min.js")
    require("@/assets/js/theme.js")
})
.then(() => {
    require("@/assets/vendor/jquery/jquery.min.js")
})
.catch(() => {
  // Failed to fetch script
});


import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```

### Step 2.3: Import CSS dependencies to `App.vue`

Add the following stylesheet imports inside the `<style>` tag of `App.vue`
```css
  /*extra css*/
  @import "https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700";
  @import "https://fonts.googleapis.com/css?family=Poppins:300,400,400i,700";
  @import "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css";
  @import "https://use.fontawesome.com/releases/v5.8.1/css/all.css";

```

Final version of `App.vue`:

```html
<template>
  <div id="app">
    <Navigation/>
    <router-view/>
  </div>
</template>

<script type="text/javascript">
  // @ is an alias to /src
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'home',
  components: {
    Navigation
  }
}
</script>


<style type="text/css">
  #app {
    text-align: center;
  }

  /*extra css*/
  @import "https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700";
  @import "https://fonts.googleapis.com/css?family=Poppins:300,400,400i,700";
  @import "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css";
  @import "https://use.fontawesome.com/releases/v5.8.1/css/all.css";

</style>
```

## Step 3: Setup Router Plugin

### Step 3.1: Add a router plugin
```bash
$ vue add router
```
Output:

```bash
? Use history mode for router? (Requires proper server setup for index fa
llback in production) Yes

🚀  Invoking generator for core:router...
📦  Installing additional dependencies...

added 1 package from 1 contributor and audited 24981 packages in 6.458s
found 0 vulnerabilities

✔  Successfully invoked generator for plugin: core:router
   The following files have been updated / added:

     .gitignore
     README.md
     babel.config.js
     package-lock.json
     package.json
     public/favicon.ico
     public/index.html
     src/App.vue
     src/assets/logo.png
     src/components/HelloWorld.vue
     src/main.js
     src/router.js
     src/views/About.vue
     src/views/Home.vue

   You should review these changes with git diff and commit them.

```
## Step 4: Set up Global Navbar

In `myproject-consumer-web/src/components/`
create a file called : `Navigation.vue`

Add the following code in `Navigation.vue`:

```html
<template>
   <nav class="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
      <div class="container-fluid">
        <div class="d-flex align-items-center"><a href="/" class="navbar-brand py-1"><img src="../assets/img/logo.svg" alt="Directory logo"></a>
          <form action="#" id="search" class="form-inline d-none d-sm-flex">
            <div class="input-label-absolute input-label-absolute-left input-reset input-expand ml-lg-2 ml-xl-3"> 
              <label for="search_search" class="label-absolute"><i class="fa fa-search"></i><span class="sr-only">What are you looking for?</span></label>
              <input id="search_search" placeholder="Search" aria-label="Search" class="form-control form-control-sm border-0 shadow-0 bg-gray-200">
              <button type="reset" class="btn btn-reset btn-sm"><i class="fa-times fas"></i></button>
            </div>
          </form>
        </div>
        <button type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
        <!-- Navbar Collapse -->
        <div id="navbarCollapse" class="collapse navbar-collapse">
          <form action="#" id="searchcollapsed" class="form-inline mt-4 mb-2 d-sm-none">
            <div class="input-label-absolute input-label-absolute-left input-reset w-100">
              <label for="searchcollapsed_search" class="label-absolute"><i class="fa fa-search"></i><span class="sr-only">What are you looking for?</span></label>
              <input id="searchcollapsed_search" placeholder="Search" aria-label="Search" class="form-control form-control-sm border-0 shadow-0 bg-gray-200">
              <button type="reset" class="btn btn-reset btn-sm"><i class="fa-times fas">           </i></button>
            </div>
          </form>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown"><a id="homeDropdownMenuLink" href="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle active">
                 
                Home</a>
              <div aria-labelledby="homeDropdownMenuLink" class="dropdown-menu"><a href="index.html" class="dropdown-item">Rooms</a><a href="index-2.html" class="dropdown-item">Restaurants</a></div>
            </li>
            <!-- Megamenu-->
            <li class="nav-item dropdown position-static"><a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle">Template</a>
              <div class="dropdown-menu megamenu py-lg-0">
                <div class="row">
                  <div class="col-lg-9">
                    <div class="row p-3 pr-lg-0 pl-lg-5 pt-lg-5">
                      <div class="col-lg-3">
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">Homepage</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a href="index.html" class="megamenu-list-link">Rooms   </a></li>
                          <li class="megamenu-list-item"><a href="index-2.html" class="megamenu-list-link">Restaurants   </a></li>
                        </ul>
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">Restaurants</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a href="category.html" class="megamenu-list-link">Category - Map on the top   </a></li>
                          <li class="megamenu-list-item"><a href="category-2.html" class="megamenu-list-link">Category - Map on the right   </a></li>
                          <li class="megamenu-list-item"><a href="category-3.html" class="megamenu-list-link">Category - no map   </a></li>
                          <li class="megamenu-list-item"><a href="detail.html" class="megamenu-list-link">Restaurant detail   </a></li>
                        </ul>
                      </div>
                      <div class="col-lg-3">
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">Rooms</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a href="category-rooms.html" class="megamenu-list-link">Category - Map on the top   </a></li>
                          <li class="megamenu-list-item"><a href="category-2-rooms.html" class="megamenu-list-link">Category - Map on the right   </a></li>
                          <li class="megamenu-list-item"><a href="category-3-rooms.html" class="megamenu-list-link">Category - no map   </a></li>
                          <li class="megamenu-list-item"><a href="detail-rooms.html" class="megamenu-list-link">Room detail   </a></li>
                        </ul>
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">Blog</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a href="blog.html" class="megamenu-list-link">Blog   </a></li>
                          <li class="megamenu-list-item"><a href="post.html" class="megamenu-list-link">Post   </a></li>
                        </ul>
                      </div>
                      <div class="col-lg-3">
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">Pages</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a href="contact.html" class="megamenu-list-link">Contact   </a></li>
                          <li class="megamenu-list-item"><a href="pricing.html" class="megamenu-list-link">Pricing   </a></li>
                          <li class="megamenu-list-item"><a href="text.html" class="megamenu-list-link">Text page   </a></li>
                          <li class="megamenu-list-item"><a href="faq.html" class="megamenu-list-link">F.A.Q.s  <span class="badge badge-info ml-1">New</span>   </a></li>
                          <li class="megamenu-list-item"><a href="coming-soon.html" class="megamenu-list-link">Coming soon   </a></li>
                        </ul>
                      </div>
                      <div class="col-lg-3">
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">User</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a href="/login" class="megamenu-list-link">Sign in   </a></li>
                          <li class="megamenu-list-item"><a href="/signup" class="megamenu-list-link">Sign up   </a></li>
                          <li class="megamenu-list-item"><a href="user-booking-1.html" class="megamenu-list-link">Booking process - 4 pages <span class="badge badge-warning ml-1">New</span>   </a></li>
                          <li class="megamenu-list-item"><a href="user-grid.html" class="megamenu-list-link">Bookings &mdash; grid view <span class="badge badge-warning ml-1">New</span>   </a></li>
                          <li class="megamenu-list-item"><a href="user-booking-detail.html" class="megamenu-list-link">Booking detail <span class="badge badge-warning ml-1">New</span>   </a></li>
                        </ul>
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">Host</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a href="user-add-0.html" class="megamenu-list-link">Add new listing - 6 pages   </a></li>
                          <li class="megamenu-list-item"><a href="user-list.html" class="megamenu-list-link">Bookings &mdash; list view <span class="badge badge-warning ml-1">New</span>   </a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="row megamenu-services d-none d-lg-flex pl-lg-5">
                      <div class="col-xl-3 col-lg-6 d-flex">
                        <div class="megamenu-services-item">
                          <svg class="svg-icon megamenu-services-icon">
                            <use xlink:href="#destination-map-1"> </use>
                          </svg>
                          <div>
                            <h6 class="text-uppercase">Best rentals</h6>
                            <p class="mb-0 text-muted text-sm">Find the perfect place</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-6 d-flex">
                        <div class="megamenu-services-item">
                          <svg class="svg-icon megamenu-services-icon">
                            <use xlink:href="#money-box-1"> </use>
                          </svg>
                          <div>
                            <h6 class="text-uppercase">Earn points</h6>
                            <p class="mb-0 text-muted text-sm">And get great rewards</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-6 d-flex">
                        <div class="megamenu-services-item">
                          <svg class="svg-icon megamenu-services-icon">
                            <use xlink:href="#customer-support-1"> </use>
                          </svg>
                          <div>
                            <h6 class="text-uppercase">020-800-456-747</h6>
                            <p class="mb-0 text-muted text-sm">24/7 Available Support</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-6 d-flex">
                        <div class="megamenu-services-item">
                          <svg class="svg-icon megamenu-services-icon">
                            <use xlink:href="#secure-payment-1"> </use>
                          </svg>
                          <div>
                            <h6 class="text-uppercase">Secure Payment</h6>
                            <p class="mb-0 text-muted text-sm">Secure Payment</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 d-none d-lg-block"><img src="img/photo/photo-1521170665346-3f21e2291d8b.jpg" alt="" class="bg-image"></div>
                </div>
              </div>
            </li>
            <!-- /Megamenu end-->
            <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a>
            </li>
            <li class="nav-item dropdown"><a id="docsDropdownMenuLink" href="index.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle ">
                 
                Docs</a>
              <div aria-labelledby="docsDropdownMenuLink" class="dropdown-menu dropdown-menu-right">
                <h6 class="dropdown-header font-weight-normal">Documentation</h6><a href="docs/docs-introduction.html" class="dropdown-item">Introduction </a><a href="docs/docs-directory-structure.html" class="dropdown-item">Directory structure </a><a href="docs/docs-gulp.html" class="dropdown-item">Gulp </a><a href="docs/docs-customizing-css.html" class="dropdown-item">Customizing CSS </a><a href="docs/docs-credits.html" class="dropdown-item">Credits </a><a href="docs/docs-changelog.html" class="dropdown-item">Changelog </a>
                <div class="dropdown-divider"></div>
                <h6 class="dropdown-header font-weight-normal">Components</h6><a href="docs/components-bootstrap.html" class="dropdown-item">Bootstrap </a><a href="docs/components-directory.html" class="dropdown-item">Theme </a>
              </div>
            </li>
            <li class="nav-item"><a href="/login" class="nav-link">Sign in</a></li>
            <li class="nav-item"><a href="/signup" class="nav-link">Sign up</a></li>
            <li class="nav-item mt-3 mt-lg-0 ml-lg-3 d-lg-none d-xl-inline-block"><a href="user-add-0.html" class="btn btn-primary">Add a listing</a></li>
          </ul>
        </div>
      </div>
    </nav>  
</template>
```


### Step 3.3: Add Navbar Margin
Add the following under `<Navigation>` tag in  `App.vue`
```html
<div class="navbar-margin"></div>
```
Add the following code inside the `<style>` tag of `App.vue`
```css
 .navbar-margin {
     margin-bottom: 50px;
 }

```
Final Version of `App.vue`
```html
<template>
  <div id="app">
    <Navigation/>
    <div class="navbar-margin"></div>
    <router-view/>
  </div>
</template>

<script type="text/javascript">
  // @ is an alias to /src
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'home',
  components: {
    Navigation
  }
}
</script>


<style type="text/css">
  .navbar-margin {
    margin-bottom: 50px;
  }

  /*extra css*/
  @import "https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700";
  @import "https://fonts.googleapis.com/css?family=Poppins:300,400,400i,700";
  @import "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css";
  @import "https://use.fontawesome.com/releases/v5.8.1/css/all.css";

</style>
```

### Step 3.4: Test current page

In your browser, go to:  
```
http://localhost:8080
```
You should see the ff:
![](home.png)

## Step 5: Set up Home Page

### Step 5.1: Search Bar Component

## Step 6: Set up Login Page

In `myproject-consumer-web/src/views/`
create a file called : `Login.vue`

Add the following snippet
```html
<template>
    <div class="login">
        <div class="container-fluid px-3">
          <div class="row min-vh-100">
            <div class="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
              <div class="w-100 py-5 px-md-5 px-xl-6 position-relative">
                <div class="mb-5"><img src="img/logo-square.svg" alt="..." style="max-width: 4rem;" class="img-fluid mb-3">
                  <h2>Welcome back</h2>
                </div>
                <form class="form-validate">
                  <div class="form-group">
                    <label for="loginUsername" class="form-label"> Email Address</label>
                    <input name="loginUsername" id="loginUsername" type="email" placeholder="name@address.com" autocomplete="off" required data-msg="Please enter your email" class="form-control">
                  </div>
                  <div class="form-group mb-4">
                    <div class="row">
                      <div class="col">
                        <label for="loginPassword" class="form-label"> Password</label>
                      </div>
                      <div class="col-auto"><a href="#" class="form-text small">Forgot password?</a></div>
                    </div>
                    <input name="loginPassword" id="loginPassword" placeholder="Password" type="password" required data-msg="Please enter your password" class="form-control">
                  </div>
                  <div class="form-group mb-4">
                    <div class="custom-control custom-checkbox">
                      <input id="loginRemember" type="checkbox" class="custom-control-input">
                      <label for="loginRemember" class="custom-control-label text-muted"> <span class="text-sm">Remember me for 30 days</span></label>
                    </div>
                  </div>
                  <!-- Submit-->
                  <button class="btn btn-lg btn-block btn-primary">Sign in</button>
                  <hr data-content="OR" class="my-3 hr-text letter-spacing-2">
                  <button class="btn btn btn-outline-primary btn-block btn-social mb-3"><i class="fa-2x fa-facebook-f fab btn-social-icon"> </i>Connect <span class="d-none d-sm-inline">with Facebook</span></button>
                  <button class="btn btn btn-outline-muted btn-block btn-social mb-3"><i class="fa-2x fa-google fab btn-social-icon"> </i>Connect <span class="d-none d-sm-inline">with Google</span></button>
                  <hr class="my-4">
                  <p class="text-center"><small class="text-muted text-center">Don't have an account yet? <a href="signup.html">Sign Up                </a></small></p>
                </form><a href="index.html" class="close-absolute mr-md-5 mr-xl-6 pt-5"> 
                  <svg class="svg-icon w-3rem h-3rem">
                    <use xlink:href="#close-1"> </use>
                  </svg></a>
              </div>
            </div>
            <div class="col-md-4 col-lg-6 col-xl-7 d-none d-md-block">
              <!-- Image-->
              <div style="background-image: url(img/photo/photo-1497436072909-60f360e1d4b1.jpg);" class="bg-cover h-100 mr-n3"></div>
            </div>
          </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'landing',
  props: {
    msg: String
  }
}
</script>

<style type="text/css">
    
    
</style>
```


In `myproject-consumer-web/src/`

Add the following snippet in `router.js`:

```js
{
   path: '/about',
   name: 'about',
   // route level code-splitting
   // this generates a separate chunk (about.[hash].js) for this route
   // which is lazy-loaded when the route is visited.
   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
},
{ 
   //Added a route for login
   path: '/login',
   name: 'login',
   component: () => import('./views/Login.vue')
}
```

## Step 7: Set up Signup Page

In `myproject-consumer-web/src/views/`
create a file called : `SignUp.vue`

Add the following snippet
```html
<template>
  <div class="signup">
        <div class="container-fluid px-3">
      <div class="row min-vh-100">
        <div class="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
          <div class="w-100 py-5 px-md-5 px-xl-6 position-relative">
            <div class="mb-4"><img src="img/logo-square.svg" alt="..." style="max-width: 4rem;" class="img-fluid mb-4">
              <h2>Sign up</h2>
              <p class="text-muted">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.</p>
            </div>
            <form class="form-validate">
              <div class="form-group">
                <label for="loginUsername" class="form-label"> Email Address</label>
                <input name="loginUsername" id="loginUsername" type="email" placeholder="name@address.com" autocomplete="off" required data-msg="Please enter your email" class="form-control">
              </div>
              <div class="form-group">
                <label for="loginPassword" class="form-label"> Password</label>
                <input name="loginPassword" id="loginPassword" placeholder="Password" type="password" required data-msg="Please enter your password" class="form-control">
              </div>
              <div class="form-group mb-4">
                <label for="loginPassword2" class="form-label"> Confirm your password</label>
                <input name="loginPassword2" id="loginPassword2" placeholder="Password" type="password" required data-msg="Please enter your password" class="form-control">
              </div>
              <button type="submit" class="btn btn-lg btn-block btn-primary">Sign up</button>
              <hr data-content="OR" class="my-3 hr-text letter-spacing-2">
              <button class="btn btn btn-outline-primary btn-block btn-social mb-3"><i class="fa-2x fa-facebook-f fab btn-social-icon"> </i>Connect <span class="d-none d-sm-inline">with Facebook</span></button>
              <button class="btn btn btn-outline-muted btn-block btn-social mb-3"><i class="fa-2x fa-google fab btn-social-icon"> </i>Connect <span class="d-none d-sm-inline">with Google</span></button>
              <hr class="my-4">
              <p class="text-sm text-muted">By signing up you agree to Directory's <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.</p>
            </form><a href="index.html" class="close-absolute mr-md-5 mr-xl-6 pt-5"> 
              <svg class="svg-icon w-3rem h-3rem">
                <use xlink:href="#close-1"> </use>
              </svg></a>
          </div>
        </div>
        <div class="col-md-4 col-lg-6 col-xl-7 d-none d-md-block">
          <!-- Image-->
          <div style="background-image: url(img/photo/photo-1497436072909-60f360e1d4b1.jpg);" class="bg-cover h-100 mr-n3"></div>
        </div>
      </div>
    </div>
  </div>
</template>
```


In `myproject-consumer-web/src/`

Add the following snippet in `router.js`:

```js
{
  path: '/login',
  name: 'login',
  component: () => import('./views/Login.vue')
},
{
  //Add sign up into routes
  path: '/signup',
  name: 'sigup',
  component: () => import('./views/SignUp.vue')
}
```

## Step 8: Set up Detail Page

## Step 9: Set up Book-1 Page

## Step 10: Set up Book-2 Page

## Step 11: Set up Payments Page

## Step 12: Set up Confirmation Page

## Step 13: Set up Axios to Consume Data 

### Step 13.1: Install Axios
In the terminal run, inside your project folder, the following command: 
```bash
$ npm install axios --save
```

in `myproject-vuejs-web/package.json` you must see the following dependencies:
```json
  "dependencies": {
    "bootstrap": "^4.3.1",
    "jquery": "^3.4.1",
    "popper.js": "^1.15.0",
    "axios": "^0.18.0"
  },
```

### Step 13.2: Modify Home Page to Include Axios

In `myproject-vuejs-web/src/main.js`
Add the following lines:

```js
import axios from 'axios'
Vue.prototype.$http = axios;
```

### (Optional) Clean up
```
$ aws codecommit delete-repository --repository-name myproject-vuejs-web
$ rm -rf ~/environment/myproject-vuejs-web
```
