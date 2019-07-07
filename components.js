// function Home() {

// }
// Home.prototype.render = function () {
//     // TODO: return <h2>Home</h2>
//     const home = document.createElement('div');
//     home.className = 'Home';
//     var h2 = document.createElement("h2");
//     h2.innerHTML = 'Home'
//     home.appendChild(h2)
//     //window.location.replace = '/'
//     return home;
// }

// function Blog() {}
// Blog.prototype.render = function () {
//     // TODO: return <h2>Blog</h2>
//     const blog = document.createElement('h2');
//     blog.className = 'Blog';
//     blog.innerHTML = "Blog";
//     return blog;
// }

// const routes = {
//     '/': Home,
//     '/blog': Blog,
// };

// function Link(props) {
//     this.to = props.to;
//     this.title = props.title;
//     //location.replace(`${this.to}`)
// }
// Link.prototype.render = function () {
//     // TODO: return <a href="#/{to}">{title}</a>
//     var a = document.createElement('a');
//     var linkText = document.createTextNode(`${this.title}`);
//     a.appendChild(linkText);
//     a.title = this.title;
//     var url = window.location.pathname;
//     a.href = `${this.to}`;
//     a.setAttribute('href', `${this.to}`);
//     //a.href = `#${this.to}`
//     //window.location = `${this.to}`
//     return a;

// }

// function Header() {}
// Header.prototype.render = function () {
//     // TODO: return <div class="Header"><Link to="/">Home</Link><Link to="/blog">Blog</Link></div>
//     const header = document.createElement('div');
//     //header.innerHTML = 'test2';
//     header.innerText = 'what';
//     header.className = 'Header';
//     // header.append(`<div class="Header"><Link to="/">Home</Link><Link to="/blog">Blog</Link></div>`)
//     const homeLink = new Link({ title: 'Home', to: '/' });
//     const blogLink = new Link({ title: 'Blog', to: '/blog' });

//     header.appendChild(homeLink.render());
//     header.appendChild(blogLink.render());

//     return header;
// }

// function App() {}
// App.prototype.render = function () {
//     // TODO: return <div><Header />{routes[window.location.hash.substring(1)]()}</div>
//     const app = document.createElement('div');
//     app.className = 'App';
//     app.appendChild((new Header()).render());
//     //var url = window.location.hash.substring(1) || '/';
//     //const route = routes[url];
//        console.log(window.location.hash, 'hash');
//        app.innerHTML = routes[window.location.hash.substring(1)]
//    // route.render();
//     return app;
// }

// const root = document.getElementById('root');
// function render() {
//     root.innerHTML = '';
//     root.appendChild((new App()).render());
// }

// render();
