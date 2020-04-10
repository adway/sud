import Head from 'next/head'

const makeTitle = (title, name) =>
  title === name ? title : `${name} – ${title}`

const Meta = ({
  name = 'Substance Use Disorders Among Adolescents', // site name
  title = 'Adway Wadekar', // page title
  description = 'A projet website for submission to the Sigma Xi Student Research Showcase'
}) => (
  <Head>
    <meta key="og_type" property="og:type" content="website" />
    <meta key="og_site" property="og:site_name" content={name} />
    <meta key="og_url" property="og:url" content="https://sud.adway.io/" />
    <meta key="tw_site" name="twitter:site" content="SUDs" />

    <title>{makeTitle(title, name)}</title>
    <meta key="og_title" property="og:title" content={makeTitle(title, name)} />
    <meta
      key="tw_title"
      name="twitter:title"
      content={makeTitle(title, name)}
    />

    {description && [
      <meta key="desc" name="description" content={description} />,
      <meta key="og_desc" property="og:description" content={description} />,
      <meta key="tw_desc" name="twitter:description" content={description} />
    ]}

    <script
      key="heap"
      type="text/javascript"
    >{`window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};heap.load("2803421074");`}</script>
  </Head>
)

export default Meta
