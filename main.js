function getData(userId) {
  return new Promise((resolve, reject) => {
    fetch(`https://reqres.in/api/users/${userId}`)
      .then((response) => {
        if(response.ok) {
          return response.json;
        }
        else {
          throw new Error(`Error: ${response.status}`);
        }
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
  });
}