(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//
// App.js
//

require('./global.js');
require('./modules/blocks.js');
require('./modules/category-list.js');
require('./modules/checklist.js');
require('./modules/cta.js');
require('./modules/description.js');
require('./modules/dual-features.js');
require('./modules/events.js');
require('./modules/form.js');
require('./modules/hero.js');
require('./modules/knowledge.js');
require('./modules/list.js');
require('./modules/locations.js');
require('./modules/login.js');
require('./modules/logos.js');
require('./modules/nav.js');
require('./modules/news.js');
require('./modules/search.js');
require('./modules/sectors.js');
require('./modules/solutions.js');
require('./modules/squares.js');
require('./modules/sticky-footer.js');
require('./modules/subscribe.js');
require('./modules/validation.js');
require('./modules/video.js');
},{"./global.js":6,"./modules/blocks.js":7,"./modules/category-list.js":8,"./modules/checklist.js":9,"./modules/cta.js":10,"./modules/description.js":11,"./modules/dual-features.js":12,"./modules/events.js":13,"./modules/form.js":14,"./modules/hero.js":15,"./modules/knowledge.js":16,"./modules/list.js":17,"./modules/locations.js":18,"./modules/login.js":19,"./modules/logos.js":20,"./modules/nav.js":21,"./modules/news.js":22,"./modules/search.js":23,"./modules/sectors.js":24,"./modules/solutions.js":25,"./modules/squares.js":26,"./modules/sticky-footer.js":27,"./modules/subscribe.js":28,"./modules/validation.js":29,"./modules/video.js":30}],2:[function(require,module,exports){
module.exports={
  "contentTypes": [
    "Blog Post",
    "Case Study",
    "CEO Survey",
    "eBook",
    "Infographic",
    "Research Study",
    "Video",
    "White Paper"
  ]
}
},{}],3:[function(require,module,exports){
module.exports={
  "events": [
    {
      "title": "IBM Amplify",
      "date": "2016-03-24",
      "location": "San Diego, CA",
      "audience": "Partner",
      "photo": "/img/_example-content/events/1.jpg",
      "jdaHosted": true,
      "teaser": "Monday May 11th - 12pm-1:30pm. In today's digital world, the customer is not just always right; the customer is always on. Customer expectations for personal service and instant feedback across a whole range of devices  have soared. When it comes to customer engagement, the ability to make the right decisions and take the right actions based on a consistent and meaningful view of each customer is critical for success.",
      "url": "#"
    },
    {
      "title": "JDA Hosted Event",
      "date": "2016-03-26",
      "location": "San Diego, CA",
      "audience": "Partner",
      "photo": "/img/_example-content/events/1.jpg",
      "jdaHosted": true,
      "teaser": "Monday May 11th - 12pm-1:30pm. In today's digital world, the customer is not just always right; the customer is always on. Customer expectations for personal service and instant feedback across a whole range of devices  have soared. When it comes to customer engagement, the ability to make the right decisions and take the right actions based on a consistent and meaningful view of each customer is critical for success.",
      "url": "#"
    },
    {
      "title": "Testing Events",
      "date": "2016-03-27",
      "location": "San Diego, CA",
      "audience": "Partner",
      "photo": "/img/_example-content/events/1.jpg",
      "jdaHosted": false,
      "teaser": "Monday May 11th - 12pm-1:30pm. In today's digital world, the customer is not just always right; the customer is always on. Customer expectations for personal service and instant feedback across a whole range of devices  have soared. When it comes to customer engagement, the ability to make the right decisions and take the right actions based on a consistent and meaningful view of each customer is critical for success.",
      "url": "#"
    },
    {
      "title": "Hello Hello",
      "date": "2016-03-28",
      "location": "San Diego, CA",
      "audience": "Partner",
      "photo": "/img/_example-content/events/1.jpg",
      "jdaHosted": true,
      "teaser": "Monday May 11th - 12pm-1:30pm. In today's digital world, the customer is not just always right; the customer is always on. Customer expectations for personal service and instant feedback across a whole range of devices  have soared. When it comes to customer engagement, the ability to make the right decisions and take the right actions based on a consistent and meaningful view of each customer is critical for success.",
      "url": "#"
    },
    {
      "title": "Hi, Todd",
      "date": "2016-03-29",
      "location": "San Diego, CA",
      "audience": "Partner",
      "photo": "/img/_example-content/events/1.jpg",
      "jdaHosted": false,
      "teaser": "Monday May 11th - 12pm-1:30pm. In today's digital world, the customer is not just always right; the customer is always on. Customer expectations for personal service and instant feedback across a whole range of devices  have soared. When it comes to customer engagement, the ability to make the right decisions and take the right actions based on a consistent and meaningful view of each customer is critical for success.",
      "url": "#"
    },
    {
      "title": "Hello, Reese",
      "date": "2016-03-30",
      "location": "San Diego, CA",
      "audience": "Partner",
      "photo": "/img/_example-content/events/1.jpg",
      "jdaHosted": true,
      "teaser": "Monday May 11th - 12pm-1:30pm. In today's digital world, the customer is not just always right; the customer is always on. Customer expectations for personal service and instant feedback across a whole range of devices  have soared. When it comes to customer engagement, the ability to make the right decisions and take the right actions based on a consistent and meaningful view of each customer is critical for success.",
      "url": "#"
    },
    {
      "title": "Jim Is The Man Event",
      "date": "2016-04-01",
      "location": "San Diego, CA",
      "audience": "Partner",
      "photo": "/img/_example-content/events/1.jpg",
      "jdaHosted": false,
      "teaser": "Monday May 11th - 12pm-1:30pm. In today's digital world, the customer is not just always right; the customer is always on. Customer expectations for personal service and instant feedback across a whole range of devices  have soared. When it comes to customer engagement, the ability to make the right decisions and take the right actions based on a consistent and meaningful view of each customer is critical for success.",
      "url": "#"
    },
    {
      "title": "IBM Amplify (2)",
      "date": "2016-04-06",
      "location": "San Diego, CA",
      "audience": "Partner",
      "photo": "/img/_example-content/events/1.jpg",
      "jdaHosted": true,
      "teaser": "Monday May 11th - 12pm-1:30pm. In today's digital world, the customer is not just always right; the customer is always on. Customer expectations for personal service and instant feedback across a whole range of devices  have soared. When it comes to customer engagement, the ability to make the right decisions and take the right actions based on a consistent and meaningful view of each customer is critical for success.",
      "url": "#"
    },
    {
      "title": "IBM Amplify (2)",
      "date": "2016-04-26",
      "location": "San Diego, CA",
      "audience": "Partner",
      "photo": "/img/_example-content/events/1.jpg",
      "jdaHosted": false,
      "teaser": "Monday May 11th - 12pm-1:30pm. In today's digital world, the customer is not just always right; the customer is always on. Customer expectations for personal service and instant feedback across a whole range of devices  have soared. When it comes to customer engagement, the ability to make the right decisions and take the right actions based on a consistent and meaningful view of each customer is critical for success.",
      "url": "#"
    },
    {
      "title": "IBM Amplify",
      "date": "2016-03-24",
      "location": "San Diego, CA",
      "audience": "Partner",
      "photo": "/img/_example-content/events/1.jpg",
      "jdaHosted": true,
      "teaser": "Monday May 11th - 12pm-1:30pm. In today's digital world, the customer is not just always right; the customer is always on. Customer expectations for personal service and instant feedback across a whole range of devices  have soared. When it comes to customer engagement, the ability to make the right decisions and take the right actions based on a consistent and meaningful view of each customer is critical for success.",
      "url": "#"
    },
    {
      "title": "JDA Hosted Event",
      "date": "2016-03-26",
      "location": "San Diego, CA",
      "audience": "Partner",
      "photo": "/img/_example-content/events/1.jpg",
      "jdaHosted": true,
      "teaser": "Monday May 11th - 12pm-1:30pm. In today's digital world, the customer is not just always right; the customer is always on. Customer expectations for personal service and instant feedback across a whole range of devices  have soared. When it comes to customer engagement, the ability to make the right decisions and take the right actions based on a consistent and meaningful view of each customer is critical for success.",
      "url": "#"
    },
    {
      "title": "Testing Events",
      "date": "2016-03-27",
      "location": "San Diego, CA",
      "audience": "Partner",
      "photo": "/img/_example-content/events/1.jpg",
      "jdaHosted": false,
      "teaser": "Monday May 11th - 12pm-1:30pm. In today's digital world, the customer is not just always right; the customer is always on. Customer expectations for personal service and instant feedback across a whole range of devices  have soared. When it comes to customer engagement, the ability to make the right decisions and take the right actions based on a consistent and meaningful view of each customer is critical for success.",
      "url": "#"
    },
    {
      "title": "Hello Hello",
      "date": "2016-03-28",
      "location": "San Diego, CA",
      "audience": "Partner",
      "photo": "/img/_example-content/events/1.jpg",
      "jdaHosted": true,
      "teaser": "Monday May 11th - 12pm-1:30pm. In today's digital world, the customer is not just always right; the customer is always on. Customer expectations for personal service and instant feedback across a whole range of devices  have soared. When it comes to customer engagement, the ability to make the right decisions and take the right actions based on a consistent and meaningful view of each customer is critical for success.",
      "url": "#"
    },
    {
      "title": "Hi, Todd",
      "date": "2016-03-29",
      "location": "San Diego, CA",
      "audience": "Partner",
      "photo": "/img/_example-content/events/1.jpg",
      "jdaHosted": false,
      "teaser": "Monday May 11th - 12pm-1:30pm. In today's digital world, the customer is not just always right; the customer is always on. Customer expectations for personal service and instant feedback across a whole range of devices  have soared. When it comes to customer engagement, the ability to make the right decisions and take the right actions based on a consistent and meaningful view of each customer is critical for success.",
      "url": "#"
    },
    {
      "title": "Hello, Reese",
      "date": "2016-03-30",
      "location": "San Diego, CA",
      "audience": "Partner",
      "photo": "/img/_example-content/events/1.jpg",
      "jdaHosted": true,
      "teaser": "Monday May 11th - 12pm-1:30pm. In today's digital world, the customer is not just always right; the customer is always on. Customer expectations for personal service and instant feedback across a whole range of devices  have soared. When it comes to customer engagement, the ability to make the right decisions and take the right actions based on a consistent and meaningful view of each customer is critical for success.",
      "url": "#"
    },
    {
      "title": "Jim Is The Man Event",
      "date": "2016-04-01",
      "location": "San Diego, CA",
      "audience": "Partner",
      "photo": "/img/_example-content/events/1.jpg",
      "jdaHosted": false,
      "teaser": "Monday May 11th - 12pm-1:30pm. In today's digital world, the customer is not just always right; the customer is always on. Customer expectations for personal service and instant feedback across a whole range of devices  have soared. When it comes to customer engagement, the ability to make the right decisions and take the right actions based on a consistent and meaningful view of each customer is critical for success.",
      "url": "#"
    },
    {
      "title": "IBM Amplify (2)",
      "date": "2016-04-06",
      "location": "San Diego, CA",
      "audience": "Partner",
      "photo": "/img/_example-content/events/1.jpg",
      "jdaHosted": true,
      "teaser": "Monday May 11th - 12pm-1:30pm. In today's digital world, the customer is not just always right; the customer is always on. Customer expectations for personal service and instant feedback across a whole range of devices  have soared. When it comes to customer engagement, the ability to make the right decisions and take the right actions based on a consistent and meaningful view of each customer is critical for success.",
      "url": "#"
    },
    {
      "title": "IBM Amplify (2)",
      "date": "2016-04-26",
      "location": "San Diego, CA",
      "audience": "Partner",
      "photo": "/img/_example-content/events/1.jpg",
      "jdaHosted": false,
      "teaser": "Monday May 11th - 12pm-1:30pm. In today's digital world, the customer is not just always right; the customer is always on. Customer expectations for personal service and instant feedback across a whole range of devices  have soared. When it comes to customer engagement, the ability to make the right decisions and take the right actions based on a consistent and meaningful view of each customer is critical for success.",
      "url": "#"
    }
  ]
}

},{}],4:[function(require,module,exports){
module.exports={
  "industries": [
    "Aerospace & Defense",
    "Automotive & Industrials",
    "Chemicals & Paper",
    "Consumer Electronics",
    "Consumer Goods",
    "Entertainment & Leisure",
    "Food and Beverage",
    "Furniture",
    "Grocery, Convenience & Pharmacy",
    "Hardlines",
    "Hospitality & Food Service",
    "Life Sciences & Pharmaceuticals",
    "Media & Broadcasting",
    "Mega-Retail",
    "Metals",
    "Passenger Travel",
    "Semiconductor",
    "Softlines",
    "Third-Party Logistics",
    "Wholesale Distribution"
  ]
}
},{}],5:[function(require,module,exports){
module.exports={
  "results": [
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue",
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Take Your Supply Chain",
      "date": "2015-01-01",
      "photo": "/img/_example-content/articles/1.jpg",
      "contentType": "eBook",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Top Challenges Facing Supply Chain Executives",
      "date": "2015-01-02",
      "photo": "/img/_example-content/articles/2.jpg",
      "contentType": "Research Study",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Survey: The Omni-Channel Fulfillment Imperative",
      "date": "2015-01-03",
      "photo": "/img/_example-content/articles/3.jpg",
      "contentType": "CEO Survey",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    },
    {
      "title": "Dr. Pill, M.D. Accelerating Time to Value",
      "date": "2015-01-04",
      "photo": "/img/_example-content/articles/4.jpg",
      "contentType": "White Paper",
      "industries": ["Life Sciences", "Pharmaceutical"],
      "color": "green"
    },
    {
      "title": "Avnet Achieves Real Results Using JDA",
      "date": "2015-01-05",
      "photo": "/img/_example-content/articles/5.jpg",
      "contentType": "Video",
      "industries": ["Semiconductor"],
      "color": "green"
    },
    {
      "title": "Proven Paths to Creating New Value Quickly",
      "date": "2015-01-06",
      "photo": "/img/_example-content/articles/6.jpg",
      "contentType": "Blog Post",
      "industries": ["All Industries"],
      "color": "lightBlue"
    },
    {
      "title": "Profitability Through Segmentation",
      "date": "2015-01-07",
      "photo": "/img/_example-content/articles/7.jpg",
      "contentType": "Infographic",
      "industries": ["Manufacturing"],
      "color": "green"
    },
    {
      "title": "Walgreens: Happy, Healthy & Well-Planned",
      "date": "2015-01-08",
      "photo": "/img/_example-content/articles/8.jpg",
      "contentType": "Case Study",
      "industries": ["Consumer Goods", "Retail"],
      "color": "purple"
    }
  ]
}

},{}],6:[function(require,module,exports){

// browser inconsistency fixes

if (!location.origin) {
  location.origin = location.protocol + '//' + location.host;
}

if (typeof console === 'undefined') {
  console = {};
  console.log = function () {
    return;
  }
}

// responsive breakpoints

screenXxxsMax = 320;
screenXxsMax = 480;
screenXsMax = 767;
screenSmMin = 768;
screenSmMax = 991;
screenMdMin = 992;
screenMdMax = 1199;
screenLgMin = 1260;

// mobile device detection

isMobile = (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)));

/**
 * Get URL Parameter
 *
 * @param name
 * @return string
 */
getUrlParameter = function (name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/**
 * Generate random character id
 *
 * @return {string}
 */
randomId = function () {
  return Math.random().toString(36).substring(9);
}

/**
 * Global document ready scripts & functions
 */

jQuery(document).ready(function ($) {

  $(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  });

  var scrollBody = $('html, body');

  $(document).on('click', 'a[data-scroll-to]', function (e) {
    var target = $($(this).data('scroll-to'));
    if (target.length > 0) {
      scrollBody.animate({scrollTop: target.offset().top});
    } else {
      console.log('global.js: scroll-to target does not exist');
    }
  });

  // demo nav hover colors

  if (getUrlParameter('demo') !== null) {
    $('body').addClass('demo-' + getUrlParameter('demo'));
  }

  // init tooltips

  if (!isMobile) {
    $('[data-toggle="tooltip"]').tooltip();
  }

});

},{}],7:[function(require,module,exports){
//
// Blocks.js
//

jQuery(document).ready(function ($) {

  initBlockContentModules = function () {

    var blockContentModule = $('.blocks');

    if (blockContentModule.length > 0) {

      blockContentModule.each(function () {
        var parentClass = $(this).parent().attr('class');
        if (parentClass !== undefined) {
          if (parentClass.indexOf('-4') !== -1) { // one-third column
            $(this).addClass('blocks--oneThird feed--oneThird');
          } else if (parentClass.indexOf('-6') !== -1) { // one-half column
            $(this).addClass('blocks--oneHalf feed--oneHalf');
          } else if (parentClass.indexOf('-8') !== -1) { // two-third column
            $(this).addClass('blocks--twoThirds feed--twoThirds');
          } else if (parentClass.indexOf('-12') !== -1 || parentClass.indexOf('container') !== -1) { // full width column
            $(this).addClass('blocks--fullWidth feed--fullWidth');
          }
        }
      });

    }

  }

  matchBlockHeights = function () {

    var blockContentModule = $('.blocks');

    if (blockContentModule.length > 0) {

      blockContentModule.each(function () {
        var tallestBlockHeight = 0,
            moduleBlock = $(this).find('.block');
        moduleBlock.each(function () {
          var blockHeight = $(this).height();
          if (blockHeight > tallestBlockHeight) {
            tallestBlockHeight = blockHeight;
          }
        });
        if (!$(this).hasClass('blocks--minimal')) {
          moduleBlock.each(function () {
            var blockHeight = $(this).height();
            if (blockHeight < tallestBlockHeight) {
              $(this).css({ 'padding-bottom': 36 + (tallestBlockHeight - blockHeight) + 'px' });
            } else {
              $(this).css({ 'padding-bottom': '36px' });
            }
          });
        } else {
          moduleBlock.each(function () {
            var blockHeight = $(this).height();
            if (blockHeight < tallestBlockHeight) {
              $(this).css({ 'padding-bottom': 10 + (tallestBlockHeight - blockHeight) + 'px' });
            } else {
              $(this).css({ 'padding-bottom': '10px' });
            }
          });
        }
      });

    }

  }

  if ($('.blocks').length > 0) {
    $(window).on('load', function () {
      initBlockContentModules();
      matchBlockHeights();
    }).resize(_.debounce(matchBlockHeights, 150));
  }

  $(document).on('dynamicContent.reloaded', function () {
    matchBlockHeights();
  });

});

},{}],8:[function(require,module,exports){
//
// Category-list.js
//

jQuery(document).ready(function ($) {

  var squares = $('.js-category-list-square');

  if (squares.length > 0) {

    squares.each(function () {
      var square = $(this);
      var contentDiv = $(square.attr('href'));

      if (contentDiv.length > 0) {
        var content = contentDiv.text().find('script').remove();
        if (!content.text()) {
          square.parent().remove();
        } else {
          //alert('Square has content');
        }
      }
    });

  }

});
},{}],9:[function(require,module,exports){
//
// List.js
//

jQuery(document).ready(function ($) {

  var checklistModule = $('.checklist');

  checklistModule.each(function () {
    var parentClass = $(this).parent().attr('class');
    if (parentClass !== undefined) {
      if (parentClass.indexOf('-4') !== -1) { // one-third column
        return $(this).addClass('checklist--oneThird feed--oneThird');
      } else if (parentClass.indexOf('-6') !== -1) { // one-half column
        return $(this).addClass('checklist--oneHalf feed--oneHalf');
      } else if (parentClass.indexOf('-8') !== -1) { // two-third column
        return $(this).addClass('checklist--twoThirds feed--twoThirds');
      }
    }
    $(this).addClass('checklist--fullWidth feed--fullWidth');
  });

});
},{}],10:[function(require,module,exports){
//
// Cta.js
//

jQuery(document).ready(function ($) {

  var ctaCenterEl = $('.js-cta-center');

  var centerCtaEls = function () {
    ctaCenterEl.each(function () {
      var leftColHeight = $(this).parent().prev().height();
      if ($(window).width() > screenXsMax) {
        $(this).css({ 'transform': 'translateY(' + (leftColHeight - $(this).outerHeight()) / 2 + 'px)' });
      }
    });
  }

  if (ctaCenterEl.length > 0) {
    $(window).on('load', centerCtaEls).resize(_.debounce(centerCtaEls, 150));
  }

  // check for cta's with background image

  var ctaModule = $('.cta');

  ctaModule.each(function () {
    if ($(this).css('background-image') !== undefined) {
      $(this).addClass('cta--hasBackgroundImage');
    }
  });

});
},{}],11:[function(require,module,exports){
//
// Description.js
//

jQuery(document).ready(function ($) {

  var descriptionModule = $('.description');

  descriptionModule.each(function () {
    var parentClass = $(this).parent().attr('class');
    if (parentClass !== undefined && parentClass.length > 0) {
      if (parentClass.indexOf('-4') !== -1) { // one-third column
        return $(this).addClass('description--oneThird');
      } else if (parentClass.indexOf('-6') !== -1) { // one-half column
        return $(this).addClass('description--oneHalf');
      } else if (parentClass.indexOf('-8') !== -1) { // two-third column
        return $(this).addClass('description--twoThirds');
      }
    }
    $(this).addClass('description--fullWidth');
  });

});
},{}],12:[function(require,module,exports){
//
// Dual-features.js
//

jQuery(document).ready(function ($) {

  // match feature text heights

  var dualFeatures = $('.dual-features');

  if (dualFeatures.length > 0) {

    var matchHeights = function () {
      dualFeatures.each(function () {
        var leftFeatureText = $(this).find('.dual-feature-text:eq(0)'),
            rightFeatureText = $('.dual-feature-text:eq(1)'),
            leftFeatureTextHeight = leftFeatureText.height(),
            rightFeatureTextHeight = rightFeatureText.height();
        if (leftFeatureTextHeight > rightFeatureTextHeight) {
          rightFeatureText.css({'margin-bottom': leftFeatureTextHeight - rightFeatureTextHeight + 16 + 'px'});
          return;
        }
        leftFeatureText.css({'margin-bottom': rightFeatureTextHeight - leftFeatureTextHeight + 16 + 'px'});
      });
    };

    $(window).load(matchHeights).resize(_.debounce(matchHeights, 150));
  }

});
},{}],13:[function(require,module,exports){
//
// Events.js
//

jQuery(document).ready(function () {

  var eventsModule = $('.events');

  eventsModule.each(function () {
    var parentClass = $(this).parent().attr('class');
    if (parentClass !== undefined && parentClass.length > 0) {
      if (parentClass.indexOf('-4') !== -1) { // one-third column
        return $(this).addClass('events--oneThird feed--oneThird');
      } else if (parentClass.indexOf('-6') !== -1) { // one-half column
        return $(this).addClass('events--oneHalf feed--oneHalf');
      } else if (parentClass.indexOf('-8') !== -1) { // two-third column
        return $(this).addClass('events--twoThirds feed--twoThirds');
      }
    }
    $(this).addClass('events--fullWidth feed--fullWidth');
  });

  // teasers

  var eventTeasers = $('.event-teaser');

  var showTeasers = function () {
    eventTeasers.css({opacity: 0}).animate({opacity: 1}, 240);
  };

  /**
   * Calculate character limit for events module
   *
   * @return {int}
   */
  var calculateCharLimit = function () {
    var windowWidth = $(window).width();
    if (windowWidth > screenMdMax) {
      return 420;
    } else if (windowWidth > screenSmMax) {
      return 320;
    } else if (windowWidth > screenXsMax) {
      return 220;
    }
  };

  var applyCharLimit = function (callback) {
    var charLimit = calculateCharLimit();
    if (charLimit > 0) {
      eventTeasers.each(function () {
        if ($(this).data('teaser').length > charLimit) {
          $(this).text($(this).data('teaser').substring(0, charLimit) + '...');
        } else {
          $(this).text($(this).data('teaser'));
        }
      });
    }
    showTeasers();
  };

  var initTeasers = function () {
    eventTeasers.each(function () {
      $(this).data('teaser', $(this).text());
    });
    applyCharLimit();
    $(window).resize(_.debounce(applyCharLimit, 100));
  };

  if (eventTeasers.length > 0) {
    initTeasers();
  }

  //

  if ($('.js-events').length > 0) {

    var state = {
      loadMoreIndex: 0,
      filters: {
        jdaHosted: null,
        keywords: null
      }
    };

    /**
     * Update state
     *
     * @param {string} key
     * @param {string} value
     * @param {function} callback
     */
    var updateState = function (key, value, callback) {
      if (key !== undefined && state[key] !== undefined) {
        state[key] = value;
      }
      if (typeof callback === 'function') {
        callback();
      }
    };

    /**
     * Update filter filters
     *
     * @param {string} key
     * @param {string} value
     * @param {function} callback
     */
    var updateFilterState = function (key, value, callback) {
      if (key !== undefined && state.filters[key] !== undefined) {
        state.filters[key] = value;
      }
      if (typeof callback === 'function') {
        callback();
      }
    };

    // results containers

    var hasResultsDiv = $('#events-has-results'),
        hasNoResultsDiv = $('#events-has-no-results'),
        resultsDiv = $('#events-results');

    /**
     * Fetch events
     *
     * @return {array}
     */
    var fetchEvents = function () {
      var data = require('./../data/events');
      console.log(data.events.length);
      return data.events;
    };

    /**
     * Check that there are results
     *
     * @param {array} items
     * @return {boolean}
     */
    var hasResults = function (items) {
      if (items.length === 0) {
        hasResultsDiv.hide().addClass('is-empty');
        hasNoResultsDiv.fadeIn(400);
        return false;
      } else if (hasResultsDiv.hasClass('is-empty')) {
        hasNoResultsDiv.hide();
        hasResultsDiv.removeClass('is-empty').fadeIn(400);
      }
      return true;
    };

    /**
     * Show results
     *
     * @param {$(selector)} container
     */
    var showResults = function (container, callback) {
      container.css({opacity: 0}).animate({opacity: 1}, 400);
      $(document).trigger('events.reloaded');
    };

    /**
     * Populate results
     *
     * @param {array} items
     * @param {int} take
     */
    var populateResults = function (items, take) {
      state.loadMoreIndex = 0;
      if (!hasResults(items)) {
        return;
      }
      if (take === undefined) {
        take = 10;
      }
      if (items.length <= take) {
        loadMoreButton.attr('disabled', true).css({opacity: '.4'});
      }
      items = _.take(items, take);
      var id = randomId();
      resultsDiv.html(resultsTemplate({items: items, id: id}));
      showResults($('#' + id));
      updateState('loadMoreIndex', take);
      eventTeasers = $('.event-teaser');
      initTeasers();
    };

    /**
     * Append results
     *
     * @param {array} items
     * @param {int} append
     */
    var appendResults = function (items, append) {
      if (!hasResults(items)) {
        return;
      }
      if (append === undefined) {
        append = 10;
      }
      items = _.slice(items, state.loadMoreIndex, state.loadMoreIndex + append);
      var id = randomId();
      resultsDiv.append(resultsTemplate({items: items, id: id}));
      showResults($('#' + id));
      eventTeasers = $('.event-teaser', '#' + id);
      initTeasers();
      state.loadMoreIndex = state.loadMoreIndex + append;
      if (state.loadMoreIndex >= filteredResultSet.length) {
        loadMoreButton.attr('disabled', true).css({opacity: '.4'});
      }
    };

    // apply filters

    var applyFilters = function () {
      filteredResultSet = _.cloneDeep(rawResultSet);
      if (state.filters.jdaHosted !== null) {
        filteredResultSet = _.filter(filteredResultSet, function (item) {
          return item.jdaHosted === state.filters.jdaHosted;
        });
      }
      // if (state.filters.keywords !== null) {
      //   filteredResultSet = _.filter(filteredResultSet, function (item) {
      //     return (_.includes(item.title.toLowerCase(), state.filters.keywords.toLowerCase()) ||
      //             _.includes(item.contentType.toLowerCase(), state.filters.keywords.toLowerCase()));
      //   });
      // }
      populateResults(filteredResultSet);
      if (state.loadMoreIndex >= filteredResultSet.length) {
        loadMoreButton.attr('disabled', true).css({opacity: '.4'});
      } else if (loadMoreButton.attr('disabled')) {
        loadMoreButton.removeAttr('disabled').css({opacity: '1'});
      }
    };

    /**
     * Apply search filter
     *
     * @param {string} keywords
     */
    var searchKeywords = function (keywords) {
      state.filters.keywords = keywords;
      applyFilters();
    };

    // register handlebars helpers

    var formatMonth = (function () {
      var months = {
        '01': 'Jan',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'May',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Aug',
        '09': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec'
      };
      return function (dateString) {
        var datePieces = dateString.split('-');
        if (datePieces[1] !== undefined && months[datePieces[1]] !== undefined) {
          return months[datePieces[1]];
        }
        return 'Mon';
      };
    }());

    Handlebars.registerHelper('formatMonth', formatMonth);

    Handlebars.registerHelper('formatDate', function (dateString) {
      var datePieces = dateString.split('-');
      if (datePieces[2] !== undefined) {
        return datePieces[2];
      }
      return 'DD';
    });

    // store result set

    var rawResultSet = fetchEvents(),
        filteredResultSet,

    // handlebars

        resultsTemplate = Handlebars.compile($('#events-results-template').html()),

    // filters

        eventsFilters = $('#events-filters'),
        eventsFilter = eventsFilters.find('[data-filter]'),

    // other controls

        loadMoreButton = $('#events-load-more');

    // load initial data

    filteredResultSet = _.cloneDeep(rawResultSet);
    populateResults(filteredResultSet);

    // attach load more event handler

    loadMoreButton.animate({opacity: 1}, 1000).click(function () {
      appendResults(filteredResultSet);
    });

    // attach filter link event handler

    eventsFilter.click(function () {
      if (!$(this).parent().hasClass('is-active')) {
        eventsFilters.find('.is-active').removeClass('is-active');
        $(this).parent().addClass('is-active');
        updateFilterState('jdaHosted', $(this).data('filter').jdaHosted, applyFilters);
      }
    });

  }

});

},{"./../data/events":3}],14:[function(require,module,exports){
//
// Form.js
//

jQuery(document).ready(function ($) {

  // custom select menu

  var selectMenuOption = $('.select-menu-options > li > a');

  $(document).on('click', '.select-menu-options > li > a', function () {

    var optionValue = $(this).text(),
        parentMenu = $(this).parents('.form-field');

    $(this).parents('.select-menu-options').find('.is-active').removeClass('is-active');
    $(this).parents('.select-menu').find('.select-menu-text').text(optionValue);
    $(this).parents('.form-field').find('input[type="hidden"]').attr('value', optionValue);
    $(this).parent().addClass('is-active');

    if (parentMenu.data('menu') !== undefined) {
      var childMenu = $('.form-field[data-parent-menu="' + parentMenu.data('menu') + '"]'),
          childMenuControl = childMenu.find('[data-toggle]'),
          childMenuDropdown = childMenu.find('.dropdown-menu');
      if ($(this).data('child-menu') !== undefined) {
        var childItemsMarkup = '';
        $(this).data('child-menu').items.forEach(function (item) {
          childItemsMarkup += '<li><a href="#">' + item + '</a></li>';
        });
        childMenuDropdown.html(childItemsMarkup);
        childMenuControl.attr('data-toggle', 'dropdown');
        childMenu.removeClass('is-disabled');
      } else {
        var childMenuText = childMenu.find('.select-menu-text');
        childMenuText.text(childMenuText.data('default-text'));
        childMenu.find('input[type="hidden"]').attr('value', '');
        childMenuControl.attr('data-toggle', 'dropdown-inactive');
        childMenu.addClass('is-disabled');
      }
    }

  });

});
},{}],15:[function(require,module,exports){
//
// Hero.js
//

jQuery(document).ready(function ($) {

  // don't do anything unless there are hero modules on the page

  if ($('.js-hero').length > 0) {

    // initialize hero modules

    $('.js-hero').slick({
      adaptiveHeight: true,
      arrows: false,
      dots: true
    });

    // store references to hero content
    // - we don't want to perform an $.each() loop
    //     every time we do calculations

    var heroContent = [];

    $('.hero-content').each(function () {
      heroContent.push($(this));
    });

    // function for sizing a hero content item
    // - determines what the desired content positioning is
    // - chooses whether or not to implement that content
    //     positioning based on the height of the content

    var sizeItem = function (heroContent, windowWidth) {

      var heroContentHeight = heroContent.outerHeight();

      // how tall can the content be, including padding,
      //   before we abandon transforming the Y position?
      // - we decrease max height by 10px because we
      //     don't want edge cases (they'll get too close to the dots)

      var maxHeight = parseInt(heroContent.parent().css('min-height')) - 10;

      // if the content is taller than the max, abandon
      //   transforms and let the item expand to fit the content

      if (heroContentHeight > maxHeight) {
        heroContent.css({transform: 'translateY(0)'});
        return;
      }

      // calculate and apply the correct pixel offset

      var difference = maxHeight - heroContentHeight;

      if (heroContent.data('vertical-align') !== undefined && heroContent.data('vertical-align') === 'bottom') {
        heroContent.css({transform: 'translateY(' + (difference + 10) + 'px)'});
      } else if (windowWidth <= screenXsMax) {
        heroContent.css({transform: 'translateY(' + (difference + (65 - 30)) / 2 + 'px)'});
      } else {
        heroContent.css({transform: 'translateY(' + difference / 2 + 'px)'});
      }

    }

    // function for sizing all hero items

    var sizeHeroItems = function () {

      // calculate window width for this resize

      var windowWidth = $(window).width();

      // loop through hero content and resize

      for (var i = 0, size = heroContent.length; i < size; i++) {
        sizeItem(heroContent[i], windowWidth);
      }
      
    };

    $(window).load(sizeHeroItems).resize(_.debounce(sizeHeroItems, 150));

  }

  // adaptive height script

  // var heroModule = $('.hero'),
  //     heroDots = $('.slick-dots'),
  //     heroItems = [];
  //     dotsHeight = 0;

  // var sizeHeros = function () {
  //   if (heroItems.length === 0) {
  //     for (var i = 0, heroCount = heroModule.length; i < heroCount; i++) {
  //       heroItems.push($('.hero:eq(' + i + ')'));
  //     }
  //   }
  //   for (var i = 0; i < heroItems.length; i++) {
  //     sizeHeroContent(heroItems[i]);
  //   }
  // }

  // var sizeHeroContent = function (hero) {
  //   var heroItems = hero.find('.hero-item'),
  //       heroHeight = hero.height();
  //   if (heroItems.length > 0) {
  //     var heroTopPadding = parseInt(heroItems.css('padding-top')),
  //         maxHeroContentHeight = heroHeight - 2 * dotsHeight;
  //     heroItems.each(function () {
  //       var heroContent = $(this).find('.hero-content');
  //       if (heroContent.length > 0) {
  //         var heroContentHeight = heroContent.height();
  //         if (heroContentHeight < maxHeroContentHeight) {
  //           heroContent.css({ "transform": "translateY(" + ((heroHeight - heroContent.height()) / 2 - 30) + "px)" });
  //         } else {
  //           heroContent.css({ "transform": "translateY(0)" });
  //         }
  //       }
  //     });
  //   }
  // }

  // if (heroDots.length > 0) {
  //   var dotsHeight = heroDots.height() + 2 * parseInt(heroDots.css('bottom'));
  // }

  // if (heroModule.length > 0) {

  //   if ($(window).width() <= screenXsMax) {
  //     sizeHeros();
  //   }

  //   $(window).resize(_.debounce(sizeHeros, 150));

  // }

});
},{}],16:[function(require,module,exports){
//
// Knowledge.js
//

jQuery(document).ready(function () {

  if ($('.knowledge').length > 0) {

    /**
     * Application State
     */

    var state = {
      loadMoreIndex: 0,
      filters: {
        contentType: null,
        date: null,
        industry: null,
        keywords: null
      }
    };

    /**
     * Update state
     *
     * @param {string} key
     * @param {string} value
     * @param {function} callback
     */
    var updateState = function (key, value, callback) {
      if (key !== undefined && state[key] !== undefined) {
        state[key] = value;
      }
      if (typeof callback === 'function') {
        callback();
      }
    };

    /**
     * Update filter state
     *
     * @param {string} key
     * @param {string} value
     * @param {function} callback
     */

    var clearFiltersButton = $('#knowledge-clear-filters'),
        filterBar = $('#knowledge-filter-bar');

    var updateFilterState = function (key, value, callback) {
      if (key !== undefined && state.filters[key] !== undefined) {
        state.filters[key] = value;
      }
      if (state.filters.industry === null &&
          state.filters.contentType === null &&
          state.filters.date === null) {
        if (filterBar.hasClass('has-filters')) {
          filterBar.removeClass('has-filters');
        }
        if (clearFiltersButton.hasClass('is-visible')) {
          clearFiltersButton.removeClass('is-visible');
        }
      } else {
        if (!filterBar.hasClass('has-filters')) {
          filterBar.addClass('has-filters');
        }
        if (!clearFiltersButton.hasClass('is-visible')) {
          clearFiltersButton.addClass('is-visible');
        }
      }
      if (typeof callback === 'function') {
        callback();
      }
    };

    // results containers

    var loadingResultsDiv = $('#knowledge-loading-results'),
        hasResultsDiv = $('#knowledge-has-results'),
        hasNoResultsDiv = $('#knowledge-has-no-results'),
        resultsDiv = $('#knowledge-results'),
        resultCount = $('.js-result-count');

    /**
     * Declare Functions
     */

    // fetch resources

    var fetchIndustries = function () {
      var data = require('./../data/industries');
      return data.industries;
    };

    var fetchContentTypes = function () {
      var data = require('./../data/content-types');
      return data.contentTypes;
    };

    var fetchResults = function () {
      var data = require('./../data/results');
      return data.results;
    };

    /**
     * Sort by newest
     *
     * @param {array} items
     * @return {array}
     */
    var sortByNewest = function (items) {
      return items.sort(function (a, b) {
        a = new Date(a.date);
        b = new Date(b.date);
        return a > b ? -1 : a < b ? 1 : 0;
      });
    };

    /**
     * Sort by oldest
     *
     * @param {array} items
     * @return {array}
     */
    var sortByOldest = function (items) {
      return items.sort(function (a, b) {
        a = new Date(a.date);
        b = new Date(b.date);
        return a > b ? 1 : a < b ? -1 : 0;
      });
    };

    /**
     * Check that there are results
     *
     * @param {array} items
     * @return {boolean}
     */
    var hasResults = function (items) {
      if (items.length === 0) {
        hasResultsDiv.hide().addClass('is-empty');
        hasNoResultsDiv.fadeIn(400);
        return false;
      } else if (hasResultsDiv.hasClass('is-empty')) {
        hasNoResultsDiv.hide();
        hasResultsDiv.removeClass('is-empty').fadeIn(400);
      }
      return true;
    };

    /**
     * Show results
     *
     * @param {$(selector)} containers
     */
    var showResults = function (containers) {
      containers.css({opacity: 0}).animate({opacity: 1}, 400, function () {
        $(document).trigger('dynamicContent.reloaded');
      });
    };

    /**
     * Populate results
     *
     * @param {array} items
     * @param {int} take
     */
    var populateResults = function (items, take, callback) {
      state.loadMoreIndex = 0;
      resultCount.text(items.length);
      if (!hasResults(items)) {
        return;
      }
      if (take === undefined || take === null) {
        take = 16;
      }
      items = _.take(items, take);
      var id = randomId();
      resultsDiv.html(resultsTemplate({items: items, id: id}));
      showResults($('[data-group="' + id + '"]', '#knowledge-results'));
      updateState('loadMoreIndex', take);
      if (typeof callback === 'function') {
        callback();
      }
    };

    /**
     * Append results
     *
     * @param {array} items
     * @param {int} append
     */
    var appendResults = function (items, append) {
      if (!hasResults(items)) {
        return;
      }
      if (append === undefined) {
        append = 16;
      }
      items = _.slice(items, state.loadMoreIndex, state.loadMoreIndex + append);
      var id = randomId();
      resultsDiv.append(resultsTemplate({items: items, id: id}));
      showResults($('[data-group="' + id + '"]', '#knowledge-results'));
      state.loadMoreIndex = state.loadMoreIndex + append;
      if (state.loadMoreIndex >= filteredResultSet.length) {
        loadMoreButton.attr('disabled', true).css({opacity: '.4'});
      }
    };

    // apply filters

    var applyFilters = function () {
      filteredResultSet = _.cloneDeep(rawResultSet);
      if (state.filters.industry !== null) {
        filteredResultSet = _.filter(filteredResultSet, function (item) {
          return _.includes(item.industries, state.filters.industry);
        });
      }
      if (state.filters.contentType !== null) {
        filteredResultSet = _.filter(filteredResultSet, function (item) {
          return item.contentType === state.filters.contentType;
        });
      }
      if (state.filters.keywords !== null) {
        filteredResultSet = _.filter(filteredResultSet, function (item) {
          var keywords = state.filters.keywords.toLowerCase().replace(/[.,']/g, ''),
              industries = _.map(item.industries, function (item) {
                return item.toLowerCase().replace(/[.,']/g, '');
              });
          return (_.includes(item.title.toLowerCase().replace(/[.,']/g, ''), keywords) ||
                  _.includes(item.contentType.toLowerCase().replace(/[.,']/g, ''), keywords) ||
                  _.includes(industries, keywords));
        });
      }
      if (state.filters.date === 'Newest') {
        filteredResultSet = sortByNewest(filteredResultSet);
      } else if (state.filters.date !== null) {
        filteredResultSet = sortByOldest(filteredResultSet);
      }
      populateResults(filteredResultSet);
      if (state.loadMoreIndex >= filteredResultSet.length) {
        loadMoreButton.attr('disabled', true).css({opacity: '.4'});
      } else if (loadMoreButton.attr('disabled')) {
        loadMoreButton.removeAttr('disabled').css({opacity: '1'});
      }
    };

    /**
     * Apply search filter
     *
     * @param {string} keywords
     */
    var searchKeywords = function (keywords) {
      state.filters.keywords = keywords;
      applyFilters();
    };

    // register handlebars helpers

    Handlebars.registerHelper('commaSeparated', function (array) {
      return array.join(', ');
    });

    /**
     * Declare variables
     */

    // data

    var contentTypes = fetchContentTypes(),
        industries = fetchIndustries(),
        rawResultSet = fetchResults(),
        filteredResultSet,

    // handlebars

        resultsTemplate = Handlebars.compile($('#knowledge-results-template').html()),

    // search bar

        searchForm = $('#knowledge-search'),
        keywordsInput = searchForm.find('#knowledge-keywords'),
        submitButton = searchForm.find('#knowledge-submit'),
        clearKeywordsButton = searchForm.find('#knowledge-clear-keywords'),

    // filter bar

        // filterBar = $('#knowledge-filter-bar'),
        filterList = filterBar.find('.filter-options'),
        industryFilterList = filterBar.find('.filter-options[data-filter="industry"]'),
        contentTypeFilterList = filterBar.find('.filter-options[data-filter="contentType"]'),
        filterLink = filterBar.find('.js-apply-filter'),
        filterLinkDefault = filterBar.find('.js-clear-filter'),
        // clearFiltersButton = filterBar.find('#knowledge-clear-filters'),

    // other controls

        loadMoreButton = $('#knowledge-load-more');

    /**
     * Initialize elements
     */

    // populate industries filter

    _(industries).forEach(function (industry) {
      industryFilterList.append('<li><a href="#" class="js-apply-filter">' + industry  + '</a></li>');
    }).value();

    // populate content type filter

    _(contentTypes).forEach(function (contentType) {
      contentTypeFilterList.append('<li><a href="#" class="js-apply-filter">' + contentType  + '</a></li>');
    }).value();

    // load initial data

    filteredResultSet = _.cloneDeep(rawResultSet);
    populateResults(filteredResultSet, null, function () {
      loadingResultsDiv.hide();
      hasResultsDiv.fadeIn(400);
    });

    // attach load more event handler

    loadMoreButton.css({opacity: 1}).click(function () {
      appendResults(filteredResultSet);
    });

    // attach search keywords input event handler

    keywordsInput.keyup(function (e) {
      var keywords = $(this).val();
      if (keywords && e.which === 13) { // space bar
        searchKeywords(keywords);
        return;
      }
      if (!keywords) {
        state.filters.keywords = null;
        applyFilters();
        searchForm.removeClass('has-text');
      } else if (!searchForm.hasClass('has-text')) {
        searchForm.addClass('has-text');
      }
    });

    // attach search submit button event handler

    submitButton.click(function () {
      var keywords = keywordsInput.val();
      if (keywords) {
        searchKeywords(keywords);
      }
    });

    // attach clear keywords event handler

    clearKeywordsButton.click(function () {
      keywordsInput.val('');
      searchForm.removeClass('has-text');
      state.filters.keywords = null;
      applyFilters();
      if ($(window).width() > screenMdMax) {
        keywordsInput.focus();
      }
    });

    // attach filter link event handler

    $(document).on('click', '.js-apply-filter', function () {
      var list = $(this).parents('.filter-options'),
          desc = list.parent().find('.js-current-filter'),
          filter = list.data('filter'),
          value = $(this).text();
      list.find('.is-active').removeClass('is-active');
      if (value.length > 20) {
        desc.text(value.substring(0, 19) + '...');
      } else {
        desc.text(value);
      }
      $(this).parent().addClass('is-active');
      updateFilterState(filter, value, applyFilters);
    });

    // attach clear filters event handlers

    clearFiltersButton.click(function () {
      filterList.each(function () {
        var currentFilter = $(this).parent().find('.js-current-filter');
        currentFilter.text(currentFilter.data('default-text'));
        $(this).find('.is-active').removeClass('is-active');
      });
      updateFilterState('industry', null);
      updateFilterState('contentType', null);
      updateFilterState('date', null);
      applyFilters();
    });

    filterLinkDefault.click(function () {
      var list = $(this).parent().parent(),
          currentFilter = list.parent().find('.js-current-filter');
      if (state.filters[list.data('filter')] !== undefined) {
        currentFilter.text(currentFilter.data('default-text'));
        list.find('.is-active').removeClass('is-active');
        updateFilterState(list.data('filter'), null);
        applyFilters();
      }
    });

  }

});

},{"./../data/content-types":2,"./../data/industries":4,"./../data/results":5}],17:[function(require,module,exports){
//
// List.js
//

jQuery(document).ready(function ($) {

  var listModule = $('.list');

  listModule.each(function () {
    var parentClass = $(this).parent().attr('class');
    if (parentClass !== undefined && parentClass.length > 0) {
      if (parentClass.indexOf('-4') !== -1) { // one-third column
        return $(this).addClass('list--oneThird feed--oneThird');
      } else if (parentClass.indexOf('-6') !== -1) { // one-half column
        return $(this).addClass('list--oneHalf feed--oneHalf');
      } else if (parentClass.indexOf('-8') !== -1) { // two-third column
        return $(this).addClass('list--twoThirds feed--twoThirds');
      }
    }
    $(this).addClass('list--fullWidth feed--fullWidth');
  });

});
},{}],18:[function(require,module,exports){
//
// Locations.js
//

jQuery(document).ready(function ($) {

  var accordion = $('.locations .panel-group'),
      scrollBody = $('html, body'),
      firstEvent = true; // only trigger modifyActiveStates once, even when events are fired twice

  var showPanel = function (e, scroll) {
    var panel = $(e.target);
    panel.parent().parent().find('.is-active').removeClass('is-active');
    panel.parent().addClass('is-active');
    panel.parent().find('.fa-plus').removeClass('fa-plus').addClass('fa-minus');
    if (scroll) {
      setTimeout(function () {
        scrollBody.animate({scrollTop: panel.parent().offset().top - 12.5}, 500);
      }, 500);
    }
  };

  var hidePanel = function (e) {
    var panel = $(e.target);
    panel.parent().removeClass('is-active');
    panel.parent().find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
  };

  accordion.on('show.bs.collapse', function (e) {
    showPanel(e, $(window).width() <= screenXsMax);
  });

  accordion.on('hide.bs.collapse', hidePanel);

});
},{}],19:[function(require,module,exports){
//
// Login.js
//

jQuery(document).ready(function ($) {

  var body = $('body'),
      login = $('#login'),
      loginTrigger = $('#login-trigger'),
      loginEmailInput = $('#login-email-input'),
      loginSubmit = $('#login-submit');

  loginTrigger.click(function () {
    if (!login.hasClass('is-open')) {
      openLogin();
    } else {
      closeLogin();
    }
  });

  loginSubmit.click(function (e) {
    e.preventDefault();
    var loginErrors = $(this).parent().parent().prev();
    if (!loginEmailInput.val()) {
      loginErrors.text('Please enter an email address.').slideDown(300);
      loginEmailInput.focus();
    } else if (!validEmail(loginEmailInput.val())) {
      loginErrors.text('Please enter a valid email address.').slideDown(300);
      loginEmailInput.focus();
    } else {
      loginErrors.slideUp(300);
    }
  });

  function openLogin(callback) {
    login.show().addClass('is-open');
    loginEmailInput.focus();
    body.on('click', closeLoginOnClick);
  }

  function closeLogin() {
    login.hide().removeClass('is-open');
    body.off('click', closeLoginOnClick);
  }

  var closeLoginOnClick = function (e) {
    if ((e.target.id !== 'login-trigger' && $(e.target).parent().attr('id') !== 'login-trigger') &&
        e.target.id !== 'login' &&
        $(e.target).parents('#login').size() === 0) {
      closeLogin();
    }
  };

  // mobile login

  var mobileLoginToggle = $('#mobile-login-toggle'),
      mobileLoginToggleIcon = mobileLoginToggle.find('.fa'),
      mobileLogin = $('#mobile-login'),
      mobileLoginEmailInput = $('#mobile-login-email-input'),
      mobileLoginSubmit = $('#mobile-login-submit');

  mobileLoginToggle.click(function () {
    if (!mobileLogin.hasClass('is-open')) {
      mobileLoginToggleIcon.removeClass('fa-angle-down').addClass('fa-angle-up');
      mobileLogin.slideDown(340).addClass('is-open');
    } else {
      mobileLoginToggleIcon.removeClass('fa-angle-up').addClass('fa-angle-down');
      mobileLogin.slideUp(340).removeClass('is-open');
    }
  });

  mobileLoginSubmit.click(function (e) {
    e.preventDefault();
    var mobileLoginErrors = $(this).prev().prev();
    if (!mobileLoginEmailInput.val()) {
      mobileLoginErrors.text('Please enter an email address.').slideDown(300);
      mobileLoginEmailInput.focus();
    } else if (!validEmail(mobileLoginEmailInput.val())) {
      mobileLoginErrors.text('Please enter a valid email address.').slideDown(300);
      mobileLoginEmailInput.focus();
    } else {
      mobileLoginErrors.slideUp(300);
    }
  });

});
},{}],20:[function(require,module,exports){
//
// Logos.js
//

jQuery(document).ready(function () {

  var logosCenterEl = $('.js-logos-center');

  var centerLogosEls = function () {
    logosCenterEl.each(function () {
      var leftColHeight = $(this).parent().prev().height();
      if ($(window).width() > screenSmMax) {
        $(this).css({ 'transform': 'translateY(' + (leftColHeight - $(this).outerHeight()) / 2 + 'px)' });
      }
    });
  }

  if (logosCenterEl.length > 0) {
    $(window).load(centerLogosEls).resize(_.debounce(centerLogosEls, 150));
  }

});
},{}],21:[function(require,module,exports){
//
// Nav.js
//

jQuery(document).ready(function ($) {

  // mobile nav

  var mobileMenuToggle = $('#mobile-menu-toggle'),
      mobileMenuToggleIcon = mobileMenuToggle.find('.fa'),
      mobileSearchToggle = $('#mobile-search-toggle'),
      mobileSearchToggleIcon = mobileSearchToggle.find('.fa'),
      nav = $('#nav'),
      mobileSearch = $('#mobile-search'),
      mobileSearchToggleIcon = $('#mobile-search-toggle .fa');

  mobileMenuToggle.click(function () {
    if (!nav.hasClass('is-open')) {
      if (mobileSearch.hasClass('is-open')) {
        mobileSearch.hide().removeClass('.is-open');
        mobileSearchToggleIcon.removeClass('fa-times').addClass('fa-search');
      }
      mobileMenuToggleIcon.removeClass('fa-bars').addClass('fa-times');
      nav.slideDown(340).addClass('is-open');
    } else {
      mobileMenuToggleIcon.removeClass('fa-times').addClass('fa-bars');
      nav.slideUp(340).removeClass('is-open');
    }
  });

  // mobile more

  var mobileMoreToggle = $('#mobile-more-toggle'),
      mobileMoreToggleIcon = mobileMoreToggle.find('.fa'),
      mobileMore = $('#mobile-more');

  mobileMoreToggle.click(function () {
    if (!mobileMore.hasClass('is-open')) {
      mobileMoreToggleIcon.removeClass('fa-angle-down').addClass('fa-angle-up');
      mobileMore.slideDown(340).addClass('is-open');
    } else {
      mobileMoreToggleIcon.removeClass('fa-angle-up').addClass('fa-angle-down');
      mobileMore.slideUp(340).removeClass('is-open');
    }
  });

  // mobile language

  var mobileLanguageToggle = $('#mobile-language-toggle'),
      mobileLanguageToggleIcon = mobileLanguageToggle.find('.fa'),
      mobileLanguage = $('#mobile-language');

  mobileLanguageToggle.click(function () {
    if (!mobileLanguage.hasClass('is-open')) {
      mobileLanguageToggleIcon.removeClass('fa-angle-down').addClass('fa-angle-up');
      mobileLanguage.slideDown(340).addClass('is-open');
    } else {
      mobileLanguageToggleIcon.removeClass('fa-angle-up').addClass('fa-angle-down');
      mobileLanguage.slideUp(340).removeClass('is-open');
    }
  });

});
},{}],22:[function(require,module,exports){
//
// News.js
//

jQuery(document).ready(function ($) {

  var newsModule = $('.news');

  newsModule.each(function () {
    var parentClass = $(this).parent().attr('class');
    if (parentClass !== undefined && parentClass.length > 0) {
      if (parentClass.indexOf('-4') !== -1) { // one-third column
        return $(this).addClass('news--oneThird feed--oneThird');
      } else if (parentClass.indexOf('-6') !== -1) { // one-half column
        return $(this).addClass('news--oneHalf feed--oneHalf');
      } else if (parentClass.indexOf('-8') !== -1) { // two-third column
        return $(this).addClass('news--twoThirds feed--twoThirds');
      }
    }
    $(this).addClass('news--fullWidth feed--fullWidth');
  });

});
},{}],23:[function(require,module,exports){
//
// Search.js
//

jQuery(document).ready(function ($) {

  var body = $('body'),
      openSearchTrigger = $('.js-open-search'),
      closeSearchTrigger = $('.js-close-search'),
      search = $('#search'),
      searchInput = $('#search-input');

  openSearchTrigger.click(openSearch);
  closeSearchTrigger.click(closeSearch);

  function openSearch() {
    search.fadeIn(240).addClass('is-open');
    searchInput.focus();
    body.on('click', closeSearchOnClick);
  }

  function closeSearch() {
    search.removeClass('is-open').fadeOut(500);
    body.off('click', closeSearchOnClick);
  }

  var closeSearchOnClick = function (e) {
    if (e.target.id !== 'search-body' && !($(e.target).hasClass('js-open-search') || $(e.target).parents('.js-open-search').size() > 0) && $(e.target).parents('#search-body').size() === 0) {
      closeSearch();
    }
  };

  // mobile search

  var mobileSearchToggle = $('#mobile-search-toggle'),
      mobileSearchToggleIcon = mobileSearchToggle.find('.fa'),
      mobileSearch = $('#mobile-search'),
      mobileSearchInput = $('#mobile-search-input'),
      nav = $('#nav'),
      mobileMenuToggleIcon = $('#mobile-menu-toggle .fa');

  mobileSearchToggle.click(function () {
    if (!mobileSearch.hasClass('is-open')) {
      if (nav.hasClass('is-open')) {
        nav.hide().removeClass('.is-open');
        mobileMenuToggleIcon.removeClass('fa-times').addClass('fa-bars');
      }
      mobileSearchInput.focus();
      mobileSearchToggleIcon.removeClass('fa-search').addClass('fa-times');
      mobileSearch.slideDown(240).addClass('is-open');
    } else {
      mobileSearchToggleIcon.removeClass('fa-times').addClass('fa-search');
      mobileSearch.slideUp(240).removeClass('is-open');
    }
  });

});
},{}],24:[function(require,module,exports){
//
// Sectors.js
//

jQuery(document).ready(function ($) {

  // match sector heights

  var sectors = $('.sectors');

  if (sectors.length > 0) {

    var matchHeights = function () {
      sectors.each(function () {
        var titleHeight = 0,
            textHeight = 0,
            sector = $(this).find('.sector');
        sector.each(function () {
          var title = $(this).find('.sector-title'),
              text = $(this).find('.sector-text');
          if (title.length > 0 && title.height() > titleHeight) {
            titleHeight = title.height();
          }
          if (text.length > 0 && text.height() > textHeight) {
            textHeight = text.height();
          }
        }).each(function () {
          var title = $(this).find('.sector-title'),
              text = $(this).find('.sector-text');
          if (title.length > 0) {
            if (title.height() < titleHeight) {
              title.css({'padding-bottom': titleHeight - title.height()});
            } else {
              title.css({'padding-bottom': 0});
            }
          }
          if (text.length > 0) {
            if (text.height() < textHeight) {
              text.css({'padding-bottom': textHeight - text.height()});
            } else {
              text.css({'padding-bottom': 0});
            }
          }
        });
      });
    };

    $(window).load(matchHeights).resize(_.debounce(matchHeights, 150));
  }

});
},{}],25:[function(require,module,exports){
//
// Solutions.js
//

jQuery(document).ready(function ($) {

  if ($('.js-solutions').length > 0) {

    var list = $('.js-solutions-list');

    var sizeLists = function () {
      var isXsScreen = ($(window).width() <= screenXsMax);
      list.css({'padding-bottom': 0}).each(function () {
        if (!isXsScreen) {
          var sizeDifference = $(this).parent().prev().height() - $(this).height();
          if (sizeDifference > 0) {
            $(this).css({'padding-bottom': sizeDifference + 'px'});
          } else {
            $(this).css({'padding-bottom': 0});
          }
        } else {
          $(this).css({'padding-bottom': 0});
        }
      });
    };

    $(window).on('load', sizeLists).resize(_.debounce(sizeLists, 150));

  }
  
});
},{}],26:[function(require,module,exports){
//
// Squares.js
//

jQuery(document).ready(function ($) {

  // tag square modules with only three items

  var squaresModules = $('.squares');

  if (squaresModules.length > 0) {

    squaresModules.each(function () {
      var squares = $(this).find('.square');
      if (squares !== undefined) {
        var firstSquareColumn = $(this).find('.square').first().parent();
        $(this).attr('data-count', squares.length);
        switch (squares.length) {
          case 1:
            firstSquareColumn.addClass('col-sm-offset-9-24');
            break;
          case 2:
            firstSquareColumn.addClass('col-sm-offset-6-24');
            break;
          case 3:
            firstSquareColumn.addClass('col-sm-offset-3-24');
            break;
        }
      }
    });

    // assign active class to tabs

    var square = $('.square');

    square.click(function () {
      var activeSquare = $(this).parent().parent().find('.is-active');
      if (activeSquare.length > 0) {
        activeSquare.removeClass('is-active');
      }
      $(this).addClass('is-active');
    });

    var squareDropdownTab = $('.squares-dropdown > li > a');

    squareDropdownTab.click(function () {
      var dropdownText = $(this).parent().parent().parent().find('.squares-mobile-text'),
          activeItem = $(this).parent().parent().find('.active');
      if (activeItem.length > 0) {
        activeItem.removeClass('active');
      }
      dropdownText.text($(this).text());
      $(this).tab('show');
    });

  }
  
});
},{}],27:[function(require,module,exports){
//
// Sticky-footer.js
//

jQuery(document).ready(function ($) {

  /**
   * Size sticky footer
   *
   * @return function (bool?)
   */
  var sizeStickyFooter = (function () {

    var pageWrap = $('.js-page-wrap'),
        footerSpacer = $('.js-footer-spacer'),
        footer = $('.js-footer'),
        animationSpeed = 400;

    return function (animate) {
      var footerHeight = footer.css({height: 'auto'}).outerHeight();
      if (typeof animate !== undefined && animate === false) {
        pageWrap.css({'margin-bottom': -footerHeight + 'px'});
        footerSpacer.css({height: footerHeight + 'px'});
        footer.css({height: footerHeight + 'px'});
      } else {
        pageWrap.animate({'margin-bottom': -footerHeight + 'px'}, animationSpeed);
        footerSpacer.animate({height: footerHeight + 'px'}, animationSpeed);
        footer.animate({height: footerHeight + 'px'}, animationSpeed);
      }
    };

  }());

  // initialize sticky footer, don't animate

  sizeStickyFooter(false);

  // reinitialize on window load and resize, to account for footer height changes

  $(window).load(function () {
    sizeStickyFooter(false);
  }).resize(_.debounce(sizeStickyFooter, 150));

});
},{}],28:[function(require,module,exports){
//
// Subscribe.js
//

jQuery(document).ready(function ($) {

  var subscribeEmailInput = $('#subscribe-email-input'),
      subscribeSubmit = $('#subscribe-submit');

  subscribeSubmit.click(function (e) {
    e.preventDefault();
    var subscribeErrors = $(this).parent().parent().prev();
    if (!subscribeEmailInput.val()) {
      subscribeErrors.text('Please enter an email address.').slideDown(300);
      subscribeEmailInput.focus();
    } else if (!validEmail(subscribeEmailInput.val())) {
      subscribeErrors.text('Please enter a valid email address.').slideDown(300);
      subscribeEmailInput.focus();
    } else {
      subscribeErrors.slideUp(300);
    }
  });

});
},{}],29:[function(require,module,exports){
//
// Validation.js
//

/**
 * Is string a valid email address
 *
 * @param string email
 * @return boolean
 */
validEmail = function (email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

/**
 * Is string a valid phone number
 *
 * @param string phone
 * @return boolean
 */
validPhone = function (phone) {
  if (!phone) return false;
  var count = phone.replace(/[^0-9]/g, "").length;
  return count == 10 || count == 11;
}

/**   
 * Is string a valid zip code   
 *    
 * @param string zip    
 * @return boolean    
 */   
validZip = function (zip) {
  return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);   
}
},{}],30:[function(require,module,exports){
//
// Video.js
//

// load the YouTube iFrame API asynchronously

var videoScriptTag = document.createElement('script'),
    firstScriptTag = document.getElementsByTagName('script')[0];

videoScriptTag.src = 'https://www.youtube.com/iframe_api';
firstScriptTag.parentNode.insertBefore(videoScriptTag, firstScriptTag);

// attach click events based on device type

var isTouchDevice = 'ontouchstart' in window || 'onmsgesturechange' in window;

if (!isTouchDevice) {

  var attachClickEvent = function (element, eventFunc) {
    element.on('click', eventFunc);
  };

  var removeClickEvent = function (element, eventFunc) {
    element.off('click', eventFunc);
  };

} else {

  var attachClickEvent = function (element, eventFunc) {
    element.on('touchstart', eventFunc);
  };

  var removeClickEvent = function (element, eventFunc) {
    element.off('touchstart', eventFunc);
  };

}

// when the dom is ready

jQuery(document).ready(function ($) {

  var closeTrigger = $('.js-close-video'),
      openTrigger = $('.js-open-video'),
      videoDiv = $('#video'),
      videoPlayerDiv = $('#video-player'),
      transitionSpeed = 400;

  // define video functions

  var video = {

    id: null,
    type: null,
    player: null,

    open: function (e) {
      if ($(e.target).hasClass('js-open-video')) {
        var trigger = $(e.target);
      } else if ($(e.currentTarget).hasClass('js-open-video')) {
        var trigger = $(e.currentTarget);
      } else {
        console.log('video.open(): could not find proper target for .js-open-video');
        return;
      }
      if (trigger.data('youtube-id') !== undefined) { // it's a youtube video
        if (video.type !== 'youtube') { // youtube player has not been initialized
          video.type = 'youtube';
          video.id = trigger.data('youtube-id');
          video.youtube.load();
        } else { // youtube player has been initialized
          if (video.id !== trigger.data('youtube-id')) { // video has not been loaded
            video.player.loadVideoById(video.id);
          }
          video.youtube.start();
        }
      } else {
        video.type = 'brightcove';
        video.id = trigger.data('brightcove-id');
        video.brightcove.load();
      }
      videoDiv.fadeIn(transitionSpeed).addClass('is-open');
    },

    close: function (e) {
      videoDiv.removeClass('is-open').fadeOut(transitionSpeed);
      video[video.type].stop();
    },

    youtube: {

      load: function () {
        video.player = new YT.Player('video-player', {
          height: '100%',
          width: '100%',
          videoId: video.id,
          playerVars: { 'frameborder': 0 },
          events: {
            'onReady': video.youtube.onReady,
            'onStateChange': video.youtube.onStateChange
          }
        });
      },

      start: function () {
        video.player.playVideo();
      },

      stop: function () {
        video.player.stopVideo();
      },

      onReady: function(e) {
        video.youtube.start();
      },

      onStateChange: function(e) {
        switch (event.data) {
          case -1: // unstarted
            break;
          case 0: // ended
            video.close();
            video.player.destroy();
            video.player = null;
            break;
          case 1: // playing
            break;
          case 2: // paused
            break;
          case 3: // buffering
            break;
          case 5: //video cued
            break;
        }
      }

    },

    brightcove: {

      accountId: '1709815555001',
      playerId: '3565671746001',

      load: function () {
        
      },

      start: function () {

      },

      stop: function () {

      },

      onReady: function () {

      },

      onStateChange: function () {

      }

    }

  };

  // attach click/touch event handlers

  attachClickEvent(closeTrigger, video.close);
  attachClickEvent(openTrigger, video.open);

});
},{}]},{},[1]);
