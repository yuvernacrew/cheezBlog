import cloudinary from 'cloudinary-core';

const cl = new cloudinary.Cloudinary({
  cloud_name: 'cheezblog',
  secure: true,
});

export default cl;
