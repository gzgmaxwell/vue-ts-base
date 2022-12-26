export default [
  {
    url: '/api/test',
    timeout: 1000,
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: ['mock data test', 'mock data test']
      }
    }
  }
]
