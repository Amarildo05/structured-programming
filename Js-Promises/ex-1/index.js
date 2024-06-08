var promise = new Promise(function (res, rej) {
  const response = true;
  if (response) {
    res("working");
  } else {
    rej("Not Working");
  }
});

promise.then(
  (result) => {alert(result);},
  (error) => {alert(error);}
);