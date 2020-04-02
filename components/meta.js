import Head from 'next/head';
import { palette } from './theme';

const name = 'Adway Wadekar';
const makeTitle = title => (title === name ? title : `${title} – ${name}`);

export default ({
  title = name,
  description = "Adway Wadekar's home on the web.",
  color = palette.primary
}) => (
  <Head>
    <meta key='og_type' property='og:type' content='website' />
    <meta key='og_site' property='og:site_name' content={name} />
    <meta key='twitter_site' name='twitter:site' content='@adwaysw' />
    <title>{makeTitle(title)}</title>
    <meta key='og_title' property='og:title' content={makeTitle(title)} />
    <meta key='twitter_title' name='twitter:title' content={makeTitle(title)} />
    <meta key='desc' name='description' content={description} />
    <meta key='og_desc' property='og:description' content={description} />
    <meta key='twitter_desc' name='twitter:description' content={description} />

    <meta
      key='twitter_card'
      name='twitter:card'
      content='summary_large_image'
    />

    <meta key='theme_color' name='theme-color' content={color} />
    <meta key='tile_color' name='msapplication-TileColor' content={color} />
    <link
      href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap'
      rel='stylesheet'
    />
  </Head>
);
