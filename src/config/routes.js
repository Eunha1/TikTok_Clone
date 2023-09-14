const routes = {
   home: '/',
   following: '/following',
   profile: '/:nickname',
   profileLink: (nickname) => `/@${nickname}`,
   upload: '/upload',
   live: '/live',
   download: '/download',
   explore: '/explore',
   comment: '/comment',
};

export default routes;
