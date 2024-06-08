var returnFileAsync = (fileName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fakeApi = {
        "example.txt": "some text test test test test",
        "example2.txt": "some text from example2 test test test test",
      };
      const found = fakeApi[fileName];
      if (found) {
        resolve(found);
      } else {
        reject("no file found!");
      }
    }, 2000);
  });
};

returnFileAsync("example1.txt").then(
  (response) => {
    alert(response);
  },
  (error) => {
    alert(error);
  }
);