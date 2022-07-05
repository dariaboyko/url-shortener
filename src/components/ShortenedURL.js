import classes from "./ShortenedURL.module.css";
import { useEffect, useState } from "react";
function ShortenedURL({url}) {
    const [URLinfo, setInfo] = useState();
    useEffect(() => {
      fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setInfo(data);
          console.log(data)
        });
    });
    function isValidUrl(u) {
  var objRE =
    /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
  return objRE.test(u);
}


  return (
    <>
      <h1 className={classes.title}>YOUR SHORTENED URL:</h1>
      <p className={classes.text}>
        {isValidUrl(url)
          ? URLinfo
            ? URLinfo.result.short_link
            : "Loading.."
          : "Wrong url"}
      </p>
      <button
        className={classes.copyButton}
        onClick={() => {
          isValidUrl(url)
            ? navigator.clipboard.writeText(
                URLinfo ? URLinfo.result.short_link : ""
              )
            : navigator.clipboard.writeText("");
        }}
      >
        COPY
      </button>
    </>
  );
}

export default ShortenedURL;
