# GoFetch
Website created for software development program assignment.

Assignment Instructions:<br />
Objective:

Fetching and processing data by making API calls is an all-important skill that web developers need to have expertise of. The main objective of this assignment is to practice and learn the important concept of XMLHttpRequest and Fetch API to make http requests and process the received data. This assignment also tests understanding of DOM programming along with some of the basic JavaScript skills. Also use your muscles of HTML and CSS along with Bootstrap to show case your expertise there.

Requirements:<br />

The Dog API (https://dog.ceo/dog-api/documentation/) is a free web service that uses data from the Stanford Dogs Dataset (http://vision.stanford.edu/aditya86/ImageNetDogs/). This dataset contains images and information about 120 breeds of dogs and is used for machine learning and artificial intelligence training.

There are a few endpoints you can use with this API, but here you need to focus on these: (https://dog.ceo/api/breeds/list/all) - get a JSON formatted list of all breeds and sub-breeds (https://dog.ceo/api/breed/hound/images/random/3) - get a JSON formatted list of image URLs for hounds, returning 3 (we can ask for more or less) In other words the URL works like this: (https://dog.ceo/api/breed/{name-of-breed}/random/{number-of-images-to-return})
<br />
So specifically, you need to do the following tasks:

1. Create a “validated” and semantically correct web page with an HTML <form>.

2. Create you own CSS, or if preferred use “Bootstrap” to style your page. The webpage should be all responsive by use of Grid or Flex model (whatever you select)

3. Use AJAX techniques to dynamically load all dog breeds into a <select> in the form. Again, its your choice to use either XMLHttpRequest or Fetch API.

4. Users can specify how many images they want to load: 1 to 100.

5. When the user selects a breed we’ll request the JSON list of images

6. Once we get the list of image URLs, we’ll start creating <img> elements in our page to show those dogs
