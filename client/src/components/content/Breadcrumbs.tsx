import React from "react";
import { useLocation } from "react-router-dom";

import "../../styles/scss/Breadcrumbs.scss";

export const Breadcrumbs = () => {
  const location = useLocation();

  return <div className="bredcrumbs">home{location.pathname}</div>;
};
