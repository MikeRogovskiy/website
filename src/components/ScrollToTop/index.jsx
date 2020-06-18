import { useState,useEffect } from "react";

export default ({ children, location }) => {
	const [prevHref, changeHref] = useState()
  useEffect(() => {
		if (!prevHref || prevHref === location.href){
			window.scrollTo({ top: 0, behavior: "smooth" })
		}else{
			window.scrollTo({ top: 0 });
		}
		changeHref(location.href)
  },[location, prevHref]);
  return children;
};
