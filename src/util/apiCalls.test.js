import { getPotterApi } from './apiCalls';

describe('getPotterApi', () => {
  const mockResponse = [{}, {}, {}, {}];
  const path = 'characters';
  const apiKey = `?key=$2a$10$UN/Up5FVuauhCHKM/olg7efLQBTNWpkOjodpao2ICW0zo5V9zKArq`
  const url = `https://www.potterapi.com/v1/${path}${apiKey}`;

  it('should call fetch with the correct URL', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
    getPotterApi(path);

    expect(window.fetch).toHaveBeenCalledWith(url)
  });

  it('should return an array of paths', () => {
    expect(getPotterApi(path)).resolves.toEqual(mockResponse);
  });

  it('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockResponse)
      });
    });
  
    expect(getPotterApi(path)).rejects.toEqual(Error('Could not fetch path'));
  });

  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('failed to fetch'))
    });

    expect(getPotterApi(path)).rejects.toEqual(Error('failed to fetch'));
  });

});