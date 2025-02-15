import React from 'react'
import { Container } from '../templates/Container'
import ReactMarkdown from 'react-markdown'

const MD = `
## Features
- Share your music to **Twitter**
- Support **Google Play Music** and **Youtube Music**
- Customizable template with variable
  - \`\${title}\`: The title of music
  - \`\${artist}\`: The artist name of music
  - \`\${album}\`: The album name of music
  - \`\${playCount}\`: The play count of music
- Support mobile platform


## Variables supported by each platform

|            Platform            |                        Google Play Music                        |                Youtube Music                |
| :----------------------------: | :-------------------------------------------------------------: | :-----------------------------------------: |
| Desktop <br> (Chrome, Firefox) | \`\${title}\` <br> \`\${artist}\` <br> \`\${album}\` <br> \`\${playCount}\` | \`\${title}\` <br> \`\${artist}\` <br> \`\${album}\` |
|     Android <sup>[1]</sup>     |                   \`\${title}\` <br> \`\${artist}\`                   |  \`\${title}\`  |
|              iOS               |           🚫  <br>  Not yet supported             |  🚫  <br>  Not yet supported   |

<sup>[1]</sup> Currently, only Japanese language environment is supported.


## Installation

### Desktop
- [Chrome](https://chrome.google.com/webstore/detail/nowplaying-for-google-pla/nhpanomgefidcljmcmkbanhoomaglmlk)
- [Firefox](https://addons.mozilla.org/ja/firefox/addon/nowplaying-for-google-pla)

### Android

1. Open [now-playing-for-gpm.mizdra.net](https://now-playing-for-gpm.mizdra.net) with Chrome for Android
   1. Tap menu (<img src="./img/more_vert.svg" alt="Menu Icon" class="icon" />)
   2. Tap <code>Add to Home screen</code> ( Japanese: <code>ホーム画面に追加</code> )
2. Open Google Play Music App for Android
   1. Play your favorite music
   2. Tap menu (<img src="./img/more_vert.svg" alt="Menu Icon" class="icon" />) in Google Play Music
   3. Select #NowPlaying (<img src="./img/logo.svg" alt="#NowPlaying Icon" class="icon" />)
   4. Let's Tweet!
`

function useInstalled() {
  const installed = React.useMemo(() => {
    const params = new URLSearchParams(location.search)
    return params.get('utm_source') === 'homescreen'
  }, [location.search])
  return installed
}

export function Top() {
  const installed = useInstalled()

  return (
    <div>
      <div className="welcome">
        <img src="/img/logo.svg" alt="アプリのロゴ" />
        <h1>#NowPlaying for Google Play Music</h1>
        <p>
          It's tools to share music playing on Google Play Music / Youtube Music
          to SNS.
        </p>
        {installed && (
          <a className="button" href="/config">
            設定を変更
          </a>
        )}
      </div>
      <Container>
        <main>
          <section>
            <ReactMarkdown source={MD} escapeHtml={false} />
          </section>
        </main>
      </Container>
    </div>
  )
}
