const apiKey = `?key=$2a$10$UN/Up5FVuauhCHKM/olg7efLQBTNWpkOjodpao2ICW0zo5V9zKArq`

export const getPotterApi = async path => {
    const url = `https://www.potterapi.com/v1/${path}${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      throw Error('Error fetching Potter Api');
    }
    return await Promise.all(data);
};

// export const getHerokuApi = async (url) => {
//     const response = await fetch(url)
//     const data = await response.json()
//       if (!response.ok) {
//         throw Error('Error fetching Heroku HP Api');
//       }
//     return data;
// };