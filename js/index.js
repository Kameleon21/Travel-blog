// animations for main page main elements
$(() => {
  let offset = { offset: "60%" }; // when items appear
  $(".main-head").waypoint(function () {
    $(".main-head").addClass("animate__animated animate__fadeInRight");
  }, offset);

  $(".num-one").waypoint(function () {
    $(".num-one").addClass("animate__animated animate__fadeInLeft");
  }, offset);

  $(".num-two").waypoint(function () {
    $(".num-two").addClass("animate__animated animate__fadeInRight");
  }, offset);

  $(".num-three").waypoint(function () {
    $(".num-three").addClass("animate__animated animate__fadeInLeft");
  }, offset);

  $(".num-four").waypoint(function () {
    $(".num-four").addClass("animate__animated animate__fadeInRight");
  }, offset);
});
