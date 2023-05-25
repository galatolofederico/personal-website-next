# galatolo.me ✨

Repository for my personal website [galatolo.me](https://galatolo.me)

Built with:
* [Next.js 12](https://nextjs.org/)
* [Mantine 4](https://mantine.dev/)

## Run it locally ⚙️

Clone this repository

```
git clone https://github.com/galatolofederico/personal-website-next.git && cd personal-website-next
```

### Without docker 🖥️

Install the dependencies 

```
npm install
```

Serve it!

```
npm run dev
```

The website should be live at `http://localhost:3000`

### With docker 🐳

Build the container

```
docker build . -t personal-webiste
```

Run it

```
docker run -p "8080:80" personal-website
```

The website should be live at `http://localhost:8080`

### Run storybook for development 📚

```
npm run storybook
```