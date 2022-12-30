import supertest from 'supertest';
import app from '../index';

const request = supertest(app);


describe('endpoint: /foo', (): void => {
    it('returns 404 for invalid endpoint', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/foo');

      expect(response.status).toBe(404);
    });
  });

  it('checks for missing query parameters', async () => {
        const response = await request.get('/api/images?filename=fjord');
        expect(response.status).toBe(200);
      });
    

  describe('Test responses from endpoints', (): void => {
    
  
    describe('endpoint: /api/images', (): void => {
      it('gets /api/images?filename=fjord (valid args)', async (): Promise<void> => {
        const response: supertest.Response = await request.get(
          '/api/images?filename=fjord'
        );
  
        expect(response.status).toBe(200);
      });
  
      it('checks for valid input', async (): Promise<void> => {
        const response: supertest.Response = await request.get(
          '/api/images?filename=fjord&width=200&height=200'
        );
  
        expect(response.status).toBe(200);
      });
  
    
     
    });
})