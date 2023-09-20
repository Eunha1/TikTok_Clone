const routes = {
   home: '/',
   following: '/following',
   profile: '/:nickname',
   profileLink: (nickname) => `/@${nickname}`,
   upload: '/upload',
   live: '/live',
   download: '/download',
   explore: '/explore',
   comment: '/:nickname/video/:videoid',
   commentLink: (content) => `/@${content.user.nickname}/video/${content.uuid}`,
   login: '/login',
   signup: '/signup',
};

export default routes;
