import cloudinary from '~/plugins/cloudinary';

export default ogpText => {
  const encodeText = encodeURI(ogpText);

  return cloudinary.url('ogp_ut3n8b.png', {
    version: '1598892930',
    transformation: [
      {
        overlay: {
          font_family: 'notosansjp-bold.otf',
          font_size: 40,
          text_align: 'center',
          text: encodeText,
        },
        width: '600',
        color: '#333',
        crop: 'fit',
      },
    ],
  });
};
