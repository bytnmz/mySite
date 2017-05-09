// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';

// import Header from '../_modules/organisms/standard-header/standard-header';
// import Weather from '../_modules/organisms/weather/weather';
// import PlanTrip from '../_modules/organisms/plan-trip/plan-trip';

$(() => {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
});


// $(() => {
//   new Link(); // Activate Link modules logic
//   new Header();
//   new Search();
//   if ($('.plan-trip-container').length) {
//     new Weather();
//     new PlanTrip();
//     new ActivityCalendar();
//   }
//   // new SocialGallery();
//   new StandardHeader();
//   if ($('.newsroom-main-wrap').length) {
//     new Newsroom();
//   }
//   if ($('.contactform-wrapper').length) {
//     new ContactForm();
//   }
//   if ($('.onemap-container').length) {
//     new Onemap();
//   }
//   if ($('.event-listing-main').length) {
//     new EventsListing();
//   }
//   // console.log('Welcome to Yeogurt!');
// });