import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {NgCliGhPagesSampleApp} from '../app/ng-cli-gh-pages-sample';

beforeEachProviders(() => [NgCliGhPagesSampleApp]);

describe('App: NgCliGhPagesSample', () => {
  it('should have the `defaultMeaning` as 42', inject([NgCliGhPagesSampleApp], (app: NgCliGhPagesSampleApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([NgCliGhPagesSampleApp], (app: NgCliGhPagesSampleApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

