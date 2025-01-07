import React, { useEffect, useState } from "react";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { TabMenu } from "primereact/tabmenu";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./home.css";
import schoolstudent from "../../assets/schoolstudent.png";
import collegestudent from "../../assets/collegestudent.png";
import itprofessional from "../../assets/it.png";

// Mock ProductService if not already defined
class ProductService {
  getProductsSmall() {
    return Promise.resolve([
      {
        id: 1,
        name: "Bamboo Watch",
        price: 65,
        inventoryStatus: "INSTOCK",
        image: "bamboo-watch.jpg",
      },
      {
        id: 3,
        name: "Blue Band",
        price: 45,
        inventoryStatus: "LOWSTOCK",
        image: "blue-band.jpg",
      },
      {
        id: 4,
        name: "Gaming Set",
        price: 89,
        inventoryStatus: "OUTOFSTOCK",
        image: "gaming-set.jpg",
      },
      {
        id: 4,
        name: "Gaming Set",
        price: 89,
        inventoryStatus: "OUTOFSTOCK",
        image: "gaming-set.jpg",
      },
      {
        id: 4,
        name: "Gaming Set",
        price: 89,
        inventoryStatus: "OUTOFSTOCK",
        image: "gaming-set.jpg",
      },
    ]);
  }
}

const Home = () => {
  const [bgColor, setBgColor] = useState(""); // State for background color
  const [products, setProducts] = useState([]); // State for products list
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active tab

  const productService = new ProductService();

  const items = [
    { label: "School" },
    { label: "College" },
    { label: "Professional" },
  ];

  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 5, numScroll: 1 },
    { breakpoint: "1199px", numVisible: 5, numScroll: 1 },
    { breakpoint: "767px", numVisible: 3, numScroll: 1 },
    { breakpoint: "575px", numVisible: 2, numScroll: 1 },
  ];

  // Assign background color dynamically
  const handleMouseEnter = (color) => setBgColor(color);
  const handleMouseLeave = () => setBgColor("");

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";
      case "LOWSTOCK":
        return "warning";
      case "OUTOFSTOCK":
        return "danger";
      default:
        return null;
    }
  };

  useEffect(() => {
    productService
      .getProductsSmall()
      .then((data) => setProducts(data.slice(0, 9)))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const productTemplate = (product) => {
    if (!product) return null;

    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
            className="w-6 shadow-2"
          />
        </div>
        <div>
          <h4 className="mb-1">{product.name}</h4>
          <h6 className="mt-0 mb-3">${product.price}</h6>
          <Tag
            value={product.inventoryStatus}
            severity={getSeverity(product)}
          ></Tag>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            <Button
              icon="pi pi-star-fill"
              className="p-button-success p-button-rounded"
            />
          </div>
        </div>
      </div>
    );
  };

  // Function to render content based on the active tab
  const renderTabContent = () => {
    switch (activeIndex) {
      case 0:
        return (
          <div>
            <h2>School Students</h2>
            <p>Special courses and resources tailored for school students.</p>
            <img src={schoolstudent} alt="School" height="200" />
          </div>
        );
      case 1:
        return (
          <div>
            <h2>College Students</h2>
            <p>Explore advanced courses for college-level education.</p>
            <img src={collegestudent} alt="College" height="200" />
          </div>
        );
      case 2:
        return (
          <div>
            <h2>IT Professionals</h2>
            <p>Upskill yourself with professional training and certifications.</p>
            <img src={itprofessional} alt="Professional" height="200" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="home p-2 flex flex-wrap">
      <div
        className="innerhome flex flex-wrap justify-content-around p-4"
        style={{
          backgroundColor: bgColor || "#fff",
          transition: "background-color 0.3s ease",
        }}
      >
        <div
          onMouseEnter={() => handleMouseEnter("#ff9800")}
          onMouseLeave={handleMouseLeave}
          className="school-section"
        >
          <img
            src={schoolstudent}
            alt="School Student"
            height={300}
            width={300}
            className="border-circle"
          />
          <div className="school section-label border-round-3xl align-items-center font-bold text-white">
            <p>School Student</p>
          </div>
        </div>

        <div
          onMouseEnter={() => handleMouseEnter("#2196f3")}
          onMouseLeave={handleMouseLeave}
          className="college-section"
        >
          <img
            src={collegestudent}
            alt="College Student"
            height={300}
            width={300}
            className="border-circle"
          />
          <div className="school section-label border-round-3xl align-items-center font-bold text-white">
            <p>College Student</p>
          </div>
        </div>

        <div
          onMouseEnter={() => handleMouseEnter("#8bc34a")}
          onMouseLeave={handleMouseLeave}
          className="professional-section"
        >
          <img
            src={itprofessional}
            alt="Job Professional"
            height={300}
            width={300}
            className="border-circle"
          />
          <div className="job section-label border-round-3xl align-items-center font-bold text-white">
            <p>Job Professionals</p>
          </div>
        </div>
      </div>
      <h1 style={{ textAlign: "center", width: "100%", padding: "10px" }}>
        COURSES
      </h1>

      <div className="card border-none">
        <Carousel
          value={products}
          numVisible={3}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          autoplayInterval={3000}
          itemTemplate={productTemplate}
        />
      </div>

      {/* TabMenu with dynamic content */}
      <div className="card w-full text-center">
        <TabMenu
          model={items}
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
        />
        <div className="tab-content mt-4">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default Home;
