function toggleTopMenu() {
  var x = document.getElementById("nav-buttons");
  if (x.className === "nav-buttons") {
    x.className += " responsive";
  } else {
    x.className = "nav-buttons";
  }
}

function insertMailto(id, place, me) {
  var elink = document.getElementById(id);
  elink.href = `mailto:${me}@${place}`;
}

// insertMailto("mlink1", "cirad.fr", "oleksandr.zaitsev");
// insertMailto("mlink2", "inria.fr", "stephane.ducasse");

// create document click that watches the nav links only
document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("nav a")) {
      return;
  }
  e.preventDefault();
  route();
});

const routes = {
  404: {
      template: "/pages/404.html",
      title: "404",
      description: "Page not found",
  },
  "/": {
      template: "/pages/home.html",
      title: "Home",
      description: "This is the home page",
  },
  "/venue": {
      template: "/pages/venue.html",
      title: "Venue",
      description: "This is the venue page",
  },
  "/program": {
      template: "/pages/program.html",
      title: "Program",
      description: "This is the program page",
  },
  "/resources": {
    template: "/pages/resources.html",
    title: "Learning Resources",
    description: "This is the learning resources page",
  }
};

const route = (event) => {
  event = event || window.event; // get window.event if event argument not provided
  event.preventDefault();
  // window.history.pushState(state, unused, target link);
  window.history.pushState({}, "", event.target.href);
  locationHandler();
};

const locationHandler = async () => {
  const location = window.location.pathname; // get the url path
  // if the path length is 0, set it to primary page route
  if (location.length == 0) {
      location = "/";
  }
  // get the route object from the urlRoutes object
  const route = routes[location] || routes["404"];
  // get the html from the template
  const html = await fetch(route.template).then((response) => response.text());
  // set the content of the content div to the html
  document.getElementById("content").innerHTML = html;
  // set the title of the document to the title of the route
  document.title = route.title;
  // set the description of the document to the description of the route
  document
      .querySelector('meta[name="description"]')
      .setAttribute("content", route.description);
};

// add an event listener to the window that watches for url changes
window.onpopstate = locationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = route;
// call the urlLocationHandler function to handle the initial url
locationHandler();