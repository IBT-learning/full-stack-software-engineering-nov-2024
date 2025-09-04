import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from './app.js';

describe('Express Server Tests', () => {
  
  // Test for home endpoint (/)
  describe('GET /', () => {
    it('should return HTML h1 header with banner', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);
      
      expect(response.text).toBe('<h1>Welcome to My Express Server!</h1>');
    });
  });

  // Test for about endpoint (/about) - Required Test #1
  describe('GET /about', () => {
    it('should send a static string about yourself', async () => {
      const response = await request(app)
        .get('/about')
        .expect(200);
      
      // Use .toBe() to compare as specified in requirements
      expect(response.text).toBe('I am a web development student learning Express.js and automated testing.');
    });
  });

  // Test for greet endpoint (/greet/:userName) - Required Test #2
  describe('GET /greet/:userName', () => {
    // First request and assertion with different input
    it('should greet person by name - test with "John"', async () => {
      const response = await request(app)
        .get('/greet/John')
        .expect(200);
      
      expect(response.text).toBe('Hello John, welcome to my server!');
    });

    // Second request and assertion with different input
    it('should greet person by name - test with "Sarah"', async () => {
      const response = await request(app)
        .get('/greet/Sarah')
        .expect(200);
      
      expect(response.text).toBe('Hello Sarah, welcome to my server!');
    });

    // Additional test with special characters
    it('should handle names with spaces and special characters', async () => {
      const response = await request(app)
        .get('/greet/Mary Jane')
        .expect(200);
      
      expect(response.text).toBe('Hello Mary Jane, welcome to my server!');
    });
  });

  // Test for favorite endpoint (/favorite) - Required Test #3
  describe('GET /favorite', () => {
    // First request and assertion - with query string
    it('should return favorite thing when fave query is provided', async () => {
      const response = await request(app)
        .get('/favorite?fave=eating')
        .expect(200);
      
      expect(response.text).toBe('My favorite thing is eating');
    });

    // Second request and assertion - with different query string
    it('should handle different favorite things', async () => {
      const response = await request(app)
        .get('/favorite?fave=coding')
        .expect(200);
      
      expect(response.text).toBe('My favorite thing is coding');
    });

    // Test what happens when query string is missing
    it('should return sensible message when fave query is missing', async () => {
      const response = await request(app)
        .get('/favorite')
        .expect(200);
      
      expect(response.text).toBe('Please tell me your favorite thing by adding ?fave=something to the URL');
    });

    // Additional test with empty query parameter
    it('should handle empty fave query parameter', async () => {
      const response = await request(app)
        .get('/favorite?fave=')
        .expect(200);
      
      expect(response.text).toBe('My favorite thing is ');
    });

    // Test with multiple query parameters (only fave should be used)
    it('should only use fave parameter when multiple queries provided', async () => {
      const response = await request(app)
        .get('/favorite?fave=music&other=ignored')
        .expect(200);
      
      expect(response.text).toBe('My favorite thing is music');
    });
  });

  // Bonus tests for extra challenge endpoint
  describe('GET /favorites (Extra Challenge)', () => {
    it('should handle multiple query parameters', async () => {
      const response = await request(app)
        .get('/favorites?color=orange&food=stew')
        .expect(200);
      
      expect(response.text).toBe('My favorite color is orange. My favorite food is stew.');
    });

    it('should handle single query parameter', async () => {
      const response = await request(app)
        .get('/favorites?animal=cat')
        .expect(200);
      
      expect(response.text).toBe('My favorite animal is cat.');
    });

    it('should handle three query parameters', async () => {
      const response = await request(app)
        .get('/favorites?color=blue&sport=soccer&season=summer')
        .expect(200);
      
      expect(response.text).toBe('My favorite color is blue. My favorite sport is soccer. My favorite season is summer.');
    });

    it('should return helpful message when no query parameters provided', async () => {
      const response = await request(app)
        .get('/favorites')
        .expect(200);
      
      expect(response.text).toBe('Please tell me your favorites by adding query parameters like ?color=blue&food=pizza');
    });
  });

});