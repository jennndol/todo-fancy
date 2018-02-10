const User = require('../models/User');

let luthfi = new User({
    firstName: 'Luthfi',
    lastName: 'Doank',
    email: 'vlootfie@gmail.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor consectetur hendrerit. Morbi mattis nisl purus, eu accumsan nunc faucibus sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut urna quis tortor fringilla efficitur at auctor lorem. Fusce elementum molestie odio id luctus. Vestibulum diam mi, lobortis vitae lorem in, aliquet posuere est. Integer consectetur dolor sed varius sodales. Nunc vel imperdiet enim. Pellentesque feugiat at ex eget consequat. Maecenas maximus, lorem ac vulputate tempor, orci neque bibendum justo, ut bibendum nunc eros id leo.'
});

luthfi.save()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });