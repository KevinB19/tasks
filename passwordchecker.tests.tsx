test('Password with 16 characters is valid', () => {
  expect(checkPassword('abcdefghijklmno')).toBe(true);
});

test('Password with less than 16 characters is invalid', () => {
  expect(checkPassword('abcdefghijklmn')).toBe(false);
});

test('Password with more than 16 characters is invalid', () => {
  expect(checkPassword('abcdefghijklmnop')).toBe(false);
});

test('Password with numbers is valid', () => {
  expect(checkPassword('abcdefghijklmno1')).toBe(true);
});

test('Password without numbers is invalid', () => {
  expect(checkPassword('abcdefghijklmno')).toBe(false);
});

test('Password with letters is valid', () => {
  expect(checkPassword('abcdefghijklmno1')).toBe(true);
});

test('Password without letters is invalid', () => {
  expect(checkPassword('1234567890123456')).toBe(false);
});

test('Password with special characters is valid', () => {
  expect(checkPassword('abcdefghijklmno1!')).toBe(true);
});

test('Password without special characters is invalid', () => {
  expect(checkPassword('abcdefghijklmno1')).toBe(false);
});

test('Password that does not start with numbers is valid', () => {
  expect(checkPassword('abcdefghijklmno1')).toBe(true);
});

test('Password that starts with numbers is invalid', () => {
  expect(checkPassword('1234567890123456')).toBe(false);

test('Password that does not start with special characters is valid', () => {
  expect(checkPassword('abcdefghijklmno1!')).toBe(true);
});

test('Password that starts with special characters is invalid', () => {
  expect(checkPassword('!abcdefghijklmno1')).toBe(false);
});
