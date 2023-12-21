const process = (item) => {
  Object.keys(item).forEach((key) => {
    if (item[key]) {
      if (!isNaN(item[key])) {
        item[key] = Number(item[key]);
      }
      if (key.includes(".")) {
        const [firstKey, secondKey] = key.split(".");
        item[firstKey] = {
          [secondKey]: item[key],
        };
        delete item[key];
      }
    } else {
      delete item[key];
    }
  });
  return item;
};

const extractFromEvent = (event) => {
  event.preventDefault();
  return process(Object.fromEntries(new FormData(event.target)));
};

const FormDataUtil = {
  extractFromEvent,
};

export default FormDataUtil;
