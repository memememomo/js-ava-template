import test from 'ava';
import sinon from 'sinon';
import Cat from '../Cat.js';

test.beforeEach(t => {
    t.context.console_log = console.log;
});

test.afterEach(t => {
    console.log = t.context.console_log;
});

test('Cat#walk', t => {
    var tama = new Cat('タマ');

    sinon.stub(console, 'log');
    tama.walk();
    t.true(console.log.calledOnce);
    t.true(console.log.calledWith('タマが歩いています'));
});