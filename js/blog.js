// data set
$(() => {
  // data for handlebars
  const data = [
    {
      place: "Italy",
      flag: "it",
      month: "June",
      image: "../images/cristina-gottardi-I1Lv2yX67GI-unsplash.jpg",
      alt: "picture of Italy",
      content:
        "Italy is famous for its rich history, art, and cuisine. Home to countless cultural treasures, Rome, Florence, and Venice are among its most renowned cities.",
    },
    {
      place: "Greece",
      flag: "gr",
      month: "April",
      image: "../images/constantinos-kollias-yqBvJJ8jGBQ-unsplash.jpg",
      alt: "picture of Greece",
      content:
        "Greece is known for its ancient civilization and numerous archaeological sites. The country features beautiful islands and crystal-clear waters, attracting millions of tourists every year.",
    },
    {
      place: "Spain",
      flag: "es",
      month: "July",
      image: "../images/sam-williams-UuGAw6nF0Vw-unsplash.jpg",
      alt: "picture of Spain",
      content:
        "Spain offers a rich cultural heritage, world-class cuisine, and vibrant cities. From the beaches of Costa del Sol to the architectural wonders of Barcelona, there's something for everyone.",
    },
    {
      place: "Iceland",
      flag: "is",
      month: "February",
      image: "../images/adam-jang-MLKrf51NV8w-unsplash.jpg",
      alt: "picture of Iceland",
      content:
        "Iceland is famous for its stunning landscapes, including glaciers, volcanoes, geysers, and waterfalls. The country is also known for the Northern Lights, which attract many visitors during the winter months.",
    },
    {
      place: "Norway",
      flag: "no",
      month: "December",
      image: "../images/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg",
      alt: "picture of Norway",
      content:
        "Norway is renowned for its picturesque fjords, rugged coastline, and enchanting natural landscapes. The country offers a variety of outdoor activities such as hiking, skiing, and fishing. During the winter, visitors can also witness the mesmerizing Northern Lights.",
    },
  ];

  // shows or hides content
  const toggleReadMore = (e) => {
    const button = e.target;
    const card = button.closest(".card");
    const extraContent = card.querySelector(".extra-content");

    if (button.textContent === "Read More") {
      extraContent.style.display = "block";
      button.textContent = "Read Less";
    } else {
      extraContent.style.display = "none";
      button.textContent = "Read More";
    }
  };

  const source = document.getElementById("card-template");
  const template = Handlebars.compile(source.innerHTML);

  // displays the information in the array and creates a new card for each object
  data.forEach((place) => {
    const friendCard = template(place);
    const cardElement = $(friendCard);
    const readMoreButton = cardElement.find(".read-more-container");

    readMoreButton.on("click", toggleReadMore);
    $("#cards-container").append(cardElement);
  });
});
