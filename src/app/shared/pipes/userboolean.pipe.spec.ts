import { UserbooleanPipe } from './userboolean.pipe';

describe('UserbooleanPipe', () => {
  it('create an instance', () => {
    const pipe = new UserbooleanPipe();
    expect(pipe).toBeTruthy();
  });
});
