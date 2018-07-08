export const fetchData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const login = async (data) => {
  console.log('login',data);
    try {
      //  const response = await fetch("https://randomuser.me/api");
      //  const data = await response.json();
        return {status:true, data};
    } catch (e) {
        console.log(e);
    }
};