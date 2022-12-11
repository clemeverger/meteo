import { getDay } from '../utilities';

test('pass a date return the correct day', () => {
    expect(getDay('11/12/2022')).toBe('Dim.');
});
