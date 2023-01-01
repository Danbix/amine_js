let courses = {
    data: [
      {
        productName: "HTML Attributes",
        category: "HTML",
        price: "30",
        image: "https://1.bp.blogspot.com/-BYDL4v8-bD4/XS7UEJB0r5I/AAAAAAAADlE/9Yq4Ynptv28u658I0so0tPp4CrAFR1QtwCLcBGAs/s1600/What%2Bis%2BHTML%2BAttributes.png",
      },
      {
        productName: "The Best Guide to PHP CRUD Operations",
        category: "PHP",
        price: "49",
        image: "https://webdevtrick.com/wp-content/uploads/crud-php-mysql.jpg",
      },
      {
        productName: "CSS selectors",
        category: "CSS",
        price: "99",
        image: "https://miro.medium.com/max/800/1*5ZsfcbvLC4nsqPYrkuVEPA.png",
      },
      {
        productName: "JavaScript Variables Lifecycles",
        category: "JS",
        price: "29",
        image: "https://blog.alexdevero.com/wp-content/uploads/2020/02/24-02-20-javascript-variables-pt1-blog.jpg",
      },
      {
        productName: "HTML Elements And Tags",
        category: "HTML",
        price: "129",
        image: "https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1551437392/img/co_img_1518_1631724053.png",
      },
      {
        productName: "CSS Tutorial - Zero to Hero (Complete Course)",
        category: "CSS",
        price: "89",
        image: "https://i.ytimg.com/vi/1Rs2ND1ryYc/maxresdefault.jpg",
      },
      {
        productName: "PHP Operators with Examples - Tutorials Class",
        category: "PHP",
        price: "169",
        image: "https://itsourcecode.com/wp-content/uploads/2022/09/types-of-operators-in-php.png",
      },
      {
        productName: "Learn Advanced PHP Programming",
        category: "PHP",
        price: "49",
        image: "https://www.filepicker.io/api/file/aksXFpz9RqySTwkid7Tr",
      },
      {
        productName: "JavaScript Course: Syntax and Operators",
        category: "JS",
        price: "139",
        image: "http://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/08/JavaScript-Operator.jpg",
      },
      {
          image: 'https://miro.medium.com/max/1400/1*W5MGNZ16WYXSOxmHWNwmYw.png',
          productName: 'Javascript objects and arrays',
          category: 'JS',
          price: 39.9
      },
      {
          image: 'https://res.cloudinary.com/dillionmegida/image/upload/v1577778140/images/thewebfor5/css-measurement_xpbdae.jpg',
          productName: 'mesures and unites of CSS',
          category: 'CSS',
          price: 19.9
      },
      {
          image: 'https://i.ytimg.com/vi/dZ5AX6OFNZw/hqdefault.jpg',
          productName: 'CSS animations',
          category: 'CSS',
          price: 19.9
      },
      {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZboUeK8_PoyURkvvoTuYpp1O88hiMX4ezEQ&usqp=CAU',
          productName: 'The basics of javascript',
          category: 'JS',
          price: 29.9
      },
      {
          image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--J43C-IwA--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1zm80qaekzgu8p54w98g.jpg',
          productName: 'javascript events',
          category: 'JS',
          price: 59.9
      },
      {
          image: 'https://cdn.educba.com/academy/wp-content/uploads/2020/03/CSS-Color-Codes.jpg',
          productName: 'css colors',
          category: 'css',
          price: 29.9
      },
      {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiW7RgpJCgns-Z4cwsB3ly4CQM3RxOyfDglA2RWd-OTE8C7ypsqCMdP_jMwkTzK2X2pb4&usqp=CAU',
          productName: 'getting started with php',
          category: 'php',
          price: 15.9
      },
      {
          image: 'https://i.ytimg.com/vi/rNsC1VI9388/maxresdefault.jpg',
          productName: 'functions and loops with javascript',
          category: 'JS',
          price: 19.9
      },
      {
          image: 'https://cdn.educba.com/academy/wp-content/uploads/2019/09/PHP-Database-Connection.png',
          productName: 'connecting to database using PHP',
          category: 'PHP',
          price: 29.9
      },
      {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtVgGcXDZhFggY2yebVXS5rabrbTBv2wBfg&usqp=CAU',
          productName: 'manipulating crud using php',
          category: 'php',
          price: 45.9
      },
      {
          image: 'https://i.ytimg.com/vi/s7He0jWYjVc/maxresdefault.jpg',
          productName: 'DOM the power of javascript',
          category: 'JS',
          price: 23.9
      }
    ],
  };
  
  for (let i of courses.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("courses").appendChild(card);
  }
  
  //parametere category
  function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
      //show all courses
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check category
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          //hide
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button 
  document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    elements.forEach((element, index) => {
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });
  
  window.onload = () => {
    filterProduct("all");
  };
