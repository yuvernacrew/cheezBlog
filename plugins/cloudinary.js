import cloudinary from 'cloudinary-core';

export default new cloudinary.Cloudinary({
  cloud_name: 'cheezblog',
  secure: true,
});
