document.querySelector('button').addEventListener('click', getQuote);

function getQuote() {
  const url = 'https://type.fit/api/quotes';

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const randomQuote = Math.floor(Math.random() * data.length);
      document.getElementById('quote').innerText = data[randomQuote].text;
      document.getElementById('author').innerText = data[randomQuote].author;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

/* fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      if (data.media_type === 'image') {
        document.querySelector('img').src = data.hdurl;
      } else if (data.media_type === 'video') {
        document.querySelector('iframe').src = data.url;
        document.querySelector('.image').classList.add('hidden');
      }
      document.querySelector('h3').innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
*/
