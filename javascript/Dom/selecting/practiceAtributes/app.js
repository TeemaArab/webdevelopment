// Manipulating Attributes Practice
// Let's get some practice working with DOM element attributes. I've provided you with some very basic markup.  Please select the image element and:

// change its source to this url:
// https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200

// change its alt text to be "chicken"

const image = document.querySelector('img')
image.setAttribute('src','https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200')
image.setAttribute('alt','chicken')