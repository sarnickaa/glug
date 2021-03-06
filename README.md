
GLUG: A Wine Tracker
====================

* DEPLOYED:

* API: https://glug-api.herokuapp.com/
* CLIENT: https://sarnickaa.github.io/glug/

* REPOSITORIES:

* API: https://github.com/sarnickaa/glug-api
* CLIENT: https://github.com/sarnickaa/glug

## DESCRIPTION:
<img width="1280" alt="screen shot 2018-08-23 at 10 49 14 am" src="https://media.git.generalassemb.ly/user/11649/files/3f924fb8-a6c2-11e8-9f3d-9f1ed13c1439">

GLUG is a simple wine preference tracker. A user can enter a record of a wine, detailing notable features such as a basic description of the wine itself (name/year/varietal are required fields), price, whether it was a gift or not, their personal score out of 10 and tasting notes. GLUG also showcases custom logo design.

## TECHNOLOGY:
GLUG is a simple SPA built on the MERN stack. GLUG utlizes MongoDB, Express and Node.js on the back end and ReactJS and React Router on the front end. GLUG employs token authentication and CRUD functionality.

GLUG allows a user to:
* enter a wine
* view all wines in their collection
* edit a specific wine entry
* delete a wine entry

a GLUG user can:
* sign up for GLUG with an email & password
* sign in to GLUG
* change their password
* sign out of GLUG

## SETUP
* npm install
* Image Storage: Cloudinary

### dependencies
* material-ui/core: v1.5.1
* axios: v0.18.0
* cloudinary-react: v1.0.6
* material-ui-image: v3.0.0
* react: v16.4.2
* react-bootstrap: 0.32.2
* react-dom: v6.4.2
* react-dynamic-modal: v1.1.1
* react-router-dom: v4.3.1
* react-scripts: v1.1.4

## PLANNING:

* WIREFRAME: ![img_4522](https://media.git.generalassemb.ly/user/11649/files/78e5b020-a6c2-11e8-9538-52b355dead1f)

![img_4524](https://media.git.generalassemb.ly/user/11649/files/8de13742-a6c2-11e8-911d-cbb8ddec0979)

## PROCESS:
The process of building this app was challenging to say the least. Having had no hands-on experience with ReactJS prior to this, I knew that building a custom frontend would not be easy. The decision to use ReactJS was also especially challenging because it really forced me out of my programming comfort-zone. Prior to this project, my tendency was always to opt for very static HTML structures that were manipulated though JQuery and CSS. The idea of a dynamically rendered UI based on DOM/virtualDOM manipulation seemed very foreign to me.

To that end, my process began with a lot of research which mainly involved parsing through numerous tutorials on-line and trying to understand as much of the ReactJS documentation as I could. My intention was to use the tutorials as a guide and generalize on their examples and patterns as much as possible.

The app was built incrementally, starting with the establishment of user authentication routes and  moving on to CRUD functions.

There were numerous occasions throughout the week where I hit a wall and sought the assistance of more experienced programmers. As the app progressed, I started to feel more comfortable with React as a whole despite often coming up against peculiarities and idiosyncrasies that could only really have been 'learned by doing'. I think the most important piece of learning I'll take away from this experience is a deeper and more wholistic understanding of just how different the initial planning and thought process has to be when you intend to create a ReactJS app.

Whilst i had a theoretical understanding of the top-down flow of data through a component hierarchy, the use of routers vastly complicated that implementation. And whilst I thought I had started my journey with fairly clear and comprehensive ERD's and wireframes, I began to realize that my thoughts around the exact movement of data (in particular, the way in which the token was passed to enable not only user authentication but all CRUD functionality) required constant revisiting and clarification. When programming with ReactJS 'the best laid plans of mice and men will truly often go awry!!'

---

## some of the resources used:
* https://reactjs.org/docs/components-and-props.html
* https://github.com/devlemire/Learn-React-CRUD
* https://serverless-stack.com/chapters/create-a-new-reactjs-app.html
* https://www.djamware.com/post/5a90c37980aca7059c14297a/securing-mern-stack-web-application-using-passport
* https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index

## FUTURE ITERATIONS:
* make the UI responsive. Maybe use some material UI elements.
* implement a 3rd party API to allow a user to search out wine scores
