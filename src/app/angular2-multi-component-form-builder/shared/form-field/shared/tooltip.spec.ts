import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Tooltip} from './tooltip';

describe('Tooltip', () => {
  it('should create an instance', () => {
    expect(new Tooltip('Something')).toBeTruthy();
  });
});
