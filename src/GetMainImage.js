// src/App.js
import { useLocation } from "react-router-dom";

import { ReactComponent as Group2 } from "./assets/group2.svg";
import { ReactComponent as Group } from "./assets/group.svg";

const GetMainImage = () => {
  const imageObj = [
    {
      path: "/datasets",
      svgType: <Group2 className="svg-logo" />,
    },
    {
      path: "/settings",
      svgType: <Group className="svg-logo" />,
    },
  ];
  const updateMainImage = (path) => {
    const imageItem = imageObj.find((item) => item.path === path);
    return imageItem ? imageItem.svgType : null;
  };
  const location = useLocation();

  return updateMainImage(location.pathname);
};

export default GetMainImage;
