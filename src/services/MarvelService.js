class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=22ab13c74453b7d87dff2227ccced67d';
  
  getResourse = async (url) => {
    const res = await fetch(`${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch: ${url}, status ${res.status}`);
    }

    return await res.json();
  }

  getAllCharacters = () => {
    return this.getResourse(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
  }

  getCharacter = (id) => {
    return this.getResourse(`${this._apiBase}characters/${id}?${this._apiKey}`);
  }
}

export default MarvelService;