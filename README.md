# willTunes

With `willTunes`, you can search for an artist at the [main page](will-tunes.now.sh), and once you've found the artist that you've been looking for, you can go the artist page by clicking on it. You can also play/pause the preview of a track, besides go to the featured artist page.

## Requirements
- Yarn (or NPM)

## Installation

Clone this repo, install the dependencies and start the app.

> git clone https://github.com/williamrozin/will-tunes.git

> yarn && yarn start

To run the tests:

> yarn test

## Features

- Search for an artist
- List the albums of the artist, including: Album name and its image
- List the tracks of the albums, including: Track name, duration, album image and artist
- Play/Pause the track*
- List featured artists

*To play a track preview, it is required to have the proper MP4 audio codec on your OS

## Technical features

- Responsive design
- Production deploy (with [Zeit Now](https://zeit.co/))
- Tests (with jest + react-testing-library + redux-saga-testing)
- SCSS & Styled-components design: No UI framework (such as material-ui) have been used
- Developed with TypeScript
- Debounce on search
- Usage of `useMemo` and `useCallback` to prevent unecessary re-renders
- Usage of nullish coalesce operator
- "Mobile first" mindset
- All hooks: No classes have been used
- Redux-Saga middleware
- All typed redux store
- ESLint


## Fake data used

Since the API doesn't provide all necessary information, some fake data have been used in order to fill these spaces:

- Artist image: Instead of the original artist image, the app gets a random image from [Picsum](https://picsum.photos/)
- Artist bio: Some random quotes from [Kanye West](https://api.kanye.rest/)
- Artist origin: A random country
- Artist born date: A random date
- Editors' notes for the albums: Some random quotes from [Kanye West](https://api.kanye.rest/)
- Featured Artists: Random artists from the iTunes API

These fake data does not have any relation with the real artist or album.

## Known behaviors

- The user can play more than one track at the same time
- At mobile devices, the arrow at the links may be rendered as an emoji

## Screenshots

![](https://i.imgur.com/guYAcff.png)

---

![](https://i.imgur.com/5J9WJ7Q.png)

---

![](https://i.imgur.com/qCCMC95.png)

---

![](https://i.imgur.com/5GyqZZQ.png)

---

![](https://i.imgur.com/HeJz8pf.png)

---

![](https://i.imgur.com/EBe4R7W.png)


## License

[Apache 2.0](https://github.com/williamrozin/will-tunes/blob/master/LICENSE)

Made with :heart: by William Rozin Gaspar