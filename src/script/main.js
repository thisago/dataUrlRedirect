/*
  Created at: 07/16/2021 17:22:32 Friday
  Modified at: 07/16/2021 06:09:13 PM Friday
*/

/*
  main
*/

const $ = (id) => document.getElementById(id)

const
  typeEl = $("type"),
  textEl = $("text"),
  base64El = $("base64"),
  submitEl = $("submit"),
  outEl = $("out")

submitEl.addEventListener("click", () => {
  const base64 = base64El.checked
  let html = ""
  switch (typeEl.value) {
    case "html":
      html = textEl.value
      break;
    case "url":
      html = /*html*/ `<script>location.href="${textEl.value}"</script>`
      break;

    default:
      break;
  }
  outEl.value = genHtmlDataUrl(html, base64)
})

const genDataUrl = (mimeType) => (html, encodeBase64 = true) => {
  let value = ""

  if (encodeBase64) value = `;base64,${btoa(html)}`
  else value = `,${html}`

  return `data:${mimeType}${value}`
}

const genHtmlDataUrl = genDataUrl("text/html")
