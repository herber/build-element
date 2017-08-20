import test from 'ava';
import element from '.';

test('creates element', t => {
  const e = element('div', 'child', { attributes: { class: 'main', test: true, not: false }, style: { color: 'red', 'font-size': '2em' } });

  t.is(e, '<div class="main" test style="color: red; font-size: 2em">child</div>');
});

test('creates element with multiple children', t => {
  const e = element('div', ['child1', 'child2'], { attributes: { test: true }, style: { color: 'yellow' } });

  t.is(e, '<div test style="color: yellow">child1 child2</div>');
});

test('creates empty elements', t => {
  const e = element('div');

  t.is(e, '<div></div>');
});

test('creates empty attributeStrings / styleStrings', t => {
  const e = element('div', { attributes: {}, style: {} });

  t.is(e, '<div></div>');
});

test('creates void elements', t => {
  const e = element('hr', 'none', { attributes: { test: true }, style: { color: 'deeppink' } });

  t.is(e, '<hr test style="color: deeppink" />');
});
