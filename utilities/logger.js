const logResponse = (type, message) => {
  const icon = {
    error: "â",
    success: "â",
    warning: "â ī¸",
    notify: "đ",
    info: "âšī¸",
  };
  console.log(`${icon[type]} ${message}`);
};

export default logResponse;
