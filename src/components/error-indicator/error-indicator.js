import React from "react";

import "./error-indicator.css";

const ErrorIndicator = () => {
  return (
    <div class="alert alert-danger" role="alert">
      Somethings wrong. Please, try once again :)
    </div>
  );
};

export default ErrorIndicator;