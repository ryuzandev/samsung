// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Fuse from "fuse.js";
// import {
//   Navbar as NavbarComponent,
//   Nav,
//   Container,
//   Form,
//   Button,
// } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "../componentsCss/NavbarCss.css";

// function Navbar() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   // Define searchable items
//   // const searchableRoutes = [

//   //   { name: "Television", path: "/tv" },
//   //   { name: "Television Service", path: "/tv" },
//   //   { name: "Washing Machine", path: "/washing" },
//   //   { name: "Washing Machine Service", path: "/washing" },
//   //   { name: "Microwave", path: "/microwave" },
//   //   { name: "Microwave Service", path: "/microwave" },
//   //   { name: "Air Conditioner", path: "/aircondition" },
//   //   { name: "Air Conditioner Service", path: "/aircondition" },
//   //   { name: "Refrigerator", path: "/refridgerater" },
//   //   { name: "Refrigerator Service", path: "/refridgerater" },
//   //   { name: "Dish Washer", path: "/DishWasher" },
//   //   { name: "Dish Washer Service", path: "/DishWasher" },

//   // ];

//   const fuse = new Fuse(searchableRoutes, {
//     keys: ["name"],
//     threshold: 0.3, // adjust sensitivity
//   });

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       const results = fuse.search(searchTerm);
//       if (results.length > 0) {
//         navigate(results[0].item.path);
//       } else {
//         alert("No matching page found.");
//       }
//     }
//   };

//   return (
//     <NavbarComponent expand="xxl" className="navbar-dark-theme">
//       <Container fluid>
//         <NavbarComponent.Brand as={Link} to="/" className="text-white">
//           HYPERSONIC
//         </NavbarComponent.Brand>
//         <NavbarComponent.Toggle aria-controls="navbarScroll" />
//         <NavbarComponent.Collapse id="navbarScroll">
//           <Nav className="me-auto my-2 my-lg-0 nav-scroll" navbarScroll>
//             {/* Keep all Nav.Links same */}
//             <Nav.Link as={Link} to="/" className="text-white">
//               Home
//             </Nav.Link>
//             <Nav.Link as={Link} to="/tv" className="text-white">
//               Television
//             </Nav.Link>
//             <Nav.Link as={Link} to="/washing" className="text-white">
//               Washing-Machine
//             </Nav.Link>
//             <Nav.Link as={Link} to="/microwave" className="text-white">
//               Microwave
//             </Nav.Link>
//             <Nav.Link as={Link} to="/aircondition" className="text-white">
//               Air-Conditioner
//             </Nav.Link>
//             <Nav.Link as={Link} to="/Refrigerator" className="text-white">
//               Refrigerator
//             </Nav.Link>
//             <Nav.Link as={Link} to="/DishWasher" className="text-white">
//               Dish-Washer
//             </Nav.Link>
//             <Nav.Link as={Link} to="/book-now" className="text-white">
//               Book-Now
//             </Nav.Link>
//             <Nav.Link as={Link} to="/troubleshoot" className="text-white">
//               Trouble-Shoot
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex" onSubmit={handleSearchSubmit}>
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="search-input"
//               aria-label="Search"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <Button
//               variant="outline-light"
//               className="search-button"
//               type="submit"
//             >
//               Search
//             </Button>
//           </Form>
//         </NavbarComponent.Collapse>
//       </Container>
//     </NavbarComponent>
//   );
// }

// export default Navbar;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import {
  Navbar as NavbarComponent,
  Nav,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../componentsCss/NavbarCss.css";
import samsung from "../componentsSrcAssets/samsung.png";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // const searchableRoutes = [ /* your full route list */ ];
  const searchableRoutes = [
    { name: "Television", path: "/tv" },
    { name: "Television Service", path: "/tv" },
    { name: "Washing Machine", path: "/washing" },
    { name: "Washing Machine Service", path: "/washing" },
    { name: "Microwave", path: "/microwave" },
    { name: "Microwave Service", path: "/microwave" },
    { name: "Air Conditioner", path: "/aircondition" },
    { name: "Air Conditioner Service", path: "/aircondition" },
    { name: "Refrigerator", path: "/refridgerater" },
    { name: "Refrigerator Service", path: "/refridgerater" },
    { name: "Dish Washer", path: "/DishWasher" },
    { name: "Dish Washer Service", path: "/DishWasher" },
  ];

  const fuse = new Fuse(searchableRoutes, {
    keys: ["name"],
    threshold: 0.3,
  });

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      return;
    }

    const results = fuse.search(searchTerm).slice(0, 5);
    setSuggestions(results.map((res) => res.item));
    console.log(results);
  }, [searchTerm]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      navigate(suggestions[0].path);
    } else {
      alert("No matching page found.");
    }
  };

  return (
    <NavbarComponent expand="xxl" className="navbar-dark-theme">
      <Container fluid>
        {/* <NavbarComponent.Brand as={Link} to="/" className="text-white">
          HYPERSONIC
        </NavbarComponent.Brand> */}
        <NavbarComponent.Brand
          as={Link}
          to="/samsung"
          className="d-flex align-items-center"
        >
          <img
            src={samsung}
            alt="Hypersonic Logo"
            style={{ height: "100px", width: "auto" }} // adjust size if needed
          />
        </NavbarComponent.Brand>

        <NavbarComponent.Toggle aria-controls="navbarScroll" />
        <NavbarComponent.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-scroll" navbarScroll>
            {/* Nav links... */}
            {/* <Nav.Link as={Link} to="/hypersonic" className="text-white">
              Home
            </Nav.Link> */}
            <Nav.Link as={Link} to="/tv" className="text-white">
              Television
            </Nav.Link>
            <Nav.Link as={Link} to="/washing" className="text-white">
              Washing-Machine
            </Nav.Link>
            <Nav.Link as={Link} to="/microwave" className="text-white">
              Microwave
            </Nav.Link>
            <Nav.Link as={Link} to="/aircondition" className="text-white">
              Air-Conditioner
            </Nav.Link>
            <Nav.Link as={Link} to="/Refrigerator" className="text-white">
              Refrigerator
            </Nav.Link>
            <Nav.Link as={Link} to="/DishWasher" className="text-white">
              Dish-Washer
            </Nav.Link>
            <Nav.Link as={Link} to="/book-now" className="text-white">
              Specimen
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/troubleshoot" className="text-white">
              Trouble-Shoot
            </Nav.Link> */}
          </Nav>

          <Form
            className="d-flex position-relative"
            onSubmit={handleSearchSubmit}
          >
            <Form.Control
              type="search"
              placeholder="Search"
              className="search-input"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoComplete="off"
            />
            <Button
              variant="outline-light"
              className="search-button"
              type="submit"
            >
              Search
            </Button>

            {suggestions.length > 0 && (
              <div className="search-suggestions position-absolute bg-white w-100 shadow">
                {suggestions.map((item, index) => (
                  <div
                    key={index}
                    className="suggestion-item px-3 py-2 text-dark"
                    onClick={() => {
                      navigate(item.path);
                      setSearchTerm("");
                      setSuggestions([]);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </Form>
        </NavbarComponent.Collapse>
      </Container>
    </NavbarComponent>
  );
}

export default Navbar;
