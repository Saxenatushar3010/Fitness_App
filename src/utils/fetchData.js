// fetching data using rapid API

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9b9aa47a97msh642f9b5744afc3fp1e6ceejsn2e9095401d22', 
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9b9aa47a97msh642f9b5744afc3fp1e6ceejsn2e9095401d22',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url,options) =>{
    const response=await fetch(url,options);
    const data=await response.json();
    return data;
}