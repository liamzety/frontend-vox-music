export const storageService = {
  save,
  load,
};
const fallbackQuery = {
  items: [
    {
      kind: 'youtube#searchResult',
      etag: 'Lr6KwNQ1Y5mF1Jw0OdGJRyaPWbk',
      id: {
        kind: 'youtube#video',
        videoId: '1xM7OpXM3h0',
      },
      snippet: {
        publishedAt: '2017-12-10T16:15:06Z',
        channelId: 'UCDlMf3zbdoWYzTwQsaD0fRA',
        title: 'FATHER SON PLAY TIME! / Dog At The Skatepark!',
        description:
          "ADIML 59 Bonus clips! This was one of my favorite ADIML's in a long time. Skating and everything with Ryden's belt test, it ruled! I hope you guys enjoyed it !",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/1xM7OpXM3h0/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/1xM7OpXM3h0/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/1xM7OpXM3h0/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'AndrewSchrock',
        liveBroadcastContent: 'none',
        publishTime: '2017-12-10T16:15:06Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'u3bPXPz9I8RQlLq8mQiKnOGlLvM',
      id: {
        kind: 'youtube#video',
        videoId: 'EVnzXA9b7Ww',
      },
      snippet: {
        publishedAt: '2015-11-12T10:27:34Z',
        channelId: 'UCeSRjhfeeqIgr--AcP9qhyg',
        title: 'Otto the skateboarding bulldog - Guinness World Records',
        description:
          '---------------------------------------------------------------------------------------------- At Guinness World Records we want to show that everyone in the world is the best at ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/EVnzXA9b7Ww/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/EVnzXA9b7Ww/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/EVnzXA9b7Ww/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Guinness World Records',
        liveBroadcastContent: 'none',
        publishTime: '2015-11-12T10:27:34Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'k1gKVbQn8wwzVLpxcb3gSuo8NQs',
      id: {
        kind: 'youtube#video',
        videoId: 'R8XAlSp838Y',
      },
      snippet: {
        publishedAt: '2009-06-13T05:36:14Z',
        channelId: 'UCvtfT-xYX4Q-jC2Mbsk3OUA',
        title: 'Skateboarding Dog - HD Redux',
        description:
          '10/27/15 Farewell Tillman RIP ** One year old Tillman the skateboarding bulldog from the iphone commercial. All clips are from January 2007 re-edited ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/R8XAlSp838Y/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/R8XAlSp838Y/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/R8XAlSp838Y/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'RNickeyMouse',
        liveBroadcastContent: 'none',
        publishTime: '2009-06-13T05:36:14Z',
      },
    },
  ],
};
function save(key: string, value?: any) {
  if (key === 'fallbackQuery') {
    value = fallbackQuery;
  }
  localStorage.setItem(key, JSON.stringify(value));
}
function load(key: string) {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
}
